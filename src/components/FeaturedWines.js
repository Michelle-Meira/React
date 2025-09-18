import React from "react";
import { motion } from "framer-motion";

import featuredImage2 from '../images/DESTAQUE_1.png';
import featuredImage3 from '../images/DESTAQUE_2.png';
import featuredImage4 from '../images/DESTAQUE_3.png';

const featuredWines = [
  {
    id: 1,
    name: 'Serena Merlot',
    description: 'Um tinto elegante e macio, com notas de frutas vermelhas e especiarias.',
    image: featuredImage3,
    price: 120.00,
  },
  {
    id: 2,
    name: 'Serena Chardonnay',
    description: 'Um branco fresco e vibrante, com aromas de abacaxi e baunilha.',
    image: featuredImage2,
    price: 95.00,
  },
  {
    id: 3,
    name: 'Serena Rosé',
    description: 'Um rosé leve e refrescante, perfeito para dias quentes e harmonizações.',
    image: featuredImage4,
    price: 80.00,
  },
];

const FeaturedWines = ({ onSelectWine }) => {
  return (
    <section id="destaques" className="py-20 bg-gray-50 text-vinho-escuro">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          className="text-5xl font-light mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Destaques da Vinícola
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {featuredWines.map((wine, index) => (
            <motion.div
              key={wine.id}
              className="group relative bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500 cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              onClick={() => onSelectWine(wine)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={wine.image}
                  alt={wine.name}
                  className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <h3 className="text-3xl font-light text-white">{wine.name}</h3>
                </div>
              </div>
              <div className="p-6 text-center">
                <p className="text-gray-600 mb-6">{wine.description}</p>
                <div className="inline-block px-6 py-2 rounded-full bg-vinho-claro text-white font-medium shadow-md hover:bg-vinho-escuro transition-colors">
                  Saiba Mais
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWines;