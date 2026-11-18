/*
  ARQUIVO PARA EDITAR
  Tudo que muda no site (textos, fotos, vídeos e cores) fica aqui.
  Os valores abaixo são exemplos. Troque pelos dados reais da Tauri.
*/

window.TAURI = {

  // ---- Dados da empresa ----
  nome: "Tauri",
  titulo: "Peças impressas em 3D, feitas com cuidado.",
  subtitulo: "Veja o que já produzimos e escolha a cor da sua peça no catálogo.",
  instagram: "tauri3d",        // só o usuário, sem @ (EXEMPLO: troque pelo real)
  whatsapp: "",                // com DDI e DDD, só números. Ex: "5511999999999". Deixe vazio para esconder o botão.
  textoContato: "Pedidos e orçamentos pelo Instagram. Chame no direct e conte o que você precisa.",

  // ---- Fotos e vídeos ----
  // type: "photo" ou "video"
  // src: caminho do arquivo dentro da pasta media/
  // poster: (só vídeo, opcional) imagem de capa
  // title e note: textos exibidos abaixo do item
  midia: [
    { type: "photo", src: "media/exemplo-1.jpg", title: "Nome do produto 1", note: "PLA • 12 cm" },
    { type: "photo", src: "media/exemplo-2.jpg", title: "Nome do produto 2", note: "PETG • 8 cm" },
    { type: "video", src: "media/exemplo-video.mp4", poster: "media/exemplo-video.jpg", title: "Impressão em andamento", note: "Vídeo de 20 segundos" }
  ],

  // ---- Catálogo de cores ----
  // nome: como o cliente vai chamar a cor
  // hex: cor aproximada na tela (use o conta-gotas em uma foto do filamento)
  // material: PLA, PETG, ABS, TPU...
  // acabamento: (opcional) "Silk", "Fosco", "Translúcido", "Brilho"...
  // codigo: (opcional) código interno ou do fabricante
  cores: [
    { nome: "Preto",          hex: "#1b1b1b", material: "PLA",  acabamento: "Fosco" },
    { nome: "Branco",         hex: "#f2f2f2", material: "PLA",  acabamento: "Fosco" },
    { nome: "Cinza grafite",  hex: "#4a4d52", material: "PLA",  acabamento: "Fosco" },
    { nome: "Vermelho",       hex: "#d62828", material: "PLA",  acabamento: "Fosco" },
    { nome: "Laranja",        hex: "#ff6a1a", material: "PLA",  acabamento: "Fosco" },
    { nome: "Amarelo",        hex: "#f7c800", material: "PLA",  acabamento: "Fosco" },
    { nome: "Verde",          hex: "#2f9e44", material: "PLA",  acabamento: "Fosco" },
    { nome: "Azul",           hex: "#1c64d8", material: "PLA",  acabamento: "Fosco" },
    { nome: "Dourado",        hex: "#c9a227", material: "PLA",  acabamento: "Silk" },
    { nome: "Prata",          hex: "#b8bcc2", material: "PLA",  acabamento: "Silk" },
    { nome: "Azul petróleo",  hex: "#0f5c6e", material: "PETG", acabamento: "Brilho" },
    { nome: "Transparente",   hex: "#dfe9ee", material: "PETG", acabamento: "Translúcido" },
    { nome: "Preto",          hex: "#161616", material: "PETG", acabamento: "Brilho" },
    { nome: "Preto",          hex: "#202020", material: "ABS",  acabamento: "Fosco" },
    { nome: "Cinza",          hex: "#8a8d91", material: "TPU",  acabamento: "Flexível" }
  ]
};
