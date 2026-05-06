import requests
from pypdf import PdfReader
import io

url = "https://buscodescargas.wordpress.com/wp-content/uploads/2012/10/aprender-un-idioma-en-7-dias.pdf"
response = requests.get(url)
response.raise_for_status()

reader = PdfReader(io.BytesIO(response.content))
full_text = ""
for i, page in enumerate(reader.pages):
    text = page.extract_text()
    if text:
        full_text += f"--- Page {i+1} ---\n{text}\n"

with open("pdf_text.txt", "w", encoding="utf-8") as f:
    f.write(full_text)
print(f"Extracted {len(reader.pages)} pages to pdf_text.txt.")
