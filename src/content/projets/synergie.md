---
title: "Classification intelligente des retours techniques sur distributeurs de médicaments"
slug: "classification-retours-techniques"
images:
  - "/projetRetours/architecture.png"
  - "/projetRetours/dashboard.png"
description: >
  Mise en place d’un système de classification automatique des retours techniques issus des distributeurs automatiques de médicaments. Grâce à des techniques de machine learning non supervisé et à un dashboard Power BI, l’entreprise peut désormais prioriser ses interventions et améliorer sa maintenance préventive.

details: >
  L’entreprise installe et maintient des machines de distribution de médicaments en pharmacie. Face à une volumétrie croissante de retours techniques transmis par les techniciens, l’objectif a été de structurer ces données pour en extraire de la valeur.

  Le projet a commencé par une collaboration étroite avec l’équipe technique pour définir les grandes **catégories de pannes** et **mots-clés caractéristiques**. Ces éléments ont ensuite guidé une phase de **clustering non supervisé** en deep learning sur des retours non labellisés, permettant de faire émerger des regroupements cohérents.

  Une fois la classification validée et enrichie en itération avec l’équipe technique, elle a été **déployée directement dans la base de données** centralisant les incidents. Enfin, un **dashboard interactif sous Power BI** a été développé pour permettre à la direction et aux équipes opérationnelles de visualiser les typologies de pannes, les fréquences, et les tendances par pharmacie, par machine, ou par période.

durée:
  - "Phase 1 (1 mois) Définition des catégories et mots-clés avec l’équipe technique"
  - "Phase 2 (1,5 mois) Clustering non supervisé sur les tickets techniques"
  - "Phase 3 (1 mois) Déploiement de la classification sur la base de données"
  - "Phase 4 (0,5 mois) Développement et mise en production du dashboard Power BI"

role: "Architecte Data  – responsable du traitement NLP, du clustering et du reporting analytique"

technos:
  - Python
  - scikit-learn
  - TensorFlow
  - NLP
  - Power BI
  - PostgreSQL

team: >
  Projet mené en collaboration avec l’équipe technique (techniciens de maintenance), l’équipe administrative et la direction de l’entreprise. Une approche collaborative a permis d’aligner les catégories métier avec les données réelles et de favoriser l’adoption des outils analytiques.
---
