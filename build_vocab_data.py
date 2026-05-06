import json
import time
from deep_translator import GoogleTranslator
from pypinyin import pinyin, Style

# Read words
with open('extracted_words.txt', 'r', encoding='utf-8') as f:
    words = [line.strip() for line in f if line.strip()]

results = []
chunk_size = 50
translator = GoogleTranslator(source='es', target='zh-CN')

def get_pinyin(chinese_text):
    py_list = pinyin(chinese_text, style=Style.TONE)
    return " ".join([item[0] for item in py_list])

total_chunks = (len(words) + chunk_size - 1) // chunk_size

for i in range(total_chunks):
    chunk = words[i*chunk_size : (i+1)*chunk_size]
    # Join with newlines
    text_to_translate = "\n".join(chunk)
    print(f"Translating chunk {i+1}/{total_chunks}...")
    try:
        translated_text = translator.translate(text_to_translate)
        translated_lines = translated_text.split('\n')
        
        # Sometimes translation drops lines, so we map them safely
        for j, sp_word in enumerate(chunk):
            zh_word = translated_lines[j] if j < len(translated_lines) else ""
            zh_pinyin = get_pinyin(zh_word)
            results.append({
                "es": sp_word,
                "zh": zh_word,
                "pinyin": zh_pinyin
            })
    except Exception as e:
        print(f"Error on chunk {i+1}: {e}")
        # fallback to individual
        for sp_word in chunk:
            try:
                zh_word = translator.translate(sp_word)
                zh_pinyin = get_pinyin(zh_word)
                results.append({"es": sp_word, "zh": zh_word, "pinyin": zh_pinyin})
            except:
                results.append({"es": sp_word, "zh": "", "pinyin": ""})
            time.sleep(0.5)

with open('vocab_data.js', 'w', encoding='utf-8') as f:
    f.write("export const vocabData = ")
    json.dump(results, f, ensure_ascii=False, indent=2)
    f.write(";\n")

print("Done generating vocab_data.js")
