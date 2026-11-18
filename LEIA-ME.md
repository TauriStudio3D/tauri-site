# Site da Tauri

Site estático: não precisa instalar nada nem ter servidor.

## Estrutura

```
index.html   estrutura da página (não precisa mexer)
style.css    visual
app.js       lógica da galeria e do catálogo
data.js      TEXTOS, FOTOS, VÍDEOS E CORES (é aqui que você edita)
media/       logo.webp, favicon.png e as fotos e vídeos dos produtos
```

## Como atualizar

1. Copie as fotos e vídeos para a pasta `media/`.
2. Abra `data.js`. Em `produtos`, cada produto tem uma lista `midia`, que vira o carrossel dele. Misture fotos e vídeos como quiser.
3. Para um produto novo, copie um bloco existente, troque nome, categoria, descrição e arquivos.
4. Para uma categoria nova, adicione uma linha em `categorias` e use o mesmo `id` no produto.
5. Para cores, adicione linhas em `cores`. Se uma cor tiver `fotos`, passar o mouse mostra uma prévia e clicar abre o carrossel de peças nessa cor. Sem `fotos`, o clique mostra só o nome e o código.
6. Suba as mudanças.

Antes de publicar, apague os produtos de exemplo e troque as cores de exemplo pelas reais.

## Pedido (orçamento)

O cliente monta a lista (produto, cor, quantidade e tamanho) e envia para você. Não há preços no site.

- O tamanho sugerido de cada produto vem de `tamanhoPadrao` no `data.js`. O cliente pode editar.
- WhatsApp: preencha `whatsapp` no `data.js` (DDI + DDD + número, só dígitos, por exemplo "5511999999999"). Com o campo vazio, o botão de WhatsApp fica escondido.
- Instagram: o direct não aceita texto pronto no link. O botão copia a lista e abre a conversa, e o cliente cola a mensagem.

## Preparar fotos e vídeos

- Fotos: JPG ou WebP, até 1600 px no lado maior. Fica leve e carrega rápido.
- Vídeos: MP4 (H.264), até 25 MB por arquivo, que é o limite do Cloudflare Pages. Para comprimir:

```
ffmpeg -i original.mp4 -vf "scale=-2:720" -c:v libx264 -crf 28 -preset slow -an -movflags +faststart media/nome.mp4
```

Gere uma capa do vídeo (opcional):

```
ffmpeg -i media/nome.mp4 -frames:v 1 media/nome.jpg
```

Se os vídeos ficarem pesados, a saída é hospedá-los no YouTube (não listado) e trocar o `<video>` por um link. Posso adaptar o site para isso.

## Publicar no GitHub Pages

1. Crie um repositório público no GitHub (por exemplo, `tauri-site`).
2. Envie todos os arquivos desta pasta para a raiz do repositório.
3. Em Settings > Pages, escolha "Deploy from a branch", branch `main`, pasta `/ (root)`.
4. Em alguns minutos o site abre em `https://SEU-USUARIO.github.io/tauri-site/`.

## Publicar no Cloudflare Pages

1. Crie uma conta gratuita em cloudflare.com.
2. Em Workers & Pages, escolha Create > Pages.
3. Opção mais rápida: "Upload assets" e arraste a pasta inteira.
4. Opção com atualização automática: "Connect to Git" apontando para o repositório do GitHub. Cada commit republica o site.
5. O endereço sai como `tauri.pages.dev` (você escolhe o nome, se estiver livre).

Para um site só de divulgação, os dois servem. O Cloudflare costuma entregar mais rápido e tem limite de arquivo menor (25 MB); o GitHub Pages é mais simples se você já usa GitHub.
