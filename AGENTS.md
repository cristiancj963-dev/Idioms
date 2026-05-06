# Agent Instructions - AprendeIdiomas

## Project Overview
A simple web application for learning idioms/vocabulary, featuring a pipeline that extracts Spanish words from a PDF, translates them to Chinese, and generates a JS data file for the frontend.

## Data Pipeline
The vocabulary is generated through a sequential Python pipeline. Run these commands in order:

1. `python fetch_pdf.py` - Downloads PDF and extracts raw text to `pdf_text.txt`.
2. `python extract_words.py` - Extracts a list of unique words to `extracted_words.txt`.
3. `python build_vocab_data.py` - Translates words to Chinese (via Google Translate) and generates `vocab_data.js`.
4. `python add_categories.py` - Assigns categories to words in `vocab_data.js`.
5. `python modify_important.py` - Marks specific high-priority words in `vocab_data.js`.

## Technical Details
- **Frontend**: Vanilla JS, HTML, and CSS.
- **Data Storage**: `vocab_data.js` acts as the primary data store for the frontend.
- **Python Dependencies**: `requests`, `pypdf`, `deep-translator`, `pypinyin`.

## Conventions
- Always run the pipeline in the specified order when updating the vocabulary.
- `vocab_data.js` uses an `export const vocabData = [...]` format.
