[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/_hLprFeW)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=14058477&assignment_repo_type=AssignmentRepo)
# Introduction à Git

## Git

### Qu'est-ce que Git ?

Sauver son travail et faire des versions est une étape importante pour tous les projets. Mais le faire à la main est fastidieux et source d'erreurs!

**Git** est un logiciel de gestion de versions (VCS en anglais, pour Version Control System). Il est le plus utilisé dans le monde du développement logiciel. Il a été créé par Linus Torvalds, le créateur du noyau Linux. **Git** est un logiciel libre et open source qui permet de suivre les modifications de fichiers dans le temps. Il permet de travailler à plusieurs sur un même projet, de suivre les modifications de chaque personne et de revenir à une version antérieure si besoin.

En plus du suivi des versions, un système VCS comme **Git** offre les fonctions suivantes:

- **Segmentation du travail**
- **Collaboration à plusieurs sur les mêmes fichiers**
- **Sauvegarde et historique**
- **Suivi et report des erreurs / bugs**

### Qu'est-ce que GitHub ?

**GitHub** est un service web d'hébergement et de gestion de développement de logiciels qui se repose sur **Git**. **GitHub** propose des comptes professionnels payants, ainsi que des comptes gratuits pour les projets de logiciels libres (Open Source). Le site a été lancé en 2008 par Tom Preston-Werner, Chris Wanstrath, Scott Chacon et PJ Hyett. Microsoft a racheté **GitHub** en 2018 et continue de promouvoir le développement open source.

## Tutoriel 1

Ce tutoriel vous fait apprendre à utiliser les bases de **Git**. Vous allez commencer un projet et le lier avec votre compte **GitHub**.

### Installation

Vous devriez avoir git préinstallé sur votre machine. Si ce n'est pas le cas, vous pouvez le télécharger sur [git-scm.com](https://git-scm.com/downloads).
Pour installer git, vous pouvez suivre ces [instructions en français](https://git-scm.com/book/fr/v2/D%C3%A9marrage-rapide-Installation-de-Git).

### Configuration

Après avoir installé git, vous devez configurer votre nom d'utilisateur et votre adresse email. Pour cela, vous pouvez utiliser les commandes suivantes :

```bash
$ git config --global user.name "Votre Nom"
$ git config --global user.email "email@example.com"
```

### Initialisation

Pour installer ce "repo" (repository), vous devez exécuter la commande suivante :

```bash
$ git clone … # le lien de votre repo
```

Vous trouverez ce lien sous le bouton "Code" de votre repo sur **GitHub**.

![Bouton Code Github](private/docs/clone.png)

### Faites vos modifications

1. Ajoutez un fichier `index.html` à la racine de votre répertoire de travail.
1. Générez le squelette de votre fichier html avec l'extension **!** de **Emmet**.
1. Paramétrez la balise `lang` en "fr"
1. Ajoutez le titre "Apprendre Git" dans la balise `<title>`.
1. Ajoutez une image dans le `<body>` (il faudra également ajouter l'image dans votre répertoire de travail).
1. Ajoutez un paragraphe de texte et tout le reste qui vous semble nécessaire.
1. Ajoutez un fichier `style.css` à la racine de votre répertoire de travail.
1. Ajoutez une règle de style pour le titre de votre page.

### Vérification de l'état

Pour vérifier l'état de vos fichiers, vous pouvez exécuter la commande suivante :

```bash
$ git status
```

Vous constaterez que vos fichiers sont en rouge, ce qui signifie qu'ils ne sont pas encore suivis par **Git**.

### Ajout de fichiers

Pour ajouter des fichiers à votre dépôt git, vous devez exécuter la commande suivante :

```bash
$ git add nom_du_fichier
```

En utilisant le caractère `.`, vous pouvez ajouter tous les fichiers modifiés à la fois :

```bash
$ git add .
```

La meilleure pratique est d'ajouter les fichiers un par un pour éviter d'ajouter des fichiers inutiles. On utilise pour cela le flag `--patch`:

```bash
$ git add --patch
```

### Vérification de l'état

Pour vérifier l'état de vos fichiers, vous pouvez exécuter la commande suivante :

```bash
$ git status
```

Vous constaterez que vos fichiers sont en vert, ce qui signifie qu'ils sont prêts à être sauvegardés. Avec cette commande, on peut choisir tous les fichiers à sauvegarder ou seulement certains et ainsi

### Commit

Pour **sauvegarder les modifications** de vos fichiers, vous devez exécuter la commande suivante :

```bash
$ git commit -m "Message de commit"
```

### Historique

Pour consulter **l'historique de vos commits** (et des miens), vous pouvez exécuter la commande suivante :

```bash
$ git log
```

### Envoi sur GitHub

Pour **envoyer vos modifications** sur **GitHub**, vous devez exécuter la commande suivante :

```bash
$ git push origin main
```

C'est fini! Vous avez maintenant un projet sur **GitHub**!
