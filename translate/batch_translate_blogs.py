#!/usr/bin/env python3
"""
Batch Blog Translation Script

This script processes all .md files in the BLOGS_DIR directory and its subdirectories,
intelligently handling source languages and translating to appropriate target languages.

Features:
- Scans all .md files and subfolders under BLOGS_DIR
- Files directly in BLOGS_DIR are assumed to be English and translated to all other languages
- Files in language-named subfolders (e.g., zh-TW/) are translated to all languages except the source
- Branch management (creates new branch if on main, uses current if not)
- Processes each blog file individually
- Converts to proper blog format with frontmatter
- Individual commits and pushes for progress preservation
- Detailed summary reporting

Examples:
    BLOGS_DIR/blog1.md → translated to all languages except English
    BLOGS_DIR/es/blog2.md → translated to all languages except Spanish
    BLOGS_DIR/zh-TW/blog3.md → translated to all languages except Traditional Chinese

Usage:
    python batch_translate_blogs.py

Requirements:
    - ARK_API_KEY environment variable
    - Git repository with remote origin configured
    - Dependencies from requirements-batch-translate.txt
"""

import os
import sys
import subprocess
import tempfile
import shutil
import json
from pathlib import Path
from datetime import datetime
from colorama import init, Fore, Style
import argparse

# Initialize colorama for cross-platform colored output
init(autoreset=True)

# Utility functions
def get_python_command():
    """Get the appropriate Python command (python3 or python)"""
    return "python3" if shutil.which("python3") else "python"

# Configuration
SUPPORTED_LANGUAGES = [
  'en', 'es', 'zh-TW', 'zh-CN', 'ja', 'ko', 'fr', 'de', 'ar', 'fa', 
  'fil', 'hi', 'id', 'ms', 'pl', 'pt', 'ru', 'ta', 'th', 'vi', 'ro'
]

BLOGS_DIR = Path("batch2")
CONTENT_BLOG_DIR = Path("../src/content/blog")
SCRIPTS_DIR = Path("./")

