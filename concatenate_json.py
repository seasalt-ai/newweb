import sys

def main():
    if len(sys.argv) < 3:
        print("Usage: python concatenate_json.py <output_file> <input_file1> <input_file2> ...")
        sys.exit(1)

    output_file = sys.argv[1]
    input_files = sys.argv[2:]

    with open(output_file, 'w', encoding='utf-8') as outfile:
        outfile.write('{\n')
        for i, input_file in enumerate(input_files):
            with open(input_file, 'r', encoding='utf-8') as infile:
                content = infile.read().strip()
                # Remove leading '{' and trailing '}'
                if content.startswith('{'):
                    content = content[1:]
                if content.endswith('}'):
                    content = content[:-1]
                
                outfile.write(content.strip())
                if i < len(input_files) - 1:
                    outfile.write(',\n')
        outfile.write('\n}\n')

if __name__ == "__main__":
    main()
