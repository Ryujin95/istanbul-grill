# Istanbul Grill

Site vitrine du restaurant, composé d'un front React/Vite (`front`) et d'une API Express (`back`).

## Prérequis

- Node.js 20 ou plus récent
- npm

## Démarrer l'API

```bash
cd back
npm ci
npm run dev
```

L'API utilise le port `3001` par défaut. Pour un hébergeur, elle utilise automatiquement la variable `PORT` fournie.

## Démarrer le front

```bash
cd front
copy .env.example .env
npm ci
npm run dev
```

Renseigne `VITE_API_URL` dans `front/.env` avec l'URL de l'API. Les variables commençant par `VITE_` sont publiques : ne place jamais de secret dans ce fichier.

## Vérifier avant un déploiement

```bash
cd front
npm run lint
npm run build

cd ../back
npm test
```

Le front est déployé sur Vercel avec `front` comme dossier racine. Les dossiers `node_modules`, `dist` et les fichiers `.env` ne doivent jamais être commités.
