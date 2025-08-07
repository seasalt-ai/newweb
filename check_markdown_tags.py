import os
import re
import yaml

def check_tags_format(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Use regex to find the front matter block
    match = re.match(r'---\n(.*?)\n---\n', content, re.DOTALL)
    if not match:
        return None  # No front matter found

    front_matter_str = match.group(1)
    try:
        front_matter = yaml.safe_load(front_matter_str)
    except yaml.YAMLError as e:
        print(f"Error parsing YAML in {file_path}: {e}")
        return None

    if 'tags' in front_matter:
        tags = front_matter['tags']
        if not isinstance(tags, list):
            return file_path  # Tags field is not a list
    return None

def process_all_markdown_files(base_dir):
    invalid_tags_files = []
    for root, _, files in os.walk(base_dir):
        for file in files:
            if file.endswith('.md'):
                file_path = os.path.join(root, file)
                result = check_tags_format(file_path)
                if result:
                    invalid_tags_files.append(result)
    return invalid_tags_files

if __name__ == "__main__":
    blog_content_path = '/Users/user/Documents/个人/实习/Seasalt/New Project/newweb-main-branch/content/blog'
    files_with_invalid_tags = process_all_markdown_files(blog_content_path)

    if files_with_invalid_tags:
        print("以下 Markdown 文件的 'tags' 字段不是数组格式：")
        for f in files_with_invalid_tags:
            print(f)
    else:
        print("所有 Markdown 文件的 'tags' 字段格式都正确。")