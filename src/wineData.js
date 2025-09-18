import uvaImage from "./images/uva.png";

const wineData = [
  { 
    id: 1, 
    name: "Serena Merlot Clássico", 
    price: 120.0, 
    description: "Um vinho tinto aveludado com notas de frutas vermelhas e carvalho.",
    details: {
      title: 'A Profundidade do Merlot',
      description: 'Nosso Serena Merlot Clássico é envelhecido em barricas de carvalho francês por 12 meses, conferindo-lhe uma complexidade e profundidade únicas. Perfeito para acompanhar carnes vermelhas assadas.',
      harmonization: 'Ideal com filé mignon, cordeiro e massas com molhos robustos.',
    },
    image: uvaImage 
  },
  { 
    id: 2, 
    name: "Serena Chardonnay Premium", 
    price: 95.0, 
    description: "Um branco fresco e complexo com toques de baunilha e abacaxi.",
    details: {
      title: 'A Frescura do Chardonnay',
      description: 'Este Chardonnay é um reflexo do nosso terroir. Cultivado em solos ricos em minerais, apresenta uma acidez vibrante e um final longo e elegante. Sirva bem gelado com frutos do mar.',
      harmonization: 'Excelente com ostras, camarão grelhado e queijos de cabra.',
    },
    image: uvaImage 
  },
  { 
    id: 3, 
    name: "Serena Rosé Pôr do Sol", 
    price: 80.0, 
    description: "Um Rosé vibrante com aromas de morango e um final cítrico e refrescante.",
    details: {
      title: 'O Pôr do Sol na Taça',
      description: 'O Serena Rosé Pôr do Sol é um vinho leve e perfumado. Suas notas de morango e pêssego o tornam perfeito para um final de tarde ensolarado. É a nossa celebração da alegria de viver.',
      harmonization: 'Combina com saladas, pratos vegetarianos e sobremesas de frutas vermelhas.',
    },
    image: uvaImage 
  },
  { 
    id: 4, 
    name: "Serena Cabernet Sauvignon Reserva", 
    price: 150.0, 
    description: "Um tinto encorpado com taninos marcantes e notas de amora e pimenta.",
    details: {
      title: 'A Grandeza do Cabernet Sauvignon',
      description: 'Um Cabernet Sauvignon encorpado, com taninos presentes e um final de boca prolongado. Amadurecido em carvalho americano, oferece notas de amora e pimenta que o tornam inesquecível.',
      harmonization: 'Ideal com churrasco, massas com molho de tomate e queijos duros.',
    },
    image: uvaImage 
  },
  { 
    id: 5, 
    name: "Serena Espumante Brut", 
    price: 110.0, 
    description: "Um espumante elegante, com perlage fina e persistente e aromas de frutas brancas.",
    details: {
      title: 'A Celebração do Espumante Brut',
      description: 'Nosso Espumante Brut é produzido pelo método Charmat, resultando em bolhas finas e persistentes. Seus aromas de frutas brancas e pão tostado o tornam a escolha perfeita para qualquer celebração.',
      harmonization: 'Perfeito como aperitivo, com sushi e salada de frutas.',
    },
    image: uvaImage 
  },
  { 
    id: 6, 
    name: "Serena Sauvignon Blanc", 
    price: 90.0, 
    description: "Um branco com acidez refrescante e notas herbáceas, perfeito para dias de sol.",
    details: {
      title: 'A Leveza do Sauvignon Blanc',
      description: 'Este Sauvignon Blanc exibe uma acidez refrescante, com aromas de maracujá e grapefruit. É a nossa homenagem aos dias de sol e à brisa do campo.',
      harmonization: 'Harmoniza com peixes leves, saladas verdes e queijos frescos.',
    },
    image: uvaImage 
  },
  { 
    id: 7, 
    name: "Serena Pinot Noir", 
    price: 135.0, 
    description: "Um tinto leve e sofisticado, com aromas de cereja e um final terroso.",
    details: {
      title: 'A Delicadeza do Pinot Noir',
      description: 'Um tinto leve e sofisticado, com aromas delicados de cereja e framboesa. Nosso Pinot Noir é envelhecido para destacar sua elegância e notas terrosas.',
      harmonization: 'Combina com aves, cogumelos e risotos.',
    },
    image: uvaImage 
  },
  { 
    id: 8, 
    name: "Serena Malbec", 
    price: 105.0, 
    description: "Um tinto frutado e intenso, com toques de ameixa e chocolate.",
    details: {
      title: 'A Paixão do Malbec',
      description: 'Nosso Malbec é uma expressão intensa de frutas escuras. Com notas de ameixa e um leve toque de chocolate, ele é a escolha perfeita para quem busca um vinho com personalidade.',
      harmonization: 'Ideal com carnes assadas, hambúrguer e pizzas.',
    },
    image: uvaImage 
  },
];

export default wineData;