class BlogTranslator:
    def __init__(self):
        self.session_stats = {
            "total_blogs": 0,
            "processed_blogs": 0,
            "successful_translations": 0,
            "failed_translations": 0,
            "total_files_created": 0,
            "blog_summaries": []
        }
        
    def print_header(self):
        """Print the script header"""
        print(f"{Fore.CYAN}{'='*80}")
        print(f"{Fore.CYAN}🌍 BATCH BLOG TRANSLATION SCRIPT")
        print(f"{Fore.CYAN}Intelligently translating blogs from '{BLOGS_DIR}' and subdirectories")
        print(f"{Fore.CYAN}Supports {len(SUPPORTED_LANGUAGES)} languages with smart source detection")
        print(f"{Fore.CYAN}{'='*80}{Style.RESET_ALL}")
    
    def check_prerequisites(self):
        """Check all prerequisites before starting"""
        print(f"{Fore.YELLOW}🔍 Checking prerequisites...")
        
        # Check API key
        if not os.environ.get("ARK_API_KEY"):
            print(f"{Fore.RED}❌ ARK_API_KEY environment variable not found!")
            print(f"{Fore.RED}   Please set it with: export ARK_API_KEY=your_api_key")
            return False
        print(f"{Fore.GREEN}✅ ARK_API_KEY environment variable found")
        
        # Check required directories
        if not BLOGS_DIR.exists():
            print(f"{Fore.RED}❌ Blogs directory '{BLOGS_DIR}' not found!")
            return False
        print(f"{Fore.GREEN}✅ Blogs directory found")
        
        # Check scripts
        convert_script = SCRIPTS_DIR / "convert-to-blog-post.py"
        translate_script = SCRIPTS_DIR / "translate.py"
        
        if not convert_script.exists():
            print(f"{Fore.RED}❌ Convert script not found: {convert_script}")
            return False
        print(f"{Fore.GREEN}✅ Convert script found")
        
        if not translate_script.exists():
            print(f"{Fore.RED}❌ Translate script not found: {translate_script}")
            return False
        print(f"{Fore.GREEN}✅ Translate script found")
        
        # Check git repository
        try:
            subprocess.run(["git", "status"], check=True, capture_output=True)
            print(f"{Fore.GREEN}✅ Git repository detected")
        except subprocess.CalledProcessError:
            print(f"{Fore.RED}❌ Not in a git repository!")
            return False
            
        return True
    
    def setup_git_push_default(self):
        """Set up git to push to origin by default"""
        try:
            # Get current branch
            result = subprocess.run(
                ["git", "branch", "--show-current"], 
                capture_output=True, text=True, check=True
            )
            current_branch = result.stdout.strip()
            
            # Set upstream for current branch
            subprocess.run([
                "git", "config", "--local", 
                f"branch.{current_branch}.remote", "origin"
            ], check=True)
            
            subprocess.run([
                "git", "config", "--local", 
                f"branch.{current_branch}.merge", f"refs/heads/{current_branch}"
            ], check=True)
            
            print(f"{Fore.GREEN}✅ Git push default configured for branch '{current_branch}'")
            return current_branch
            
        except subprocess.CalledProcessError as e:
            print(f"{Fore.YELLOW}⚠️  Could not configure git push default: {e}")
            return None
    
    def setup_branch(self):
        """Setup git branch - create new if on main, use current otherwise"""
        try:
            # Get current branch
            result = subprocess.run(
                ["git", "branch", "--show-current"], 
                capture_output=True, text=True, check=True
            )
            current_branch = result.stdout.strip()
            
            if current_branch == "main":
                # Create new branch
                timestamp = datetime.now().strftime("%Y%m%d-%H%M%S")
                new_branch = f"batch-blog-translation-{timestamp}"
                
                print(f"{Fore.YELLOW}📝 Currently on 'main' branch")
                print(f"{Fore.YELLOW}🌿 Creating new branch: {new_branch}")
                
                subprocess.run(["git", "checkout", "-b", new_branch], check=True)
                working_branch = new_branch
            else:
                print(f"{Fore.YELLOW}📝 Using current branch: {current_branch}")
                working_branch = current_branch
            
            # Set up git config
            subprocess.run([
                "git", "config", "--local", "user.email", "batch-translator@seameet.ai"
            ], check=True)
            subprocess.run([
                "git", "config", "--local", "user.name", "Batch Blog Translator"
            ], check=True)
            
            # Set up push default
            self.setup_git_push_default()
            
            return working_branch
            
        except subprocess.CalledProcessError as e:
            print(f"{Fore.RED}❌ Git branch setup failed: {e}")
            return None
    
    def get_blog_files_and_languages(self):
        """Get all .md files from blogs directory and subdirectories with their source languages
        
        Returns:
            list: List of tuples (blog_file_path, source_language, target_languages)
        """
        blog_entries = []
        
        # Process files directly in BLOGS_DIR (assume English)
        direct_files = list(BLOGS_DIR.glob("*.md"))
        for blog_file in direct_files:
            # For files directly in BLOGS_DIR, source is English, translate to all other languages
            # target_languages = [lang for lang in SUPPORTED_LANGUAGES if lang != "en"]
            blog_entries.append((blog_file, "en", SUPPORTED_LANGUAGES))
        
        # Process subdirectories (language folders)
        for item in BLOGS_DIR.iterdir():
            if item.is_dir():
                # Check if directory name is a supported language
                if item.name in SUPPORTED_LANGUAGES:
                    source_lang = item.name
                    # Find all .md files in this language directory
                    lang_files = list(item.glob("*.md"))
                    for blog_file in lang_files:
                        # Translate to all languages except the source language
                        # target_languages = [lang for lang in SUPPORTED_LANGUAGES if lang != source_lang]
                        blog_entries.append((blog_file, source_lang, SUPPORTED_LANGUAGES))
                else:
                    # Directory name is not a supported language, recursively search for .md files
                    # and treat them as English
                    md_files = list(item.rglob("*.md"))
                    for blog_file in md_files:
                        # target_languages = [lang for lang in SUPPORTED_LANGUAGES if lang != "en"]
                        blog_entries.append((blog_file, "en", SUPPORTED_LANGUAGES))
        
        # Sort by file path for consistent processing order
        blog_entries.sort(key=lambda x: str(x[0]))
        return blog_entries
    
    def convert_blog_to_format(self, blog_file, temp_dir):
        """Convert blog file to proper format using convert-to-blog-post.py"""
        temp_converted = temp_dir / "blog-converted.md"
        today_date = datetime.now().strftime("%Y-%m-%d")
        
        try:
            subprocess.run([
                get_python_command(), str(SCRIPTS_DIR / "convert-to-blog-post.py"),
                str(blog_file), str(temp_converted), "--date", today_date
            ], check=True, capture_output=True, text=True)
            
            return temp_converted
            
        except subprocess.CalledProcessError as e:
            print(f"{Fore.RED}❌ Conversion failed for {blog_file.name}: {e}")
            return None
    
    def translate_blog(self, converted_file, language, temp_dir, source_language="en"):
        """Translate blog to specific language using translate.py
        
        Args:
            converted_file: Path to the converted blog file
            language: Target language code
            temp_dir: Temporary directory path
            source_language: Source language code (default: "en")
        
        Returns:
            str: 'created' if new file was created, 'skipped' if file already exists, 'failed' if error
        """
        try:
            env = os.environ.copy()
            env["ARK_API_KEY"] = os.environ["ARK_API_KEY"]
            
            cmd = [
                get_python_command(), str(SCRIPTS_DIR / "translate.py"),
                str(converted_file), language,
                "--source-language", source_language,
                "--output-base-dir", str(CONTENT_BLOG_DIR)
            ]
            print(f"{Fore.BLUE}    🚀 Command: {' '.join(cmd)}")
            
            result = subprocess.run(cmd, env=env, check=True, capture_output=True, text=True)
            
            # Check if file was skipped by parsing output
            if result.stdout and "File already exists - skipping" in result.stdout:
                print(f"{Fore.YELLOW}    ⏭️  Skipped (file exists)")
                return "skipped"
            
            # Show success output and extract file path
            if result.stdout:
                stdout_lines = result.stdout.strip().split('\n')
                for line in stdout_lines:
                    if "Output:" in line and ".md" in line:
                        # Extract and convert to absolute path for clearer verification
                        file_path = line.split("Output:")[-1].strip()
                        absolute_path = Path(file_path).resolve()
                        print(f"{Fore.GREEN}    📁 Created: {absolute_path}")
                    elif "TRANSLATION COMPLETED" in line:
                        print(f"{Fore.GREEN}    ✅ Translation completed successfully")
                    elif line.strip():  # Show other non-empty lines
                        print(f"{Fore.GREEN}    📄 {line.strip()}")
            
            return "created"
            
        except subprocess.CalledProcessError as e:
            print(f"{Fore.RED}  ❌ Translation to {language} failed (exit code {e.returncode})")
            if e.stdout:
                print(f"{Fore.RED}     stdout: {e.stdout.strip()}")
            if e.stderr:
                print(f"{Fore.RED}     stderr: {e.stderr.strip()}")
            return "failed"
    
    def commit_and_push(self, blog_name, language, files_created):
        """Commit and push the translated files"""
        try:
            # Stage the src/content/blog directory
            subprocess.run(["git", "add", str(CONTENT_BLOG_DIR)], check=True)
            
            # Check if there are changes to commit
            result = subprocess.run(
                ["git", "diff", "--staged", "--quiet"],
                capture_output=True
            )
            
            if result.returncode == 0:  # No changes
                print(f"{Fore.YELLOW}  ℹ️  No changes to commit for {language}")
                return True
            
            # Create commit message
            commit_msg = f"""feat: translate {blog_name} to {language}

- Blog: {blog_name}
- Language: {language}
- Files created: {files_created}
- Auto-generated by batch blog translator
- Progress preservation commit"""
            
            # Commit
            subprocess.run(["git", "commit", "-m", commit_msg], check=True)
            
            # Push
            subprocess.run(["git", "push", "origin"], check=True)
            
            print(f"{Fore.GREEN}  ✅ Committed and pushed {language} translation")
            return True
            
        except subprocess.CalledProcessError as e:
            print(f"{Fore.YELLOW}  ⚠️  Commit/push failed for {language}: {e}")
            print(f"{Fore.YELLOW}     Files are saved locally but not pushed")
            return False
    
    def process_single_blog(self, blog_file, source_language, target_languages):
        """Process a single blog file through the complete translation workflow"""
        blog_name = blog_file.stem
        print(f"{Fore.CYAN}\n{'='*60}")
        print(f"{Fore.CYAN}📖 Processing: {blog_name}")
        print(f"{Fore.CYAN}📍 Source language: {source_language}")
        print(f"{Fore.CYAN}🎯 Target languages: {len(target_languages)} languages")
        print(f"{Fore.CYAN}{'='*60}")
        
        blog_stats = {
            "name": blog_name,
            "file": str(blog_file),
            "source_language": source_language,
            "target_languages": target_languages,
            "successful_languages": [],
            "failed_languages": [],
            "files_created": 0,
            "processing_time": 0
        }
        
        start_time = datetime.now()
        
        # Create temporary directory for processing
        with tempfile.TemporaryDirectory() as temp_dir:
            temp_dir = Path(temp_dir)
            
            # Step 1: Convert to blog format
            print(f"{Fore.YELLOW}🔄 Converting to blog format...")
            converted_file = self.convert_blog_to_format(blog_file, temp_dir)
            if not converted_file:
                print(f"{Fore.RED}❌ Skipping {blog_name} due to conversion failure")
                return blog_stats
            
            print(f"{Fore.GREEN}✅ Conversion successful")
            
            # Step 2: Create language directories and show debug info
            print(f"{Fore.BLUE}🔍 Debug: CONTENT_BLOG_DIR = {CONTENT_BLOG_DIR} (absolute: {CONTENT_BLOG_DIR.resolve()})")
            for lang in target_languages:
                lang_dir = CONTENT_BLOG_DIR / lang
                lang_dir.mkdir(parents=True, exist_ok=True)
            
            # Step 3: Translate to each target language
            print(f"{Fore.YELLOW}🌍 Translating to {len(target_languages)} languages...")
            
            for i, language in enumerate(target_languages, 1):
                print(f"{Fore.CYAN}  [{i:2}/{len(target_languages)}] Translating to {language}...")
                
                status = self.translate_blog(converted_file, language, temp_dir, source_language)
                
                if status == "created":
                    blog_stats["successful_languages"].append(language)
                    blog_stats["files_created"] += 1
                    self.session_stats["successful_translations"] += 1
                    self.commit_and_push(blog_name, language, 1)
                    print(f"{Fore.GREEN}  ✅ {language}: 1 file(s) created")
                elif status == "skipped":
                    blog_stats["successful_languages"].append(language)
                    print(f"{Fore.YELLOW}  ✅ {language}: Skipped (already exists)")
                else:  # status == "failed"
                    blog_stats["failed_languages"].append(language)
                    self.session_stats["failed_translations"] += 1
                    print(f"{Fore.RED}  ❌ {language}: Translation failed")
                
                # Small delay to avoid overwhelming API
                import time
                time.sleep(0.5)
        
        # Calculate processing time
        end_time = datetime.now()
        processing_time = (end_time - start_time).total_seconds()
        blog_stats["processing_time"] = processing_time
        
        # Print blog summary
        successful_count = len(blog_stats["successful_languages"])
        failed_count = len(blog_stats["failed_languages"])
        
        print(f"\n{Fore.CYAN}📊 Summary for {blog_name}:")
        print(f"{Fore.GREEN}  ✅ Successful: {successful_count}/{len(target_languages)} languages")
        print(f"{Fore.RED}  ❌ Failed: {failed_count}/{len(target_languages)} languages")
        print(f"{Fore.BLUE}  📁 Files created: {blog_stats['files_created']}")
        print(f"{Fore.BLUE}  ⏱️  Processing time: {processing_time:.1f}s")
        
        if failed_count > 0:
            print(f"{Fore.YELLOW}  ⚠️  Failed languages: {', '.join(blog_stats['failed_languages'])}")
        
        self.session_stats["total_files_created"] += blog_stats["files_created"]
        return blog_stats
    
    def print_final_summary(self, blog_summaries, total_time):
        """Print comprehensive final summary"""
        print(f"\n{Fore.CYAN}{'='*80}")
        print(f"{Fore.CYAN}🎉 BATCH TRANSLATION COMPLETE")
        print(f"{Fore.CYAN}{'='*80}")
        
        # Overall statistics
        print(f"{Fore.BLUE}\n📊 Overall Statistics:")
        print(f"{Fore.GREEN}  ✅ Total blogs processed: {self.session_stats['processed_blogs']}/{self.session_stats['total_blogs']}")
        print(f"{Fore.GREEN}  ✅ Successful translations: {self.session_stats['successful_translations']}")
        print(f"{Fore.RED}  ❌ Failed translations: {self.session_stats['failed_translations']}")
        print(f"{Fore.BLUE}  📁 Total files created: {self.session_stats['total_files_created']}")
        print(f"{Fore.BLUE}  ⏱️  Total processing time: {total_time:.1f}s ({total_time/60:.1f} minutes)")
        
        # Success rate
        if self.session_stats['successful_translations'] + self.session_stats['failed_translations'] > 0:
            success_rate = (self.session_stats['successful_translations'] / 
                           (self.session_stats['successful_translations'] + self.session_stats['failed_translations'])) * 100
            print(f"{Fore.BLUE}  📈 Success rate: {success_rate:.1f}%")
        
        # Per-blog breakdown
        print(f"{Fore.BLUE}\n📚 Per-Blog Summary:")
        for blog_stat in blog_summaries:
            successful = len(blog_stat["successful_languages"])
            failed = len(blog_stat["failed_languages"])
            total_target_langs = len(blog_stat["target_languages"])
            source_lang = blog_stat.get("source_language", "en")
            
            if successful == total_target_langs:
                status_icon = f"{Fore.GREEN}✅"
            elif successful > failed:
                status_icon = f"{Fore.YELLOW}⚠️ "
            else:
                status_icon = f"{Fore.RED}❌"
            
            print(f"  {status_icon} {blog_stat['name']:<20} | {source_lang} → {successful:2}/{total_target_langs:2} languages | {blog_stat['files_created']:3} files | {blog_stat['processing_time']:6.1f}s")
        
        # Language success rates
        print(f"{Fore.BLUE}\n🌍 Language Success Rates:")
        lang_stats = {}
        for blog_stat in blog_summaries:
            for lang in blog_stat["successful_languages"]:
                lang_stats[lang] = lang_stats.get(lang, 0) + 1
        
        for lang in SUPPORTED_LANGUAGES:
            success_count = lang_stats.get(lang, 0)
            success_rate = (success_count / len(blog_summaries)) * 100 if blog_summaries else 0
            
            if success_rate == 100:
                icon = f"{Fore.GREEN}✅"
            elif success_rate >= 80:
                icon = f"{Fore.YELLOW}⚠️ "
            else:
                icon = f"{Fore.RED}❌"
            
            print(f"  {icon} {lang:<8} | {success_count:2}/{len(blog_summaries):2} blogs | {success_rate:5.1f}%")
        
        print(f"{Fore.CYAN}{'='*80}{Style.RESET_ALL}")
        
        # Save detailed report
        self.save_detailed_report(blog_summaries, total_time)
    
    def save_detailed_report(self, blog_summaries, total_time):
        """Save a detailed JSON report of the translation session"""
        report = {
            "session_info": {
                "timestamp": datetime.now().isoformat(),
                "total_time_seconds": total_time,
                "total_blogs": len(blog_summaries),
                "total_languages": len(SUPPORTED_LANGUAGES),
                "languages": SUPPORTED_LANGUAGES
            },
            "statistics": self.session_stats,
            "blog_details": blog_summaries
        }
        
        report_file = f"translation-report-{datetime.now().strftime('%Y%m%d-%H%M%S')}.json"
        
        try:
            with open(report_file, 'w') as f:
                json.dump(report, f, indent=2)
            print(f"{Fore.GREEN}📄 Detailed report saved: {report_file}")
        except Exception as e:
            print(f"{Fore.YELLOW}⚠️  Could not save detailed report: {e}")
    
    def run(self):
        """Main execution function"""
        session_start = datetime.now()
        
        try:
            self.print_header()
            
            # Check prerequisites
            if not self.check_prerequisites():
                sys.exit(1)
            
            # Setup git branch
            working_branch = self.setup_branch()
            if not working_branch:
                sys.exit(1)
            
            print(f"{Fore.GREEN}🌿 Working on branch: {working_branch}")
            
            # Get blog files and their language configurations
            blog_entries = self.get_blog_files_and_languages()
            if not blog_entries:
                print(f"{Fore.RED}❌ No .md files found in '{BLOGS_DIR}' directory or subdirectories")
                sys.exit(1)
            
            self.session_stats["total_blogs"] = len(blog_entries)
            print(f"{Fore.BLUE}📚 Found {len(blog_entries)} blog files to process")
            
            # Show summary of what will be processed
            total_translations = sum(len(target_langs) for _, _, target_langs in blog_entries)
            print(f"{Fore.BLUE}🌍 Total translations to perform: {total_translations}")
            
            # Process each blog
            blog_summaries = []
            for i, (blog_file, source_lang, target_langs) in enumerate(blog_entries, 1):
                print(f"\n{Fore.MAGENTA}{'='*80}")
                print(f"{Fore.MAGENTA}📖 BLOG {i}/{len(blog_entries)}: {blog_file.name}")
                print(f"{Fore.MAGENTA}📍 Source: {source_lang} → Targets: {len(target_langs)} languages")
                print(f"{Fore.MAGENTA}{'='*80}")
                
                blog_stats = self.process_single_blog(blog_file, source_lang, target_langs)
                blog_summaries.append(blog_stats)
                self.session_stats["processed_blogs"] += 1
                
                # Show progress
                remaining = len(blog_entries) - i
                if remaining > 0:
                    print(f"{Fore.BLUE}\n⏳ Progress: {i}/{len(blog_entries)} complete, {remaining} remaining")
            
            # Final commit for any remaining changes
            try:
                subprocess.run(["git", "add", str(CONTENT_BLOG_DIR)], check=True)
                result = subprocess.run(["git", "diff", "--staged", "--quiet"], capture_output=True)
                
                if result.returncode != 0:  # There are changes
                    final_commit_msg = f"""feat: batch blog translation session complete

- Processed {len(blog_entries)} blog files
- Total translations: {self.session_stats['successful_translations']} successful, {self.session_stats['failed_translations']} failed
- Total files created: {self.session_stats['total_files_created']}
- Session completed: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}"""
                    
                    subprocess.run(["git", "commit", "-m", final_commit_msg], check=True)
                    subprocess.run(["git", "push", "origin"], check=True)
                    print(f"{Fore.GREEN}✅ Final session commit pushed")
            
            except subprocess.CalledProcessError:
                print(f"{Fore.YELLOW}⚠️  Final commit/push skipped (no changes or error)")
            
            # Calculate total time and print summary
            session_end = datetime.now()
            total_time = (session_end - session_start).total_seconds()
            
            self.print_final_summary(blog_summaries, total_time)
            
        except KeyboardInterrupt:
            print(f"\n{Fore.YELLOW}⚠️  Process interrupted by user")
            print(f"{Fore.YELLOW}   Progress has been saved in individual commits")
            sys.exit(1)
        except Exception as e:
            print(f"\n{Fore.RED}❌ Unexpected error: {e}")
            sys.exit(1)

def main():
    """Main entry point"""
    parser = argparse.ArgumentParser(
        description="Batch translate all blog files to multiple languages",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Environment Variables:
    ARK_API_KEY    Required API key for translation service

Examples:
    # Basic usage
    python batch_translate_blogs.py
    
    # Set API key and run
    export ARK_API_KEY=your_api_key_here
    python batch_translate_blogs.py

Notes:
    - Creates new git branch if currently on 'main'
    - Commits and pushes after each language translation
    - Generates detailed JSON report at completion
    - Process can be safely interrupted (progress is preserved)
        """
    )
    
    args = parser.parse_args()
    
    translator = BlogTranslator()
    translator.run()

if __name__ == "__main__":
    main()
