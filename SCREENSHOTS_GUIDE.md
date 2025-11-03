# Guide d'intégration des Screenshots

## 📸 Pour ajouter vos screenshots manuellement :

1. **Copiez vos fichiers** depuis `C:\Users\olive\Pictures\Screenshot maolys` vers `public\projects\`

2. **Renommez-les selon cette convention** :

### Page d'accueil (affichés dans la section projets) :
- `hellojade.jpg` - Screenshot principal HelloJADE
- `easyrecruit.jpg` - Screenshot principal EasyRecruit
- `helloluna.jpg` - Screenshot principal HelloLuna
- `rbbc.jpg` - Screenshot principal RBBC Website

### Pages détaillées (affichés en haut de chaque page projet) :
- `hellojade-main.jpg` - Screenshot haute résolution HelloJADE
- `easyrecruit-main.jpg` - Screenshot haute résolution EasyRecruit
- `helloluna-main.jpg` - Screenshot haute résolution HelloLuna
- `rbbc-main.jpg` - Screenshot haute résolution RBBC Website

## 🚀 Utiliser le script automatique :

Exécutez cette commande dans PowerShell depuis le dossier du projet :

```powershell
powershell -ExecutionPolicy Bypass -File scripts\copy-screenshots.ps1
```

Le script va :
- Détecter automatiquement vos fichiers
- Les copier dans `public\projects\`
- Les renommer correctement selon leur contenu

## 💡 Formats acceptés :
- `.jpg` / `.jpeg`
- `.png`
- `.webp` (recommandé pour de meilleures performances)

## ✅ Après avoir ajouté les screenshots :
1. Rafraîchissez la page (Ctrl+F5)
2. Les images devraient s'afficher automatiquement
3. Si vous voyez encore des placeholders, vérifiez les noms de fichiers

