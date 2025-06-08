const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const produtos = [
  // Produtos do magnus
   {
    nome: "Magnus Premium Cães Adultos Sabor Carne",
    descricao: "Ração seca para cães adultos sabor carne",
    preco: 120.50,
    imagem: "assets/img/magnus-premium.png",
    alt: "Magnus Premium Cães Adultos"
  },
  {
    nome: "Magnus Original Cães Filhotes Sabor Frango",
    descricao: "Ração seca para cães filhotes sabor frango",
    preco: 98.90,
    imagem: "assets/img/magnus-original.png",
    alt: "Magnus Original Cães Filhotes"
  },
  {
    nome: "Origens Premium Especial Light Cães Adultos Portes Mini e Pequeno Sabor Frango e Cereais",
    descricao: "Suplemento Pet",
    preco: 37.20,
    imagem: "assets/img/tartaruga.jpg",
    alt: "Suplemento Pet"
  },
  {
    nome: "Origens Premium Especial Energy Cães Adultos Sabor Frango e Cereais",
    descricao: "Suplemento Pet",
    preco: 227.20,
    imagem: "assets/img/tar2.jpg",
    alt: "Suplemento Pet"
  },
  {
    nome: "Origens Premium Especial Light Cães Adultos Portes Médio e Grande Sabor Frango e Cereais",
    descricao: "Suplemento Pet",
    preco: 242.20,
    imagem: "assets/img/tar3.jpg",
    alt: "Suplemento Pet"
  },
  {
    nome: "Origens Premium Especial Raças Específicas Cães Adultos Pit Bull e Rottweiler",
    descricao: "Ração Premium",
    preco: 257.20,
    imagem: "assets/img/tar4.jpg",
    alt: "Brinquedo para Cães"
  },
  {
    nome: "Origens Premium Especial Cães Adultos Sabor Carne e Cereais",
    descricao: "Suplemento Pet",
    preco: 37.20,
    imagem: "assets/img/tar5.jpg",
    alt: "Suplemento Pet"
  },

  // Proodutos do Premier (dog.html)
  {
    nome: "Ração Premier Pet Formula Frango Cães Adultos Raças Médias 15kg",
    descricao: "Ração Premium",
    preco: 220.40,
    imagem: "assets/img/premier1.jpg",
    alt: "Ração Premium"
  },
  {
    nome: "Ração Premier Fórmula Light para Cães Adultos Raças Grandes Sabor Frango 15kg",
    descricao: "Brinquedo para Cães",
    preco: 257.20,
    imagem: "assets/img/premier2.webp",
    alt: "Brinquedo para Cães"
  },
  {
    nome: "Ração Premier Shih Tzu Raças Específicas Cães Adultos 1,0kg",
    descricao: "Suplemento Pet",
    preco: 37.20,
    imagem: "assets/img/premier3.jpg",
    alt: "Suplemento Pet"
  },
  {
    nome: "Ração Premier Seleção Natural Raças Pequenas Adultos Frango 10,1kg",
    descricao: "Suplemento Pet",
    preco: 227.20,
    imagem: "assets/img/premier4.webp",
    alt: "Suplemento Pet"
  },
  {
    nome: "Ração Premier Seleção Natural Raças Pequenas Adultos Frango 10,1kg",
    descricao: "Suplemento Pet",
    preco: 242.20,
    imagem: "assets/img/premier6.webp",
    alt: "Suplemento Pet"
  },
  {
    nome: "Ração Premier Para Cães Filhotes de Sabor Frango e Salmão 2,5kg",
    descricao: "Ração Premium",
    preco: 84.90,
    imagem: "assets/img/premier7.webp",
    alt: "Ração Premium"
  },
  {
    nome: "Ração Premier Raças Específicas Yorkshire Filhotes 2,5kg",
    descricao: "Brinquedos para Cães",
    preco: 84.59,
    imagem: "assets/img/filhote.jpg",
    alt: "Brinquedo para Cães"
  },
  {
    nome: "Ração Premier Formula Cães Filhotes Raças Pequenas 20 kg",
    descricao: "Suplemento Pet",
    preco: 322.49,
    imagem: "assets/img/filhote2.webp",
    alt: "Suplemento Pet"
  },
  {
    nome: "Ração Premier Raças Específicas Cães Filhotes Shih Tzu – 1kg",
    descricao: "Suplemento Pet",
    preco: 39.49,
    imagem: "assets/img/filhote3.webp",
    alt: "Suplemento Pet"
  },
  {
    nome: "Ração Premier Filhote Raças Grandes",
    descricao: "Suplemento Pet",
    preco: 243.89,
    imagem: "assets/img/filhote4.jpg",
    alt: "Suplemento Pet"
  },
  {
    nome: "Origens Premium Especial Light Cães Adultos Portes Médio e Grande Sabor Frango e Cereais",
    descricao: "Suplemento Pet",
    preco: 242.20,
    imagem: "assets/img/origens10.png",
    alt: "Suplemento Pet"
  },
  {
    nome: "Origens Premium Especial Raças Específicas Cães Adultos Pit Bull e Rottweiler",
    descricao: "Ração Premium",
    preco: 257.20,
    imagem: "assets/img/origens7.png",
    alt: "Ração Premium"
  },
  {
    nome: "Origens Premium Especial Cães Adultos Sabor Carne e Cereais",
    descricao: "Suplemento Pet",
    preco: 37.20,
    imagem: "assets/img/origens3.webp",
    alt: "Suplemento Pet"
  },

  // Produtos do Origens (origens.html)
  {
    nome: 'Origens Premium Especial Cães Adultos Portes Mini e Pequeno Sabor Carne e Cereais',
    descricao: 'Ração Premium',
    preco: 220.40,
    imagem: 'assets/img/origens.webp',
    alt: 'Ração Premium'
  },
  {
    nome: 'Origens Premium Especial Cães Adultos Sabor Frango e Cereais',
    descricao: 'Ração Premium',
    preco: 257.20,
    imagem: 'assets/img/origens2.webp',
    alt: 'Ração Premium'
  },
  {
    nome: 'Origens Premium Especial Cães Adultos Sabor Carne e Cereais',
    descricao: 'Suplemento Pet',
    preco: 37.20,
    imagem: 'assets/img/origens3.webp',
    alt: 'Suplemento Pet'
  },
  {
    nome: 'Origens Premium Especial Cães Adultos Porte Grande Carne e Cereais',
    descricao: 'Suplemento Pet',
    preco: 227.20,
    imagem: 'assets/img/origens4.webp',
    alt: 'Suplemento Pet'
  },
  {
    nome: 'Origens Premium Especial Cães Sênior Portes Médio e Grande Sabor Frango e Cereais',
    descricao: 'Suplemento Pet',
    preco: 242.20,
    imagem: 'assets/img/origens5.webp',
    alt: 'Suplemento Pet'
  },
  {
    nome: 'Origens Premium Especial Raças Específicas Cães Adultos Labrador e Golden Retriever',
    descricao: 'Ração Premium',
    preco: 220.40,
    imagem: 'assets/img/origens6.png',
    alt: 'Ração Premium'
  },
  {
    nome: 'Origens Premium Especial Raças Específicas Cães Adultos Pit Bull e Rottweiler',
    descricao: 'Ração Premium',
    preco: 257.20,
    imagem: 'assets/img/origens7.png',
    alt: 'Ração Premium'
  },
  {
    nome: 'Origens Premium Especial Light Cães Adultos Portes Mini e Pequeno Sabor Frango e Cereais',
    descricao: 'Suplemento Pet',
    preco: 37.20,
    imagem: 'assets/img/origens8.png',
    alt: 'Suplemento Pet'
  },
  {
    nome: 'Origens Premium Especial Energy Cães Adultos Sabor Frango e Cereais',
    descricao: 'Suplemento Pet',
    preco: 227.20,
    imagem: 'assets/img/origens9.png',
    alt: 'Suplemento Pet'
  },
  {
    nome: 'Origens Premium Especial Light Cães Adultos Portes Médio e Grande Sabor Frango e Cereais',
    descricao: 'Suplemento Pet',
    preco: 242.20,
    imagem: 'assets/img/origens10.png',
    alt: 'Suplemento Pet'
  },

  // Produtos Fórmula Natural (form.html)
  {
    nome: 'Fórmula Natural Super Premium Fresh Meat Cães Filhotes Porte Médio Frango, Mandioca e Cúrcuma',
    descricao: 'Suplemento Pet',
    preco: 220.40,
    imagem: 'assets/img/imagempremier1.png',
    alt: 'Suplemento Pet'
  },
  {
    nome: 'Fórmula Natural Super Premium Fresh Meat Cães Adultos Portes Grande e Gigante Frango, Mandioca e Alecrim',
    descricao: 'Suplemento Pet',
    preco: 257.20,
    imagem: 'assets/img/imagempremier2.png',
    alt: 'Suplemento Pet'
  },
  {
    nome: 'Fórmula Natural Super Premium Fresh Meat Cão Sênior Portes Mini e Pequeno Frango, Tomate e Chá Verde',
    descricao: 'Suplemento Pet',
    preco: 37.20,
    imagem: 'assets/img/imagempremier3.png',
    alt: 'Suplemento Pet'
  },
  {
    nome: 'Fórmula Natural Fresh Meat Cães Adultos Light Portes Médio e Grande',
    descricao: 'Suplemento Pet',
    preco: 227.20,
    imagem: 'assets/img/imagempremier4.png',
    alt: 'Suplemento Pet'
  },
  {
    nome: 'Fórmula Natural Super Premium Fresh Meat Sensitive Cães Adultos',
    descricao: 'Suplemento Pet',
    preco: 242.20,
    imagem: 'assets/img/imagempr5.webp',
    alt: 'Suplemento Pet'
  },
  {
    nome: 'Fórmula Natural Super Premium Fresh Meat Controle De Peso Cães Adultos Portes Médio e Grande Frango, Abóbora e Cúrcuma',
    descricao: 'Suplemento Pet',
    preco: 220.40,
    imagem: 'assets/img/pr.png',
    alt: 'Suplemento Pet'
  },
  {
    nome: 'Fórmula Natural Super Premium Life Cães Filhotes Portes Médio e Grande Sabor Frango e Maçã',
    descricao: 'Suplemento Pet',
    preco: 257.20,
    imagem: 'assets/img/imagempremier9.png',
    alt: 'Suplemento Pet'
  },
  {
    nome: 'Fórmula Natural Super Premium Fresh Meat Controle De Peso Cães Adultos Portes Mini e Pequeno Frango, Abóbora e Cúrcumas',
    descricao: 'Suplemento Pet',
    preco: 37.20,
    imagem: 'assets/img/imagempr7.webp',
    alt: 'Suplemento Pet'
  },
  {
    nome: 'Fórmula Natural Super Premium Life Cães Adultos Portes Mini e Pequeno Frango e Linhaça',
    descricao: 'Suplemento Pet',
    preco: 227.20,
    imagem: 'assets/img/imagempremier8.png',
    alt: 'Suplemento Pet'
  },
  {
    nome: 'Fórmula Natural Super Premium Life Cães Adultos Portes Médio e Grande Frango e Linhaça',
    descricao: 'Suplemento Pet',
    preco: 242.20,
    imagem: 'assets/img/imagempremier10.png',
    alt: 'Suplemento Pet'
  },

  // Produtos Gondel (cat.html)
  {
    nome: 'Ração Premier Pet Formula Frango Cães Adultos Raças Médias 15kg',
    descricao: 'Ração Premium',
    preco: 220.40,
    imagem: 'assets/img/golden.webp',
    alt: 'Ração Premium'
  },
  {
    nome: 'Ração Premier Fórmula Light para Cães Adultos Raças Grandes Sabor Frango 15kg',
    descricao: 'Brinquedo para Cães',
    preco: 257.20,
    imagem: 'assets/img/racao-golden-gatos-adultos-sabor-carne-1kg.webp',
    alt: 'Brinquedo para Cães'
  },
  {
    nome: 'Ração Premier Shih Tzu Raças Específicas Cães Adultos 1,0kg',
    descricao: 'Suplemento Pet',
    preco: 37.20,
    imagem: 'assets/img/golden2.webp',
    alt: 'Suplemento Pet'
  },
  {
    nome: 'Ração Premier Seleção Natural Raças Pequenas Adultos Frango 10,1kg',
    descricao: 'Suplemento Pet',
    preco: 227.20,
    imagem: 'assets/img/Golden3.webp',
    alt: 'Suplemento Pet'
  },
  {
    nome: 'Ração Premier Seleção Natural Raças Pequenas Adultos Frango 10,1kg',
    descricao: 'Suplemento Pet',
    preco: 242.20,
    imagem: 'assets/img/golden4.webp',
    alt: 'Suplemento Pet'
  },
  {
    nome: 'Ração Premier Para Cães Filhotes de Sabor Frango e Salmão 2,5kg',
    descricao: 'Ração Premium',
    preco: 84.90,
    imagem: 'assets/img/golden5.webp',
    alt: 'Ração Premium'
  },
  {
    nome: 'Ração Premier Raças Específicas Yorkshire Filhotes 2,5kg',
    descricao: 'Brinquedos para Cães',
    preco: 84.59,
    imagem: 'assets/img/golden6.webp',
    alt: 'Brinquedo para Cães'
  },
  {
    nome: 'Ração Premier Formula Cães Filhotes Raças Pequenas 20 kg',
    descricao: 'Suplemento Pet',
    preco: 322.49,
    imagem: 'assets/img/Golden7.png',
    alt: 'Suplemento Pet'
  },
  {
    nome: 'Ração Premier Raças Específicas Cães Filhotes Shih Tzu – 1kg',
    descricao: 'Suplemento Pet',
    preco: 39.49,
    imagem: 'assets/img/Golden8.png',
    alt: 'Suplemento Pet'
  },
  {
    nome: 'Ração Premier Filhote Raças Grandes',
    descricao: 'Suplemento Pet',
    preco: 243.89,
    imagem: 'assets/img/golden10.webp',
    alt: 'Suplemento Pet'
  },

  // Produtos Gran Plus (cat2.html)
  {
    nome: "Menu Gato Adulto Salmão & Arroz",
    descricao: "Ração Premium",
    preco: 220.40,
    imagem: "assets/img/gran1.png",
    alt: "Ração Premium"
  },
  {
    nome: "Menu Gato Castrado Carne & Arroz",
    descricao: "Brinquedo para Cães",
    preco: 257.20,
    imagem: "assets/img/gran2.png",
    alt: "Brinquedo para Cães"
  },
  {
    nome: "Menu Gato Sênior Castrado Frango & Arroz",
    descricao: "Suplemento Pet",
    preco: 37.20,
    imagem: "assets/img/gran3.png",
    alt: "Suplemento Pet"
  },
  {
    nome: "Menu Gato Filhote Frango & Arroz",
    descricao: "Suplemento Pet",
    preco: 227.20,
    imagem: "assets/img/gran4.png",
    alt: "Suplemento Pet"
  },
  {
    nome: "Choice Gato Adulto Frango & Carne",
    descricao: "Suplemento Pet",
    preco: 242.20,
    imagem: "assets/img/gran5.png",
    alt: "Suplemento Pet"
  },
  {
    nome: "Gourmet Gato Castrado Ovelha & Arroz",
    descricao: "Ração Premium",
    preco: 84.90,
    imagem: "assets/img/gran6.png",
    alt: "Ração Premium"
  },
  {
    nome: "Gourmet Gato Castrado Peru & Arroz",
    descricao: "Brinquedos para Cães",
    preco: 84.59,
    imagem: "assets/img/gran7.png",
    alt: "Brinquedo para Cães"
  },
  {
    nome: "Gourmet Gato Filhote Sabor Salmão & Frango",
    descricao: "Suplemento Pet",
    preco: 322.49,
    imagem: "assets/img/gran8.png",
    alt: "Suplemento Pet"
  },
  {
    nome: "Menu Gato Castrado Atum & Arroz",
    descricao: "Suplemento Pet",
    preco: 39.49,
    imagem: "assets/img/gran9.png",
    alt: "Suplemento Pet"
  },
  {
    nome: "Menu Gato Adulto Frango & Arroz",
    descricao: "Suplemento Pet",
    preco: 243.89,
    imagem: "assets/img/gran10.png",
    alt: "Suplemento Pet"
  },

  // Brinquedos (brinquedos.html)
   {
    nome: "Brinquedo Macaco de Pelúcia Marrom Buddy Flicks para Cães",
    descricao: "Brinquedo para Cães",
    preco: 35.91,
    imagem: "assets/img/brinquedos11.webp",
    alt: "Ração Premium"
  },
  {
    nome: "Brinquedo Macaco de Pelúcia Preto Buddy Flicks para Cães",
    descricao: "Brinquedo para Cães",
    preco: 35.91,
    imagem: "assets/img/brinquedo2.png",
    alt: "Brinquedo para Cães"
  },
  {
    nome: "Mordedor Pelúcia Big Duck Jambo",
    descricao: "Suplemento Pet",
    preco: 37.20,
    imagem: "assets/img/briquedo3.png",
    alt: "Suplemento Pet"
  },
  {
    nome: "Brinquedo Mordedor Sustentável Wood Amicus",
    descricao: "Suplemento Pet",
    preco: 38.16,
    imagem: "assets/img/mordedor-sustentavel-woodnpets-amicus-G-1.png",
    alt: "Suplemento Pet"
  },
  {
    nome: "Brinquedo Comedouro Amicus Crazy Ball Azul e Branca",
    descricao: "Suplemento Pet",
    preco: 29.99,
    imagem: "assets/img/brinquedo5.png",
    alt: "Suplemento Pet"
  },
  {
    nome: "Brinquedo Bolinha Cordão Flicks",
    descricao: "Ração Premium",
    preco: 14.90,
    imagem: "assets/img/brimquedo7.png",
    alt: "Ração Premium"
  },
  {
    nome: "Pelúcia Monkey Fleece Jambo Bege",
    descricao: "Brinquedo para Cães",
    preco: 59.95,
    imagem: "assets/img/brinquedi=o6.webp",
    alt: "Brinquedo para Cães"
  },
  {
    nome: "Bolinha Mini Travinha 2 Unidades Animania Verde e Azul",
    descricao: "Suplemento Pet",
    preco: 37.20,
    imagem: "assets/img/brinquedo8.webp",
    alt: "Suplemento Pet"
  },
  {
    nome: "Brinquedo Interativo Labirinto Verde Pet Games",
    descricao: "Suplemento Pet",
    preco: 62.81,
    imagem: "assets/img/brinquedo9.webp",
    alt: "Suplemento Pet"
  },
  {
    nome: "Bolinha de Pontas Grande Azul Jambo",
    descricao: "Suplemento Pet",
    preco: 27.51,
    imagem: "assets/img/brinquedo10.png",
    alt: "Suplemento Pet"
  },

  // Produtos do tartaruga.json
   {
    nome: "Origens Premium Especial Light Cães Adultos Portes Mini e Pequeno Sabor Frango e Cereais",
    descricao: "Suplemento Pet",
    preco: 37.20,
    imagem: "assets/img/tartaruga.jpg",
    alt: "Suplemento Pet"
  },
  {
    nome: "Origens Premium Especial Energy Cães Adultos Sabor Frango e Cereais",
    descricao: "Suplemento Pet",
    preco: 227.20,
    imagem: "assets/img/tar2.jpg",
    alt: "Suplemento Pet"
  },
  {
    nome: "Origens Premium Especial Light Cães Adultos Portes Médio e Grande Sabor Frango e Cereais",
    descricao: "Suplemento Pet",
    preco: 242.20,
    imagem: "assets/img/tar3.jpg",
    alt: "Suplemento Pet"
  },
  {
    nome: "Origens Premium Especial Raças Específicas Cães Adultos Pit Bull e Rottweiler",
    descricao: "Ração Premium",
    preco: 257.20,
    imagem: "assets/img/tar4.jpg",
    alt: "Brinquedo para Cães"
  },
  {
    nome: "Origens Premium Especial Cães Adultos Sabor Carne e Cereais",
    descricao: "Suplemento Pet",
    preco: 37.20,
    imagem: "assets/img/tar5.jpg",
    alt: "Suplemento Pet"
  },
  {
    nome: "Origens Premium Especial Cães Adultos Sabor Carne e Cereais",
    descricao: "Suplemento Pet",
    preco: 37.20,
    imagem: "assets/img/tar6.jpg",
    alt: "Suplemento Pet"
  },
  {
    nome: "Origens Premium Especial Cães Adultos Sabor Carne e Cereais",
    descricao: "Suplemento Pet",
    preco: 37.20,
    imagem: "assets/img/tar7.jpg",
    alt: "Suplemento Pet"
  },
  {
    nome: "Origens Premium Especial Cães Adultos Sabor Carne e Cereais",
    descricao: "Suplemento Pet",
    preco: 37.20,
    imagem: "assets/img/tar8.jpg",
    alt: "Suplemento Pet"
  },
  {
    nome: "Origens Premium Especial Cães Adultos Sabor Carne e Cereais",
    descricao: "Suplemento Pet",
    preco: 37.20,
    imagem: "assets/img/tar9.jpg",
    alt: "Suplemento Pet"
  },
  {
    nome: "Origens Premium Especial Cães Adultos Sabor Carne e Cereais",
    descricao: "Suplemento Pet",
    preco: 37.20,
    imagem: "assets/img/tar10.jpg",
    alt: "Suplemento Pet"
  }
];

async function main() {
  await prisma.produto.createMany({
    data: produtos
  });
  console.log('Produtos inseridos com sucesso!');
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });