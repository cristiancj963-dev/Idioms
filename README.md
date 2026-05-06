# Vocabulario Chino — Método Ramón Campayo

Esta aplicación es una herramienta de estudio diseñada para facilitar el aprendizaje acelerado del chino mandarín, adaptando los principios del libro **"Aprender un idioma en 7 días"** de Ramón Campayo.

## 🧠 El Método Campayo

El método se basa en la premisa de que la memorización de vocabulario puede acelerarse drásticamente mediante el uso de reglas mnemotécnicas, evitando la repetición mecánica. Los dos pilares implementados en esta herramienta son:

1.  **Pronunciación Literal**: En lugar de depender únicamente del Pinyin, el estudiante escribe cómo "oye" la palabra en su propio idioma. Esto crea un ancla auditiva más fuerte.
2.  **Asociación Inverosímil**: Para recordar el significado, se crea una imagen mental absurda, exagerada o graciosa que conecte el sonido de la palabra extranjera con su significado en español. Cuanto más extraña sea la asociación, más fácil será de recordar.

## 🚀 Funcionamiento de la Aplicación

La aplicación consta de dos partes: un pipeline de datos en Python y una interfaz de estudio en JS.

### 🛠️ Pipeline de Datos (Backend)
El vocabulario se genera automáticamente a partir de un PDF siguiendo este flujo:
1. `fetch_pdf.py`: Descarga el PDF original y extrae el texto bruto.
2. `extract_words.py`: Filtra y extrae las palabras clave del texto.
3. `build_vocab_data.py`: Traduce las palabras al chino y genera el Pinyin utilizando `deep-translator` y `pypinyin`.
4. `add_categories.py`: Organiza las palabras en categorías (Verbos, Sustantivos, etc.).
5. `modify_important.py`: Marca las palabras de alta prioridad.

El resultado final es el archivo `vocab_data.js`, que sirve como base de datos para el frontend.

### 💻 Interfaz de Estudio (Frontend)
La aplicación web permite al usuario:
- **Filtrar por Categorías**: Organizar el estudio por tipo de palabra o enfocarse en las "Palabras importantes".
- **Registro Personalizado**: El usuario puede ingresar su propia *Pronunciación Literal* y *Asociación Inverosímil* directamente en la tabla.
- **Persistencia Local**: Todas las asociaciones y pronunciaciones se guardan automáticamente en el `localStorage` del navegador, permitiendo que el progreso se mantenga entre sesiones.

## 📦 Instalación y Uso

### Requisitos
- Python 3.x
- Dependencias de Python: `requests`, `pypdf`, `deep-translator`, `pypinyin`.

### Ejecución del Pipeline
Para actualizar el vocabulario, ejecuta los scripts en el siguiente orden:
```bash
python fetch_pdf.py
python extract_words.py
python build_vocab_data.py
python add_categories.py
python modify_important.py
```

### Ejecución del Frontend
Simplemente abre el archivo `index.html` en cualquier navegador moderno.

## 📁 Estructura de Archivos
- `index.html` / `style.css` / `app.js`: Interfaz de usuario y lógica de persistencia.
- `vocab_data.js`: Datos de vocabulario generados.
- `*.py`: Scripts del pipeline de procesamiento de datos.
