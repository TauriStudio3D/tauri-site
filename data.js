/*
  ARQUIVO PARA EDITAR
  Tudo que muda no site (textos, fotos, vídeos e cores) fica aqui.
*/

window.TAURI = {

  // ---- Dados da empresa ----
  nome: "Tauri Studio 3D",
  titulo: "Peças em PLA de origem vegetal, impressas sob encomenda.",
  subtitulo: "Veja o que já produzimos, escolha a cor da sua peça e faça o pedido pelo Instagram. Enviamos para todo o Brasil.",
  instagram: "tauristudio3d",  // só o usuário, sem @
  whatsapp: "5511975456696",                // com DDI e DDD, só números. Ex: "5511999999999". Vazio esconde o botão de WhatsApp no pedido e no contato.
  avisoPreco: "Os valores são uma base para a peça como está descrita. Qualquer mudança de cor, tamanho ou personalização exige um novo orçamento.",
  textoContato: "Encomendas por DM no Instagram. Conte o que você precisa e a gente responde com prazo e valor.",

  // ---- Categorias dos produtos ----
  // id: usado em cada produto; nome: texto do botão de filtro.
  // O botão "Todos" é criado automaticamente.
  categorias: [
    { id: "decoracao",  nome: "Decoração" },
    { id: "brinquedos", nome: "Brinquedos" }
  ],

  // ---- Produtos ----
  // Cada produto tem um carrossel (midia) com quantas fotos e vídeos você quiser.
  // categoria: um dos ids acima
  // tamanhoPadrao: tamanho sugerido no pedido (o cliente pode editar)
  // midia: lista de { type: "photo" ou "video", src: "media/arquivo", poster: "capa do vídeo (opcional)", autoplay: true (opcional: começa sozinho, sem som, e repete) }
  // descricao: sempre "PLA • Comprimento: X cm" ou "PLA • Altura: X cm", mais um detalhe opcional.
  // preco: texto livre mostrado no cartão (opcional), ex.: "R$ 12,00"
  // A primeira mídia da lista aparece primeiro no carrossel.
  produtos: [
    {
      nome: "Anquilossauro Articulado",
      tamanhoPadrao: "14 cm",
      categoria: "brinquedos",
      descricao: "PLA • Comprimento: 14 cm • articulado",
      preco: "R$ 12,00",
      midia: [
        { type: "photo", src: "media/anquilossauro-1.webp" }
      ]
    },
    {
      nome: "Peixe-Espada Articulado",
      tamanhoPadrao: "19 cm",
      categoria: "brinquedos",
      descricao: "PLA • Comprimento: 19 cm • articulado",
      preco: "R$ 13,00",
      midia: [
        { type: "photo", src: "media/peixe-espada-1.webp" }
      ]
    },
    {
      nome: "Piroraptor Articulado",
      tamanhoPadrao: "14 cm",
      categoria: "brinquedos",
      descricao: "PLA • Comprimento: 14 cm • articulado",
      preco: "R$ 17,00",
      midia: [
        { type: "photo", src: "media/piroraptor-1.webp" }
      ]
    },
    {
      nome: "Dente de Sabre Articulado",
      tamanhoPadrao: "17 cm",
      categoria: "brinquedos",
      descricao: "PLA • Comprimento: 17 cm • articulado",
      preco: "R$ 21,00",
      midia: [
        { type: "photo", src: "media/dente-de-sabre-1.webp" }
      ]
    },
    {
      nome: "Peixe-Pescador Articulado",
      tamanhoPadrao: "17 cm",
      categoria: "brinquedos",
      descricao: "PLA • Comprimento: 17 cm • articulado",
      preco: "R$ 23,00",
      midia: [
        { type: "photo", src: "media/peixe-pescador-1.webp" }
      ]
    },
    {
      nome: "Mosassauro Articulado",
      tamanhoPadrao: "20 cm",
      categoria: "brinquedos",
      descricao: "PLA • Comprimento: 20 cm • articulado",
      preco: "R$ 12,00",
      midia: [
        { type: "photo", src: "media/mosassauro-1.webp" },
        { type: "video", src: "media/mosassauro-video.mp4", poster: "media/mosassauro-video.jpg", autoplay: true }
      ]
    },
    {
      nome: "Espinossauro Articulado",
      tamanhoPadrao: "20 cm",
      categoria: "brinquedos",
      descricao: "PLA • Comprimento: 20 cm • articulado",
      preco: "R$ 16,00",
      midia: [
        { type: "photo", src: "media/espinossauro-1.webp" }
      ]
    },
    {
      nome: "Mamute",
      tamanhoPadrao: "20 cm",
      categoria: "brinquedos",
      descricao: "PLA • Comprimento: 20 cm",
      preco: "R$ 50,00",
      midia: [
        { type: "photo", src: "media/mamute-1.webp" }
      ]
    },
    {
      nome: "Tomate",
      tamanhoPadrao: "6 cm",
      categoria: "decoracao",
      descricao: "PLA • Altura: 6 cm",
      preco: "R$ 17,00",
      midia: [
        { type: "photo", src: "media/tomate-1.webp" }
      ]
    },
    {
      nome: "Pacote de Macarrão",
      tamanhoPadrao: "13 cm",
      categoria: "brinquedos",
      descricao: "PLA • Altura: 13 cm • contém 12 macarrões",
      preco: "R$ 73,00",
      midia: [
        { type: "photo", src: "media/pacote-macarrao-1.webp" }
      ]
    },
    {
      nome: "Tigela e Pegador",
      tamanhoPadrao: "12 cm",
      categoria: "brinquedos",
      descricao: "PLA • Comprimento: 12 cm",
      preco: "R$ 18,00",
      midia: [
        { type: "photo", src: "media/tigela-pegador-1.webp" }
      ]
    },
    {
      nome: "Bola Articulada Antiestresse",
      tamanhoPadrao: "6 cm",
      categoria: "brinquedos",
      descricao: "PLA • Altura: 6 cm • articulada",
      preco: "R$ 24,00",
      midia: [
        { type: "photo", src: "media/bola-antiestresse-1.webp" }
      ]
    },
    {
      nome: "Árvore de Natal Felpuda",
      tamanhoPadrao: "20 cm",
      categoria: "decoracao",
      descricao: "PLA • Altura: 20 cm",
      preco: "R$ 50,00",
      midia: [
        { type: "photo", src: "media/arvore-felpuda-1.webp" }
      ]
    },
    {
      nome: "Árvore de Natal Sólida",
      tamanhoPadrao: "15 cm",
      categoria: "decoracao",
      descricao: "PLA • Altura: 15 cm",
      preco: "R$ 17,00",
      midia: [
        { type: "photo", src: "media/arvore-solida-1.webp" }
      ]
    }
  ],

  // ---- Catálogo de cores ----
  // nome: como o cliente vai chamar a cor
  // hex: cor aproximada na tela. Para filamento multicolor, use uma lista: ["#ff5fa2", "#ffd23f", ...]
  // material: PLA, PETG, ABS, TPU...
  // acabamento: (opcional) use sempre os mesmos nomes: "Fosco", "Padrão" ou "Silk" (brilho metálico)
  // codigo: (opcional) código interno ou do fabricante
  // fotos: (opcional) carrossel de peças feitas nessa cor, mesmo formato de "midia" nos produtos.
  //        Ao passar o mouse, as imagens aparecem em prévia; ao clicar, abre o carrossel.
  // Os tons em "hex" são aproximados. Ajuste com o conta-gotas em uma foto da peça impressa.
  cores: [
    { nome: "Amarelo", hex: "#f2c200", material: "PLA", acabamento: "Padrão",
      fotos: [
        { type: "photo", src: "media/pacote-macarrao-1.webp" }
      ] },
    { nome: "Bege Caucasiano", hex: "#efc7a3", material: "PLA", acabamento: "Padrão" },
    { nome: "Branco", hex: "#f4f4f2", material: "PLA", acabamento: "Fosco",
      fotos: [
        { type: "photo", src: "media/tigela-pegador-1.webp" }
      ] },
    { nome: "Cinza", hex: "#8c8f94", material: "PLA", acabamento: "Fosco",
      fotos: [
        { type: "photo", src: "media/tigela-pegador-1.webp" }
      ] },
    { nome: "Dourado", hex: "#c9a227", material: "PLA", acabamento: "Silk",
      fotos: [
        { type: "photo", src: "media/anquilossauro-1.webp" },
        { type: "photo", src: "media/peixe-espada-1.webp" },
        { type: "photo", src: "media/dente-de-sabre-1.webp" },
        { type: "photo", src: "media/peixe-pescador-1.webp" }
      ] },
    { nome: "Marrom Cappuccino", hex: "#8b6a4f", material: "PLA", acabamento: "Padrão" },
    { nome: "Marrom Escuro", hex: "#4a3226", material: "PLA", acabamento: "Padrão",
      fotos: [
        { type: "photo", src: "media/mamute-1.webp" }
      ] },
    { nome: "Prata", hex: "#b9bdc3", material: "PLA", acabamento: "Silk",
      fotos: [
        { type: "photo", src: "media/piroraptor-1.webp" },
        { type: "photo", src: "media/bola-antiestresse-1.webp" }
      ] },
    { nome: "Preto", hex: "#1c1c1c", material: "PLA", acabamento: "Fosco" },
    { nome: "Preto Velvet", hex: "#232323", material: "PLA", acabamento: "Fosco" },
    { nome: "Verde", hex: "#2f9e44", material: "PLA", acabamento: "Padrão",
      fotos: [
        { type: "photo", src: "media/mosassauro-1.webp" },
        { type: "photo", src: "media/espinossauro-1.webp" },
        { type: "photo", src: "media/pacote-macarrao-1.webp" },
        { type: "photo", src: "media/arvore-felpuda-1.webp" },
        { type: "photo", src: "media/arvore-solida-1.webp" }
      ] },
    { nome: "Vermelho Velvet", hex: "#c0262d", material: "PLA", acabamento: "Fosco",
      fotos: [
        { type: "photo", src: "media/tomate-1.webp" }
      ] },
    { nome: "Rainbow Candy Colors", hex: ["#ff5fa2", "#ffd23f", "#3ddc97", "#4cc9f0", "#b388ff"], material: "PLA" }
  ]
};
