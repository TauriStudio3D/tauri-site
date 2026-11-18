/*
  ARQUIVO PARA EDITAR
  Tudo que muda no site (textos, fotos, vídeos e cores) fica aqui.
  Os valores abaixo são exemplos. Troque pelos dados reais da Tauri.
*/

window.TAURI = {

  // ---- Dados da empresa ----
  nome: "Tauri Studio 3D",
  titulo: "Peças em PLA de origem vegetal, impressas sob encomenda.",
  subtitulo: "Veja o que já produzimos, escolha a cor da sua peça e faça o pedido pelo Instagram. Enviamos para todo o Brasil.",
  instagram: "tauristudio3d",  // só o usuário, sem @
  whatsapp: "",                // com DDI e DDD, só números. Ex: "5511999999999". Deixe vazio para esconder o botão.
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
  // midia: lista de { type: "photo" ou "video", src: "media/arquivo", poster: "capa do vídeo (opcional)" }
  // A primeira mídia da lista aparece primeiro no carrossel.
  produtos: [
    {
      nome: "Árvore de Natal",
      categoria: "decoracao",
      descricao: "PLA • 20 cm • várias cores",
      midia: [
        { type: "photo", src: "media/arvore-1.jpg" },
        { type: "photo", src: "media/arvore-2.jpg" },
        { type: "video", src: "media/arvore-video.mp4", poster: "media/arvore-video.jpg" }
      ]
    },
    {
      nome: "Vaso geométrico",
      categoria: "decoracao",
      descricao: "PLA • 12 cm",
      midia: [
        { type: "photo", src: "media/vaso-1.jpg" },
        { type: "photo", src: "media/vaso-2.jpg" }
      ]
    },
    {
      nome: "Dinossauro articulado",
      categoria: "brinquedos",
      descricao: "PLA • 18 cm • articulado",
      midia: [
        { type: "photo", src: "media/dino-1.jpg" },
        { type: "video", src: "media/dino-video.mp4", poster: "media/dino-video.jpg" }
      ]
    },
    {
      nome: "Crocodilo flexível",
      categoria: "brinquedos",
      descricao: "PLA • 25 cm",
      midia: [
        { type: "photo", src: "media/croco-1.jpg" }
      ]
    }
  ],

  // ---- Catálogo de cores ----
  // nome: como o cliente vai chamar a cor
  // hex: cor aproximada na tela (use o conta-gotas em uma foto do filamento)
  // material: PLA, PETG, ABS, TPU...
  // acabamento: (opcional) "Silk", "Fosco", "Translúcido", "Brilho"...
  // codigo: (opcional) código interno ou do fabricante
  // fotos: (opcional) carrossel de peças feitas nessa cor, mesmo formato de "midia" nos produtos.
  //        Ao passar o mouse, as imagens aparecem em prévia; ao clicar, abre o carrossel.
  cores: [
    { nome: "Preto",          hex: "#1b1b1b", material: "PLA",  acabamento: "Fosco",
      fotos: [
        { type: "photo", src: "media/cor-preto-1.jpg" },
        { type: "photo", src: "media/cor-preto-2.jpg" }
      ] },
    { nome: "Branco",         hex: "#f2f2f2", material: "PLA",  acabamento: "Fosco" },
    { nome: "Cinza grafite",  hex: "#4a4d52", material: "PLA",  acabamento: "Fosco" },
    { nome: "Vermelho",       hex: "#d62828", material: "PLA",  acabamento: "Fosco" },
    { nome: "Laranja",        hex: "#ff6a1a", material: "PLA",  acabamento: "Fosco",
      fotos: [
        { type: "photo", src: "media/cor-laranja-1.jpg" },
        { type: "photo", src: "media/cor-laranja-2.jpg" },
        { type: "photo", src: "media/cor-laranja-3.jpg" }
      ] },
    { nome: "Amarelo",        hex: "#f7c800", material: "PLA",  acabamento: "Fosco" },
    { nome: "Verde",          hex: "#2f9e44", material: "PLA",  acabamento: "Fosco" },
    { nome: "Azul",           hex: "#1c64d8", material: "PLA",  acabamento: "Fosco" },
    { nome: "Dourado",        hex: "#c9a227", material: "PLA",  acabamento: "Silk",
      fotos: [
        { type: "photo", src: "media/cor-dourado-1.jpg" },
        { type: "video", src: "media/cor-dourado-video.mp4", poster: "media/cor-dourado-video.jpg" }
      ] },
    { nome: "Prata",          hex: "#b8bcc2", material: "PLA",  acabamento: "Silk" },
    { nome: "Azul petróleo",  hex: "#0f5c6e", material: "PETG", acabamento: "Brilho" },
    { nome: "Transparente",   hex: "#dfe9ee", material: "PETG", acabamento: "Translúcido" },
    { nome: "Preto",          hex: "#161616", material: "PETG", acabamento: "Brilho" },
    { nome: "Preto",          hex: "#202020", material: "ABS",  acabamento: "Fosco" },
    { nome: "Cinza",          hex: "#8a8d91", material: "TPU",  acabamento: "Flexível" }
  ]
};
