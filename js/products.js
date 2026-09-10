/*
  LISTA DE PRODUTOS
  ==================
  Para adicionar um item novo, copie um bloco { ... } inteiro,
  cole antes do "];" no final, e mude os valores.

  - name: nome do produto
  - price: preço em número (use ponto, não vírgula. Ex: 45.90)
  - category: "xuxinha", "roupa", "acessorio" ou "decoracao"
  - image: nome do arquivo de foto dentro da pasta /images
           (tire a foto, salve na pasta images, e escreva o nome aqui)
  - description: uma frase curta sobre a peça
  - featured: true para aparecer na seção de destaque no topo (use em poucos itens)
*/

const PRODUCTS = [
  {
    name: "Xuxinhas de Cabelo (Fio de Afeto)",
    price: 12.50,
    category: "xuxinha",
    image: "xuxinhas.jpeg",
    description: "Acessórios tradicionais de cabelo confeccionados artesanalmente em crochê, disponíveis em diversas cores para dar um toque charmoso e delicado ao visual.",
    featured: true
  },
  {
    name: "Colete de Crochê (Fio de Afeto)",
    price: 150.00,
    category: "acessorio",
    image: "colete.jpeg",
    description: "Peça artesanal na cor verde-militar, confeccionada com Fio Anne 100% Algodão (Círculo), leve, elegante e com fechamento frontal por laço",
    featured: true
  },
  {
    name: "Capa de Caneca em Crochê",
    price: 30.00,
    category: "decoracao",
    image: "caneca.jpeg",
    description: "Protetor artesanal feito à mão na cor caramelo com fechamento por botão de madeira, ideal para manter a bebida aquecida e trazer aconchego ao seu momento do café ou chá.",
    featured: false
  },
  {
    name: "Sandália Coleção Mariana (Fio de Afeto)",
    price: 90.00,
    category: "roupa",
    image: "sandalia.jpeg",
    description: " Chinelo 100% artesanal customizado com tiras revestidas em crochê e aplicação de pompom felpudo, unindo conforto, estilo e exclusividade.",
    featured: true
  },
  {
    name: "Saída de Praia em Crochê",
    price: 100.00,
    category: "roupa",
    image: "saia.jpeg",
    description: "Saia curta feita à mão com trama vazada, cordão de ajuste na cintura e disponível em várias cores, perfeita para compor looks de praia leves e estilosos.",
    featured: false
  },
  {
    name: "Descanso de Copo e Taça",
    price: 10.00,
    category: "decoracao",
    image: "copo.jpeg",
    description: "Conjunto artesanal em crochê em versão menor e delicada, ideal para proteger e decorar superfícies como mesas de cabeceira com muito charme.",
    featured: false
  },
  {
    name: "Bandana com Pedrarias",
    price: 80.00,
    category: "acessorio",
    image: "bandana.jpeg",
    description: "Acessório artesanal versátil e delicado em crochê verde-militar, detalhado com pedrarias e que pode ser usado tanto como lenço de cabeça quanto como colar.",
    featured: false
  },
  {
    name: "Xuxinhas de Flor em Crochê",
    price: 15.00,
    category: "xuxinha",
    image: "xuxinha02.jpeg",
    description: "Acessórios de cabelo artesanais em formato de flor com miolo metálico, uma peça delicada e cheia de charme.",
    featured: false
  },
  {
    name: "Brinco Artesanal em Crochê",
    price: 25.00,
    category: "acessorio",
    image: "brinco.jpeg",
    description: "Coleção Amor em Cada Ponto, confeccionado à mão em tom vermelho vibrante e design volumoso e trabalhado. Uma peça leve, confortável e cheia de estilo, perfeita para destacar qualquer visual ou presentear quem você ama.",
    featured: false
  },
  {
    name: "Presilha em Laço em Crochê",
    price: 30.00,
    category: "acessorio",
    image: "Laços.jpeg",
    description: "Feita à mão com 100% de carinho, perfeita para dar um toque especial e charmoso ao visual. Disponível no modelo caramelo e no modelo rosa com bordas e centro roxos, peça exclusiva, leve e versátil para todos os estilos.",
    featured: false
  },
  {
    name: "Tiara Artesanal em Crochê",
    price: 40.00,
    category: "acessorio",
    image: "Tiara.jpeg",
    description: "Coleção Mariana, com base em tom de fúcsia vibrante e uma charmosa flor de crochê em rosa claro, adornada com uma delicada pérola no centro. Perfeita para dar um toque especial e romântico ao visual.",
    featured: false
  }
];