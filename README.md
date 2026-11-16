# CDNIA — Portfolio technique

Portfolio personnel consacré aux projets en **génie logiciel**, **ingénierie des données**, **visualisation**, **SIG/GIS** et **systèmes informatiques**.

L'objectif est de présenter des réalisations vérifiables : aperçu visuel, décisions techniques, code source, tests et limites.

> **État du projet :** développement en cours. La publication du site GitHub Pages est volontairement suspendue. Le dépôt de code reste public.

## Projet principal

### Child Protection Information Management

Prototype Python de validation, de consolidation et d'export de rapports mensuels, développé avec des **données entièrement synthétiques**.

Il traite les référentiels, les soumissions et leurs révisions, puis consolide les observations issues des soumissions approuvées.

- **Code et documentation :** [cdnia/child_protection_information_management](https://github.com/cdnia/child_protection_information_management).
- **Scénario illustré :** mars 2025, avec 28 séances, 652 participations enregistrées et 12 groupes consolidés.
- **Interprétation :** les 652 participations ne représentent pas nécessairement 652 personnes distinctes ; les partenaires et zones sont fictifs.
- **Tests du moteur Python :** 219 tests Pytest réussis lors de la vérification documentée du 1er novembre 2026, dans l'environnement testé. Ce résultat ne correspond pas à une exécution des tests du site web.

Les aperçus de ce portfolio sont pour le moment une **maquette front-end** : leurs chiffres sont définis directement dans `assets/js/site.js`. L'import automatisé d'un export généré par le pipeline Python reste à développer.

## Ce que contient actuellement le site

- Une page d'accueil responsive et une navigation entre ses sections.
- Un graphique interactif présentant des participations synthétiques par zone fictive, filtrables par activité.
- Une présentation du projet principal avec un lien vers son dépôt technique.
- Des cartes identifiées comme **projets envisagés**, qui ne prétendent pas être des réalisations achevées.

Le site ne contient actuellement ni application métier déployée, ni tableau de bord connecté à des données réelles, ni cartographie interactive.

## Technologies et structure

HTML, CSS et JavaScript natifs, sans framework front-end ni dépendance externe nécessaire au chargement de cette version.

```text
cdnia.github.io/
├── index.html
├── assets/
│   ├── css/
│   │   └── site.css
│   └── js/
│       └── site.js
└── README.md
```

## Consultation en local

1. Récupérer le dépôt GitHub et ouvrir sa racine dans VS Code.
2. Ouvrir `index.html` dans un navigateur, par exemple Opera.
3. Tester les filtres **Toutes**, **Sensibilisation** et **Soutien collectif**, puis les liens internes et l'affichage mobile.

Aucune installation de dépendances JavaScript n'est nécessaire pour cette version.

## Publication et limites

GitHub Pages est volontairement **dépublié** pendant le développement. La source sélectionnée dans les paramètres Pages est **GitHub Actions**, sans workflow de déploiement ajouté au dépôt.

L'URL `https://cdnia.github.io/` n'est donc pas présentée comme une démonstration actuellement disponible.

Le dépôt public permet de consulter le code, mais **n'offre pas une application hébergée privée**.

Les contrôles actuels du site ne constituent pas un audit complet de sécurité, d'accessibilité ou de compatibilité entre navigateurs.

**À venir :** page détaillée du projet principal, meilleure traçabilité entre le pipeline Python et les graphiques, puis nouveaux projets réellement construits et testés. Les fonctions futures ne sont pas présentées comme déjà réalisées.

## Données et réutilisation

Aucune donnée personnelle réelle d'enfant, de bénéficiaire ou de partenaire n'est utilisée dans la démonstration.

Aucune licence de réutilisation n'a encore été publiée pour ce dépôt.
