# MyNetWork

## Prérequis

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [Docker](https://www.docker.com/)

## Installation

1. Clonez le dépôt :

    ```bash
    git clone https://github.com/VotreNom/MyNetWork.git
    cd MyNetWork
    ```

2. Installez les dépendances :

    ```bash
    npm install
    ```

## Configuration

Créez un fichier `.env` à la racine du projet et configurez les variables d'environnement nécessaires. Assurez-vous d'inclure les paramètres pour la connexion à votre base de données MySQL.

Exemple de fichier `.env` :

DB_HOST= ''
DB_USER=''
DB_PASSWORD=''
DB_DATABASE=''
DB_PORT=''


## Base de données MySQL

1. Avoir une base de données MySQL prête.
2. Exécutez les migrations de base de données :

    ```bash
    npm run initialize-db
    ```

## Lancement de l'application

```bash
npm run dev

L'application sera accessible à l'adresse http://localhost:3000.

Problèmes connus
Problème de connexion à la base de données MySQL : Actuellement, il existe un problème de connexion à la base de données MySQL.

![Alt text](<Screenshot from 2023-12-22 20-04-39.png>)

![Alt text](<Screenshot from 2023-12-22 20-05-43.png>)