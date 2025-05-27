---
title: "Classification de clients pour optimisation des relances téléphoniques"
slug: "classification-clients-huissiers"
images:
  - "/huissiers/archi.png"
  - "/huissiers/bdd.png"
 
description: >
  Projet de data science et machine learning réalisé pour un groupe d’huissiers afin de prédire la probabilité de remboursement de créanciers. L’objectif était d’optimiser les appels de relance en priorisant les clients selon leur potentiel de paiement.

details: >
  Le projet a débuté par une analyse exploratoire approfondie des bases de données clients transmises par les huissiers. Cette étape a permis de comprendre la structure, la variabilité et la véracité des informations disponibles. Un travail rigoureux de nettoyage a été effectué, notamment via la mise en place d’un pipeline ELT pour fiabiliser les données entrantes.

  En collaboration avec l’équipe SI (2 personnes) et l’équipe administrative en charge des appels, nous avons identifié les critères influençant la capacité de remboursement. Sur cette base, plusieurs itérations de modèles de classification ont été entraînées et évaluées, en intégrant progressivement le retour terrain pour affiner les prédictions.

  Un système de scoring a été mis en place pour prioriser les relances, avec des tests réguliers d’amélioration des performances. Enfin, la solution a été déployée et automatisée, permettant une classification continue et une meilleure efficacité des équipes de relance.

durée:
  - "Phase 1 (2 mois) : Analyse des tables, vérification de la qualité des données et mise en place d’un pipeline ELT pour le nettoyage initial."
  - "Phase 2 (2 mois) : Collaboration avec l’équipe métier pour identifier les critères de scoring, exploration statistique et construction des premières features."
  - "Phase 3 (2 mois) : Entraînement et amélioration de modèles de classification, tests croisés avec retours de l’équipe administrative."
  - "Phase 4 (2 mois) : Déploiement du modèle, automatisation des flux de données et intégration dans le système de relance."

role: "Arhictecte data, responsable du pipeline ELT, de la modélisation prédictive et de l’automatisation de la solution"

technos:
  - Python
  - Scikit-learn
  - Pandas
  - Airflow
  - PostgreSQL
  - FastAPI
  - ELT
  - Classification supervisée

team: >
  Projet mené avec l’équipe SI (2 personnes) et l’équipe administrative des huissiers. Collaboration étroite pour le recueil des besoins métiers, la validation des résultats et l’intégration dans le processus opérationnel de relance téléphonique.
---
