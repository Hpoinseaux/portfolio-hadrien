---
title: "Application d’aide à la communication parentale post-séparation"
slug: "communication-non-violente-parentalite"
images:
  - "/projettiers/tiers.png"
  - "/projettiers/Workflow.png"



description: >
  Un outil numérique visant à limiter les violences verbales dans les échanges écrits entre parents séparés, notamment lors de la gestion partagée des enfants. L’application propose une classification automatique des messages à risque, un adoucissement linguistique des propos, ainsi qu’un tableau de bord d’analyse des types de violences verbales recensées.

details: >
  Ce projet a été conçu comme une solution légère et accessible, destinée aux familles en situation de tension, aux médiateurs familiaux ou aux services sociaux. Il repose sur trois piliers techniques :
  
  **1. Classification automatique des messages violents**  
  Un pipeline de traitement permet de détecter et classifier les types de violence verbale dans un message (insultes, menaces, culpabilisation, chantage, ironie passive, etc.) à l’aide d’un modèle supervisé basé sur **Random Forest** et complété par une analyse lexicale.  
  Un corpus annoté de messages anonymisés a été constitué pour l'entraînement, en incluant des formulations typiques de SMS parentaux en contexte de séparation.

  **2. Générateur de reformulation en langage neutre (RAG spécialisé)**  
  Utilisation d’un système RAG (Retrieval-Augmented Generation) adapté au style **SMS/courts messages**, capable de reformuler un message tendu de façon plus factuelle et apaisée. Le système conserve le contenu informationnel tout en retirant les éléments agressifs ou accusateurs. Il est également capable de suggérer des formulations alternatives plus acceptables.

  **3. Dashboard de suivi statistique (Apache Superset)**  
  Mise en place d’un tableau de bord interactif permettant :
  - d’analyser la fréquence des types de violence détectés
  - de visualiser l’évolution des tensions dans les échanges
  - de fournir des indicateurs utilisables par des médiateurs ou travailleurs sociaux
  
  Ce dashboard vise à objectiver les dynamiques de communication parentale et à mieux cibler les besoins d’accompagnement.

role: >
  Développeur full-stack et data scientist indépendant. Conception du projet, constitution du jeu de données, développement des modèles de classification et de génération, mise en place du front et du dashboard. Travail réalisé dans une optique sociale, avec attention à la faisabilité low-cost et au respect des données sensibles.

durée:
  - "2 mois : création du dataset, entraînement du modèle de classification, mise en place du système RAG personnalisé, développement d’un mini-front d’édition, et intégration d’un dashboard analytique Superset."

technos:
  - Python
  - Scikit-learn (Random Forest)
  - Hugging Face Transformers
  - FastAPI
  - Apache Superset
  - SQLite
  - Streamlit (version test rapide)


team: >
  Projet réalisé en autonomie, avec consultation de médiateurs familiaux et de psychologues spécialisés en communication non-violente. Approche éthique : données anonymisées, attention au consentement, et transparence du fonctionnement du modèle.

---
