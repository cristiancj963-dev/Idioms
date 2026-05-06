import json
import re

# We will read the JS file to extract the JSON array, add categories, and write it back.
with open('vocab_data.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Make it valid JSON by stripping JS export declaration
json_str = content.replace('export const vocabData = ', '').strip()
if json_str.endswith(';'):
    json_str = json_str[:-1]

data = json.loads(json_str)

for i, item in enumerate(data):
    category = "Otros"
    if 0 <= i <= 138:
        category = "Verbos"
    elif 139 <= i <= 564:
        category = "Sustantivos"
    elif 565 <= i <= 632:
        if i == 565: continue # Skip "Adjetivos" word itself if we want, or keep it
        category = "Adjetivos"
    elif 633 <= i <= 692:
        category = "Adverbios"
    elif 693 <= i <= 701:
        category = "Saludos y Extras"
    elif 702 <= i <= 735:
        category = "Pronombres"
    elif 736 <= i <= 769:
        category = "Números"
    else:
        category = "Tiempos Verbales"
        
    item['category'] = category

# Write back
with open('vocab_data.js', 'w', encoding='utf-8') as f:
    f.write("export const vocabData = ")
    json.dump(data, f, ensure_ascii=False, indent=2)
    f.write(";\n")

print("Added categories to vocab_data.js!")
