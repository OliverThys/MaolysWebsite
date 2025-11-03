# Maolys - Site Web Vitrine

Site web moderne et professionnel pour Maolys, entreprise spécialisée en développement informatique avec une forte expertise en intelligence artificielle.

## 🚀 Technologies

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **TypeScript**: Pour la sécurité des types
- **Formulaire**: React Hook Form + Zod

## 📦 Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Build pour la production
npm run build

# Lancer en production
npm start
```

## 🌐 Pages Disponibles

- `/` - Page d'accueil avec hero, services, projets, processus
- `/services` - Liste des services proposés
- `/projets` - Portfolio de réalisations
- `/expertise` - Compétences techniques
- `/about` - À propos de Maolys
- `/contact` - Formulaire de contact

## 🎨 Caractéristiques

- ✅ Design moderne et minimaliste
- ✅ Mode sombre par défaut
- ✅ Animations fluides avec Framer Motion
- ✅ Responsive mobile-first
- ✅ SEO optimisé (metadata, sitemap, robots.txt)
- ✅ Performance optimale (lazy loading, optimisations)
- ✅ Accessibilité

## 📝 Configuration

### Variables d'environnement

Créez un fichier `.env.local` :

```env
NEXT_PUBLIC_SITE_URL=https://maolys.com
```

### API Contact

L'endpoint `/api/contact` est configuré. Pour envoyer réellement des emails, configurez un service comme Resend ou SendGrid.

## 🚀 Déploiement

Le site est optimisé pour Vercel :

```bash
# Installer Vercel CLI
npm i -g vercel

# Déployer
vercel
```

## 📄 License

© 2024 Maolys. Tous droits réservés.

