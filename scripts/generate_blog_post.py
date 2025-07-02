
import os
import frontmatter
import requests
import json
from datetime import datetime

# --- Configuration ---
# Replace with your actual Generative AI API details
API_KEY = "YOUR_API_KEY"
API_ENDPOINT = "YOUR_API_ENDPOINT" 
# Example for OpenAI: "https://api.openai.com/v1/chat/completions"

# --- Helper Functions ---

def get_existing_topics():
    """
    Reads all markdown files in the content/en/ directory and extracts their
    titles and meta descriptions.
    """
    existing_topics = []
    for filename in os.listdir("content/en"):
        if filename.endswith(".md"):
            with open(os.path.join("content/en", filename), "r") as f:
                post = frontmatter.load(f)
                if "title" in post:
                    existing_topics.append(post["title"])
                if "meta_description" in post:
                    existing_topics.append(post["meta_description"])
    return existing_topics

def generate_unique_topic(existing_topics):
    """
    Generates a new, unique blog topic and SEO keywords using a generative AI.
    """
    headers = {
        "Authorization": f"Bearer {API_KEY}",
        "Content-Type": "application/json",
    }
    prompt = f"""
    Based on the following existing blog titles and descriptions, suggest a new, completely different blog topic about AI, customer service, or marketing.
    The new topic should not overlap with the existing ones.
    Provide the output in JSON format with the keys "topic" and "seo_keywords".

    Existing topics:
    {json.dumps(existing_topics)}
    """
    data = {
        "model": "gpt-4", # Or your preferred model
        "messages": [{"role": "user", "content": prompt}],
        "response_format": { "type": "json_object" },
    }
    response = requests.post(API_ENDPOINT, headers=headers, json=data)
    response.raise_for_status()
    content = response.json()["choices"][0]["message"]["content"]
    return json.loads(content)


def generate_blog_post(topic, seo_keywords):
    """
    Generates a blog post in English using a generative AI.
    """
    headers = {
        "Authorization": f"Bearer {API_KEY}",
        "Content-Type": "application/json",
    }
    prompt = f"""
    Write a blog post about the following topic: {topic}
    Include the following SEO keywords: {", ".join(seo_keywords)}
    The blog post should be engaging, informative, and well-structured.
    The output should be a markdown-formatted string.
    """
    data = {
        "model": "gpt-4", # Or your preferred model
        "messages": [{"role": "user", "content": prompt}],
    }
    response = requests.post(API_ENDPOINT, headers=headers, json=data)
    response.raise_for_status()
    return response.json()["choices"][0]["message"]["content"]

def generate_image(prompt):
    """
    Generates an image using a generative AI and saves it to the public/images/blog directory.
    Returns the path to the saved image.
    """
    # This is a placeholder. You will need to replace this with the actual
    # API call to your image generation service.
    print(f"Generating image for prompt: {prompt}")
    image_filename = f"{prompt.replace(' ', '-').lower()}.png"
    image_path = os.path.join("public/images/blog", image_filename)
    with open(image_path, "wb") as f:
        # Replace this with the actual image data from the API response
        f.write(b"") 
    return image_path


def translate_text(text, target_language):
    """
    Translates text using a generative AI.
    """
    headers = {
        "Authorization": f"Bearer {API_KEY}",
        "Content-Type": "application/json",
    }
    prompt = f"Translate the following text to {target_language}:

{text}"
    data = {
        "model": "gpt-4", # Or your preferred model
        "messages": [{"role": "user", "content": prompt}],
    }
    response = requests.post(API_ENDPOINT, headers=headers, json=data)
    response.raise_for_status()
    return response.json()["choices"][0]["message"]["content"]


def create_blog_post_file(language, topic, content, image1_path, image2_path):
    """
    Creates a new markdown file for the blog post.
    """
    post = frontmatter.Post(content)
    post["title"] = topic
    post["meta_description"] = content[:150] # Truncate for meta description
    post["date"] = datetime.now().strftime("%Y-%m-%d")
    post["image"] = image1_path
    post["image2"] = image2_path

    # Create a filename from the topic
    filename = f"{topic.replace(' ', '-').lower()}.md"
    filepath = os.path.join("content", language, filename)

    with open(filepath, "w") as f:
        frontmatter.dump(post, f)

# --- Main Execution ---

if __name__ == "__main__":
    # 1. Get existing topics
    existing_topics = get_existing_topics()

    # 2. Generate a unique topic
    new_topic_data = generate_unique_topic(existing_topics)
    topic = new_topic_data["topic"]
    seo_keywords = new_topic_data["seo_keywords"]

    # 3. Generate the English blog post
    english_content = generate_blog_post(topic, seo_keywords)

    # 4. Generate images
    image1_path = generate_image(f"Illustration for blog post about {topic}")
    image2_path = generate_image(f"Abstract art related to {topic}")

    # 5. Create the English blog post file
    create_blog_post_file("en", topic, english_content, image1_path, image2_path)

    # 6. Translate and create blog posts for other languages
    for lang in ["es", "zh-TW"]:
        translated_content = translate_text(english_content, lang)
        create_blog_post_file(lang, topic, translated_content, image1_path, image2_path)

    print("Successfully generated and translated blog posts!")
