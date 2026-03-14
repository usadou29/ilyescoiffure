#!/bin/bash
# Script pour pousser Ilyes Coiffure sur GitHub
# Usage: ./push-to-github.sh <VOTRE_TOKEN_GITHUB>

if [ -z "$1" ]; then
    echo "Usage: ./push-to-github.sh <VOTRE_TOKEN_GITHUB>"
    echo ""
    echo "Pour créer un token GitHub:"
    echo "1. Allez sur https://github.com/settings/tokens"
    echo "2. Cliquez 'Generate new token (classic)'"
    echo "3. Cochez 'repo' pour les permissions"
    echo "4. Générez et copiez le token"
    exit 1
fi

TOKEN=$1
REPO_URL="https://${TOKEN}@github.com/usadou29/ilyescoiffure.git"

cd /data/.openclaw/workspace-main/ilyescoiffure

echo "Configuration du remote..."
git remote remove origin 2>/dev/null
git remote add origin "$REPO_URL"

echo "Push sur GitHub..."
git push -u origin main

echo ""
echo "✅ Push terminé!"
echo "Vérifiez sur: https://github.com/usadou29/ilyescoiffure"
