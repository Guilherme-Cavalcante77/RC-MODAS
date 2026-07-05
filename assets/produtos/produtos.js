/*
  LISTA DE PRODUTOS
  ------------------
  Para adicionar uma roupa nova, copie um bloco { ... } inteiro,
  cole logo abaixo dele, e mude os valores.

  - tag: texto pequeno acima do nome (ex: "Lançamento", "Últimas peças")
  - nome: nome da peça
  - descricao: frase curta descrevendo a peça
  - preco: só o número, com ponto (ex: 79.90)
  - fotos: lista de fotos da peça (pode ser 1 ou várias — vira um carrossel)
           coloque os arquivos dentro da pasta assets/produtos/
  - whatsapp: número da loja no formato 55DDDNÚMERO (sem espaço, sem +)
  - mensagem: o texto que já vai vir pronto no WhatsApp quando alguém clicar em comprar
*/

const PRODUTOS = [
  {
    tag: "Lançamento",
    nome: "Polo Piquet Amarela",
    descricao: "Polo em piquet amarelo com colarinho listrado e bordado exclusivo de palmeira. Leve e confortável, com aquele toque sofisticado no dia a dia.",
    preco: 50.00,
    fotos: [
      "assets/produtos/polo-amarela-1.jpg"
    ],
    whatsapp: "5585999999999",
    mensagem: "Olá! Vi a Polo Piquet Amarela no site da RC Modas e queria saber mais 😊"
  }

  // 👇 cole o próximo produto aqui, exemplo:
  // {
  //   tag: "Novidade",
  //   nome: "Nome da peça",
  //   descricao: "Descrição curta da peça.",
  //   preco: 89.90,
  //   fotos: [
  //     "assets/produtos/nome-da-peca-1.jpg",
  //     "assets/produtos/nome-da-peca-2.jpg"
  //   ],
  //   whatsapp: "5585999999999",
  //   mensagem: "Olá! Vi essa peça no site da RC Modas e queria saber mais 😊"
  // }
];
