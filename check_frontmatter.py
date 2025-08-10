import os
import re
import yaml

def check_frontmatter(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Frontmatter is typically enclosed by '---'
    match = re.match(r'---\s*\n(.*?)\n---\s*\n', content, re.DOTALL)
    if not match:
        return f"No frontmatter found or invalid frontmatter delimiters in {file_path}"

    frontmatter_str = match.group(1)

    try:
        frontmatter = yaml.safe_load(frontmatter_str)
    except yaml.YAMLError as e:
        return f"YAML parsing error in {file_path}: {e}"

    # Example check: ensure 'tags' is a list
    if 'tags' in frontmatter and not isinstance(frontmatter['tags'], list):
        return f"'tags' field is not a list in {file_path}"

    return None # No error

def main():
    blog_dir = '/Users/user/Documents/个人/实习/Seasalt/New Project/newweb-main-branch/content/blog/'
    problem_files = []

    for root, _, files in os.walk(blog_dir):
        for file in files:
            if file.endswith('.md'):
                file_path = os.path.join(root, file)
                error = check_frontmatter(file_path)
                if error:
                    problem_files.append(error)

    if problem_files:
        print("Found Markdown files with frontmatter issues:")
        for problem in problem_files:
            print(problem)
    else:
        print("All Markdown files have valid frontmatter.")

if __name__ == '__main__':
    main()