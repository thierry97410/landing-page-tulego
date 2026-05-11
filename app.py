import streamlit as st
import streamlit.components.v1 as components

# Configuration de la page pour le projet TULEGO
st.set_page_config(page_title="TULEGO - Preview", layout="wide")

# Lecture du fichier index.html
with open("index.html", 'r', encoding='utf-8') as f:
    html_content = f.read()

# Affichage du contenu HTML
components.html(html_content, height=2000, scrolling=True)
