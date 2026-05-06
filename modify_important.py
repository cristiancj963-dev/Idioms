import json
import re

important_words_raw = """SER, QUERER. VIVIR, VER, HABLAR, PODER, PENSAR, ESTUDIAR, IR, ANDAR, VIAJAR, CANSAR, COMER, COMPRAR, DAR, COGER, PONER, CONTAR, PERMITIR, ABRIR, SOLUCIONAR; DOCUMENTACIÓN, AEROPUERTO, AVION, COCHE, PARADA, ASIENTO, HOTEL, SALON, DORMITORIO, BAÑO, COCINA, PLATO, CUBIERTO, COSA, PAIS, CALLE, HOSPITAL,TIENDA, BANCO, ESCUELA, PAN, CARNE, PESCADO, POSTRE, CAFÉ, NATURALEZA, PAPEL, HOMBRE, AMIGO, TRABAJO, IDEA, NOMBRE, ROPA, TELA, MATERIAL, TIEMPO, HOY, SEMANA, MES, METRO, TIEMPO (Clima). FIESTA, CUERPO, ANIMAL; BUENO,  MAYOR, BONITO, LIMPIO, LISTO, LIBRE, JOVEN, FINO, AGRADABLE, ALEGRE, COLOR; SI, NO, BIEN, QUIZÁ, MUY, AHORA, AQUÍ, DENTRO, RÁPIDO, SALUDAR, ¿QUÉ?, YO, MI, ESTE, A, NÚMERO, DIEZ, PRIMERO"""

# clean up the list
import re
# Replace punctuation with comma, except maybe question marks? The words might have question marks in the dataset or not.
# Let's extract by splitting by , ; .
parts = re.split(r'[,;\.]\s*', important_words_raw)
important_words = [p.strip().upper() for p in parts if p.strip()]

# read vocab
with open('vocab_data.js', 'r', encoding='utf-8') as f:
    content = f.read()
    
# Remove prefix
json_str = content.replace('const vocabData = ', '').strip()
if json_str.endswith(';'):
    json_str = json_str[:-1]

data = json.loads(json_str)

# Helper for comparison
def normalize(word):
    # Remove accents
    replacements = (
        ("á", "a"), ("é", "e"), ("í", "i"), ("ó", "o"), ("ú", "u"),
        ("Á", "A"), ("É", "E"), ("Í", "I"), ("Ó", "O"), ("Ú", "U")
    )
    for a, b in replacements:
        word = word.replace(a, b)
    # Remove special chars
    word = re.sub(r'[^A-Z0-9]', '', word.upper())
    return word

imp_normalized = {normalize(w): w for w in important_words}
matched_words = set()

for item in data:
    orig_es = item["es"]
    norm_es = normalize(orig_es)
    
    if norm_es in imp_normalized:
        item["es"] = orig_es.upper()
        item["isImportant"] = True
        matched_words.add(norm_es)

with open('vocab_data.js', 'w', encoding='utf-8') as f:
    f.write("const vocabData = ")
    json.dump(data, f, ensure_ascii=False, indent=2)
    f.write(";\n")

missing = set(imp_normalized.keys()) - matched_words
print(f"Missing words that didn't match: {missing}")

