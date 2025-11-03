@echo off
echo ========================================
echo Copie des screenshots Maolys
echo ========================================
echo.

set SOURCE=C:\Users\olive\Pictures\Screenshot maolys
set DEST=public\projects

if not exist "%SOURCE%" (
    echo [ERREUR] Dossier source non trouve: %SOURCE%
    echo.
    echo Veuillez placer vos screenshots dans ce dossier.
    pause
    exit /b 1
)

if not exist "%DEST%" mkdir "%DEST%"

echo Recherche des fichiers dans: %SOURCE%
echo.

:: Copie des fichiers principaux
for %%f in ("%SOURCE%\*hellojade*") do (
    if exist "%%f" (
        copy /Y "%%f" "%DEST%\hellojade.jpg" >nul 2>&1
        echo [OK] hellojade.jpg copie
    )
)

for %%f in ("%SOURCE%\*easyrecruit*") do (
    if exist "%%f" (
        copy /Y "%%f" "%DEST%\easyrecruit.jpg" >nul 2>&1
        echo [OK] easyrecruit.jpg copie
    )
)

for %%f in ("%SOURCE%\*helloluna*") do (
    if exist "%%f" (
        copy /Y "%%f" "%DEST%\helloluna.jpg" >nul 2>&1
        echo [OK] helloluna.jpg copie
    )
)

for %%f in ("%SOURCE%\*rbbc*") do (
    if exist "%%f" (
        copy /Y "%%f" "%DEST%\rbbc.jpg" >nul 2>&1
        echo [OK] rbbc.jpg copie
    )
)

:: Copie des versions main si elles existent
for %%f in ("%SOURCE%\*hellojade*main*") do (
    if exist "%%f" (
        copy /Y "%%f" "%DEST%\hellojade-main.jpg" >nul 2>&1
        echo [OK] hellojade-main.jpg copie
    )
)

for %%f in ("%SOURCE%\*easyrecruit*main*") do (
    if exist "%%f" (
        copy /Y "%%f" "%DEST%\easyrecruit-main.jpg" >nul 2>&1
        echo [OK] easyrecruit-main.jpg copie
    )
)

for %%f in ("%SOURCE%\*helloluna*main*") do (
    if exist "%%f" (
        copy /Y "%%f" "%DEST%\helloluna-main.jpg" >nul 2>&1
        echo [OK] helloluna-main.jpg copie
    )
)

for %%f in ("%SOURCE%\*rbbc*main*") do (
    if exist "%%f" (
        copy /Y "%%f" "%DEST%\rbbc-main.jpg" >nul 2>&1
        echo [OK] rbbc-main.jpg copie
    )
)

echo.
echo ========================================
echo Copie terminee!
echo ========================================
echo.
echo Les screenshots sont maintenant dans: %DEST%
echo.
pause

