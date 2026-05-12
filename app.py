import streamlit as st
import streamlit.components.v1 as components

# Configuration de la page pour le projet TULEGO
st.set_page_config(page_title="TULEGO — L'Analyse Augmentée", layout="wide")

# Lecture du fichier index.html
with open("index.html", 'r', encoding='utf-8') as f:
    html_content = f.read()

# Ajuste les liens relatifs pour Streamlit (cgu.html, mentions-legales.html)
html_content = html_content.replace('href="cgu.html"', 'href="https://github.com/thierry97410/landing-page-tulego/raw/main/cgu.html"')
html_content = html_content.replace('href="mentions-legales.html"', 'href="https://github.com/thierry97410/landing-page-tulego/raw/main/mentions-legales.html"')

# Affichage du contenu HTML — hauteur suffisante pour toute la page
components.html(html_content, height=10000, scrolling=True)
