# Script PowerShell pour copier les screenshots dans le bon dossier avec les bons noms
# Placez vos screenshots dans le dossier source et modifiez les chemins si nécessaire

$sourceDir = "C:\Users\olive\Pictures\Screenshot maolys"
$targetDir = "public\projects"

# Créer le dossier de destination s'il n'existe pas
if (-not (Test-Path $targetDir)) {
    New-Item -ItemType Directory -Path $targetDir -Force | Out-Null
}

# Mapping des noms de fichiers
$mapping = @{
    # Page d'accueil
    "hellojade*.jpg" = "hellojade.jpg"
    "hellojade*.png" = "hellojade.jpg"
    "easyrecruit*.jpg" = "easyrecruit.jpg"
    "easyrecruit*.png" = "easyrecruit.jpg"
    "helloluna*.jpg" = "helloluna.jpg"
    "helloluna*.png" = "helloluna.jpg"
    "rbbc*.jpg" = "rbbc.jpg"
    "rbbc*.png" = "rbbc.jpg"
    
    # Pages détaillées (si vous avez des fichiers avec "main" dans le nom)
    "*hellojade*main*.jpg" = "hellojade-main.jpg"
    "*hellojade*main*.png" = "hellojade-main.jpg"
    "*easyrecruit*main*.jpg" = "easyrecruit-main.jpg"
    "*easyrecruit*main*.png" = "easyrecruit-main.jpg"
    "*helloluna*main*.jpg" = "helloluna-main.jpg"
    "*helloluna*main*.png" = "helloluna-main.jpg"
    "*rbbc*main*.jpg" = "rbbc-main.jpg"
    "*rbbc*main*.png" = "rbbc-main.jpg"
}

Write-Host "Recherche des screenshots dans: $sourceDir" -ForegroundColor Cyan

if (Test-Path $sourceDir) {
    $files = Get-ChildItem -Path $sourceDir -File -Include *.jpg,*.png,*.jpeg,*.webp
    
    if ($files.Count -eq 0) {
        Write-Host "Aucun fichier image trouvé dans le dossier source." -ForegroundColor Yellow
        Write-Host "`nFichiers attendus:" -ForegroundColor Cyan
        Write-Host "  - hellojade.jpg (ou .png)" -ForegroundColor Gray
        Write-Host "  - easyrecruit.jpg (ou .png)" -ForegroundColor Gray
        Write-Host "  - helloluna.jpg (ou .png)" -ForegroundColor Gray
        Write-Host "  - rbbc.jpg (ou .png)" -ForegroundColor Gray
        Write-Host "  - hellojade-main.jpg (optionnel)" -ForegroundColor Gray
        Write-Host "  - easyrecruit-main.jpg (optionnel)" -ForegroundColor Gray
        Write-Host "  - helloluna-main.jpg (optionnel)" -ForegroundColor Gray
        Write-Host "  - rbbc-main.jpg (optionnel)" -ForegroundColor Gray
    } else {
        Write-Host "Fichiers trouvés:" -ForegroundColor Green
        foreach ($file in $files) {
            Write-Host "  - $($file.Name)" -ForegroundColor Gray
            
            # Essayer de trouver le bon nom cible
            $matched = $false
            $fileName = $file.Name.ToLower()
            
            if ($fileName -like "*hellojade*main*") {
                Copy-Item $file.FullName -Destination "$targetDir\hellojade-main.jpg" -Force
                Write-Host "    → Copié vers: hellojade-main.jpg" -ForegroundColor Green
                $matched = $true
            } elseif ($fileName -like "*easyrecruit*main*") {
                Copy-Item $file.FullName -Destination "$targetDir\easyrecruit-main.jpg" -Force
                Write-Host "    → Copié vers: easyrecruit-main.jpg" -ForegroundColor Green
                $matched = $true
            } elseif ($fileName -like "*helloluna*main*") {
                Copy-Item $file.FullName -Destination "$targetDir\helloluna-main.jpg" -Force
                Write-Host "    → Copié vers: helloluna-main.jpg" -ForegroundColor Green
                $matched = $true
            } elseif ($fileName -like "*rbbc*main*") {
                Copy-Item $file.FullName -Destination "$targetDir\rbbc-main.jpg" -Force
                Write-Host "    → Copié vers: rbbc-main.jpg" -ForegroundColor Green
                $matched = $true
            } elseif ($fileName -like "*hellojade*") {
                Copy-Item $file.FullName -Destination "$targetDir\hellojade.jpg" -Force
                Write-Host "    → Copié vers: hellojade.jpg" -ForegroundColor Green
                $matched = $true
            } elseif ($fileName -like "*easyrecruit*") {
                Copy-Item $file.FullName -Destination "$targetDir\easyrecruit.jpg" -Force
                Write-Host "    → Copié vers: easyrecruit.jpg" -ForegroundColor Green
                $matched = $true
            } elseif ($fileName -like "*helloluna*") {
                Copy-Item $file.FullName -Destination "$targetDir\helloluna.jpg" -Force
                Write-Host "    → Copié vers: helloluna.jpg" -ForegroundColor Green
                $matched = $true
            } elseif ($fileName -like "*rbbc*") {
                Copy-Item $file.FullName -Destination "$targetDir\rbbc.jpg" -Force
                Write-Host "    → Copié vers: rbbc.jpg" -ForegroundColor Green
                $matched = $true
            }
            
            if (-not $matched) {
                Write-Host "    ⚠ Nom non reconnu, ignoré" -ForegroundColor Yellow
            }
        }
        
        Write-Host "`n✓ Copie terminée!" -ForegroundColor Green
        Write-Host "Les screenshots sont maintenant dans: $targetDir" -ForegroundColor Cyan
    }
} else {
    Write-Host "Dossier source non trouvé: $sourceDir" -ForegroundColor Red
    Write-Host "Veuillez vérifier le chemin ou déplacer vos screenshots dans ce dossier." -ForegroundColor Yellow
}

