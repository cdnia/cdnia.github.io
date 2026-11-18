# CDNIA — Portfolio technique

Portfolio personnel consacré aux projets en **génie logiciel**, **ingénierie des données**, **visualisation**, **SIG/GIS** et **systèmes informatiques**.

L'objectif est de présenter des réalisations vérifiables : aperçu visuel, décisions techniques, code source, tests et limites.

> **État du projet :** développement en cours. La publication du site GitHub Pages est volontairement suspendue. Le dépôt de code reste public.

## Projet principal

### Child Protection Information Management

Prototype Python de validation, de consolidation et d'export de rapports mensuels, développé avec des **données entièrement synthétiques**.

Il traite les référentiels, les soumissions et leurs révisions, puis consolide les observations issues des soumissions approuvées.

- **Étude de cas visuelle :** [consulter la page détaillée du projet](projects/child_protection_information_management/index.html).
- **Code et documentation :** [cdnia/child_protection_information_management](https://github.com/cdnia/child_protection_information_management).
- **Scénario illustré :** mars 2025, avec 28 séances, 652 participations enregistrées et 12 groupes consolidés.
- **Interprétation :** les 652 participations ne représentent pas nécessairement 652 personnes distinctes ; les partenaires et zones sont fictifs.
- **Tests du moteur Python :** 219 tests Pytest réussis lors de la vérification documentée du 1er novembre 2026, dans l'environnement testé. Ce résultat ne correspond pas à une exécution des tests du site web.

Les aperçus de ce portfolio sont pour le moment une **maquette front-end** : leurs chiffres sont définis directement dans `assets/js/site.js`. L'import automatisé d'un export généré par le pipeline Python reste à développer.

## Ce que contient actuellement le site

- Une page d'accueil responsive et une navigation entre ses sections.
- Un graphique interactif présentant des participations synthétiques par zone fictive, filtrables par activité.
- Une présentation du projet principal avec un accès à son étude de cas et à son dépôt technique.
- Une page détaillée du projet **Child Protection Information Management** présentant le problème traité, la méthode, les résultats synthétiques, les preuves disponibles et les limites.
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
├── projects/
│   └── child_protection_information_management/
│       └── index.html
└── README.md
```

## Consultation en local

1. Récupérer le dépôt GitHub et ouvrir sa racine dans VS Code.
2. Ouvrir `index.html` dans Chrome ou Opera. Cliquer sur **Explorer les projets** : la page doit défiler jusqu'à la section **Projets**.
3. Dans la carte **Child Protection Information Management**, cliquer sur **Découvrir l'étude de cas** : le fichier `projects/child_protection_information_management/index.html` doit s'ouvrir.
4. Sur la page détaillée, cliquer sur **Comprendre le traitement** : la page doit défiler jusqu'à la section **Méthode**. Cliquer ensuite sur **← Retour aux projets** : la section **Projets** de l'accueil doit réapparaître.
5. Sur l'accueil, cliquer sur **Examiner le dépôt et les tests** : le dépôt Python doit s'ouvrir dans un nouvel onglet.
6. Sur l'accueil, sélectionner le filtre **Sensibilisation** : les compteurs doivent afficher **500 participations**, **18 séances** et **6 groupes**. Cliquer sur **Toutes** : ils doivent revenir à **652 participations**, **28 séances** et **12 groupes**.
7. Examiner les deux pages en affichage mobile : aucun texte ne doit être coupé et aucun défilement horizontal indésirable ne doit apparaître.

Aucune installation de dépendances JavaScript n'est nécessaire pour cette version.

## Publication et limites

GitHub Pages est volontairement **dépublié** pendant le développement. La source sélectionnée dans les paramètres Pages est **GitHub Actions**, sans workflow de déploiement ajouté au dépôt.

L'URL `https://cdnia.github.io/` n'est donc pas présentée comme une démonstration actuellement disponible.

Le dépôt public permet de consulter le code, mais **n'offre pas une application hébergée privée**.

Les contrôles actuels du site ne constituent pas un audit complet de sécurité, d'accessibilité ou de compatibilité entre navigateurs.

**À venir :** graphiques complémentaires et présentation visuelle des règles métier, meilleure traçabilité entre les exports du pipeline Python et les visualisations du site, puis nouveaux projets réellement construits et testés. Les fonctions futures ne sont pas présentées comme déjà réalisées.

## Données et réutilisation

Aucune donnée personnelle réelle d'enfant, de bénéficiaire ou de partenaire n'est utilisée dans la démonstration.

Aucune licence de réutilisation n'a encore été publiée pour ce dépôt.
