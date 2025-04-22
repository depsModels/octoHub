# Deploy na Vercel

## Estrutura do Projeto para Deploy

Este projeto utiliza uma estrutura de arquivos específica que é reorganizada durante o processo de build para funcionar corretamente na Vercel.

### Processo de Build

O processo de build executa as seguintes tarefas:

1. Limpa a pasta `public` (se existir)
2. Compila o CSS do Tailwind para a pasta `public/styles/output.css`
3. Copia os arquivos HTML, assets, scripts e estilos para a pasta `public`
4. Ajusta os caminhos nos arquivos HTML para funcionarem corretamente após o deploy

### Configuração na Vercel

Para que o deploy funcione corretamente na Vercel, certifique-se de:

1. **Configurar o diretório de saída**:
   - Na Vercel, o diretório de saída já está configurado como `public` através do arquivo `vercel.json`
   - Não altere esta configuração, pois é necessária para o correto funcionamento do site

2. **Framework Preset**:
   - Selecione "Other" como preset
   - Não selecione frameworks específicos como Next.js, React, etc.

3. **Build Command**:
   - O comando de build já está configurado no `package.json` como `npm run build`
   - A Vercel executará este comando automaticamente durante o deploy

4. **Deploy Hook**:
   - Você pode configurar um deploy hook na Vercel para facilitar o deploy automático via integração contínua

## Solução de Problemas

- **Erro 404 em arquivos estáticos**: Verifique se os caminhos nos arquivos HTML estão corretos. O script `fix-paths.js` deve ajustar automaticamente os caminhos durante o build.

- **Erro de build**: Verifique os logs de build na Vercel para identificar problemas específicos. Os erros mais comuns estão relacionados a pacotes não instalados ou problemas de permissão.

- **Problema nos estilos**: Certifique-se de que o arquivo `output.css` está sendo gerado corretamente na pasta `public/styles`.

## Testes Locais

Para testar localmente o build antes de fazer deploy:

```bash
# Instale as dependências
npm install

# Execute o build
npm run build

# Teste o site usando um servidor local
npx serve public
```

Isso irá gerar a mesma estrutura de pastas que será usada na Vercel e permitirá testar o site localmente. 