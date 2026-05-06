import re

with open('pdf_text.txt', 'r', encoding='utf-8') as f:
    lines = f.readlines()

vocab_words = []
in_vocab_section = False

# Heuristic: The words seem to be in blocks.
# Let's extract lines that have 1-3 words, mostly capitalized, and not sentences.
for obj in lines:
    line = obj.strip()
    if not line:
        continue
    
    # Exclude pages
    if line.startswith("--- Page") or line.isdigit():
        continue
        
    # Check if line looks like a valid table word (1 to 3 words, starts with a capital letter)
    # in the original file they start with spaces.
    if obj.startswith("  ") and line[0].isupper() and len(line.split()) <= 3 and not line.endswith("."):
        vocab_words.append(line)

# Clean and dedup
clean_words = []
seen = set()
for w in vocab_words:
    # remove trailing punctuations or non words
    w = re.sub(r'[^a-zA-ZáéíóúÁÉÍÓÚñÑ ]', '', w).strip()
    w = w.capitalize()
    if w and w not in seen and len(w) > 2:
        seen.add(w)
        clean_words.append(w)

with open('extracted_words.txt', 'w', encoding='utf-8') as f:
    for w in clean_words:
        f.write(w + "\n")

print(f"Extracted {len(clean_words)} words.")
