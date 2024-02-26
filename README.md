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

GitHub est un service web d'hébergement et de gestion de développement de logiciels qui se repose sur **Git**. GitHub propose des comptes professionnels payants, ainsi que des comptes gratuits pour les projets de logiciels libres (Open Source). Le site a été lancé en 2008 par Tom Preston-Werner, Chris Wanstrath, Scott Chacon et PJ Hyett. Microsoft a racheté GitHub en 2018 et continue de promouvoir le développement open source.

## Tutoriel 1

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

Pour initialiser un dépôt git, vous devez vous placer dans le répertoire de votre projet et exécuter la commande suivante :

```bash
$ git init
```

### Ajout de fichiers

Pour ajouter des fichiers à votre dépôt git, vous devez exécuter la commande suivante :

```bash
$ git add nom_du_fichier
```

### Commit

Pour **sauvegarder les modifications** de vos fichiers, vous devez exécuter la commande suivante :

```bash
$ git commit -m "Message de commit"
```

### Historique

Pour consulter **l'historique de vos commits**, vous pouvez exécuter la commande suivante :

```bash
$ git log
```

### Branches

Pour créer une nouvelle branche, vous pouvez exécuter la commande suivante :

```bash
$ git branch nom_de_la_branche # Créer une nouvelle branche
$ git checkout nom_de_la_branche # Se déplacer sur la nouvelle branche
```
