# Guide de déploiement Vercel pour Maolys

## Méthode 1 : Déploiement via l'interface Vercel (Recommandé)

### Étape 1 : Créer un compte Vercel
1. Allez sur [vercel.com](https://vercel.com)
2. Cliquez sur **Sign Up**
3. Connectez-vous avec votre compte **GitHub**

### Étape 2 : Importer le projet
1. Dans le dashboard Vercel, cliquez sur **Add New Project**
2. Sélectionnez le repository **MaolysWebsite** (OliverThys/MaolysWebsite)
3. Vercel détectera automatiquement Next.js

### Étape 3 : Configuration du projet
Les paramètres suivants sont automatiquement détectés :
- **Framework Preset**: Next.js
- **Root Directory**: `./` (racine)
- **Build Command**: `npm run build`
- **Output Directory**: `.next`

**Vous pouvez laisser les valeurs par défaut**, Vercel les détecte automatiquement.

### Étape 4 : Variables d'environnement (Optionnel)
Pour le moment, aucune variable d'environnement n'est nécessaire.
Si vous voulez ajouter le formulaire de contact plus tard :
- Ajoutez vos clés API dans **Environment Variables**

### Étape 5 : Déployer
1. Cliquez sur **Deploy**
2. Attendez 2-3 minutes
3. Votre site sera disponible sur : `https://maolys-website-[votre-id].vercel.app`

### Étape 6 : Configurer un nom de domaine personnalisé
1. Allez dans **Settings** → **Domains**
2. Ajoutez `maolys.com` (si vous avez le domaine)
3. Suivez les instructions DNS

---

## Méthode 2 : Déploiement via Vercel CLI

### Installation
```bash
npm i -g vercel
```

### Déploiement
```bash
cd C:\Users\olive\Desktop\Maolys
vercel login
vercel
```

### Première déploiement (Preview)
```bash
vercel
```

### Déploiement en production
```bash
vercel --prod
```

---

## Configuration recommandée

### Domaine personnalisé
1. Dans Vercel Dashboard → Settings → Domains
2. Ajoutez `maolys.com`
3. Configurez les enregistrements DNS :
   - Type: `A`
   - Value: `76.76.21.21`
   - OU utilisez les CNAME fournis par Vercel

### Performance
- Vercel optimise automatiquement Next.js
- Images optimisées via `next/image`
- CDN global inclus
- SSL automatique

### Analytics (Optionnel)
Dans Vercel Dashboard → Analytics :
- Activez Vercel Analytics pour suivre les performances

---

## URLs après déploiement

- **Preview**: `https://maolys-website-[hash].vercel.app`
- **Production**: `https://maolys.com` (après configuration du domaine)

---

## Mises à jour automatiques

Une fois connecté à GitHub, chaque push sur `main` déclenchera automatiquement un nouveau déploiement !

---

## Support

- Documentation Vercel : https://vercel.com/docs
- Support Next.js : https://nextjs.org/docs

