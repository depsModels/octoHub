#!/bin/bash

# Este é um script de exemplo para ser executado durante o deploy na Vercel
# Não é necessário executá-lo localmente, serve apenas como documentação

# Instalar dependências
npm install

# Executar o build
npm run build

# O resultado estará na pasta "public" que será usado pela Vercel para servir o site estático 