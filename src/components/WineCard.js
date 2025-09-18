import React from 'react';
import { motion } from 'framer-motion';

const WineCard = ({ wine, onAddToCart, onSelectWine }) => {
  const handlePurchase = (event) => {
    event.stopPropagation();
    onAddToCart(wine);
  };

  const handleDetails = (event) => {
    event.stopPropagation();
    // AQUI: Chame a prop que está sendo passada, que é `onSelectWine`.
    // O valor passado para essa função será o objeto 'wine' completo.
    onSelectWine(wine); 
  };

  const formatPrice = (value) =>
    new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);

  return (
    <motion.div
      className="w-full max-w-sm bg-white rounded-2xl overflow-hidden shadow-lg transition-shadow duration-300 ease-in-out cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03, boxShadow: "0px 8px 20px rgba(0,0,0,0.15)" }}
      whileTap={{ scale: 0.97 }}
      onClick={handleDetails}
    >
      <img
        src={wine.image}
        alt={wine.name}
        loading="lazy"
        className="w-full h-56 object-contain"
      />
      <div className="p-6 text-left">
        <h3 className="text-2xl font-thin text-vinho-escuro mb-2">
          {wine.name}
        </h3>
        <p className="text-gray-600 mb-4">{wine.description}</p>
        <div className="flex justify-between items-center mt-6">
          <span className="text-xl font-bold text-vinho-escuro">
            {formatPrice(wine.price)}
          </span>
          <div className="flex space-x-2">
            <button
              onClick={handlePurchase}
              aria-label={`Comprar ${wine.name}`}
              className="px-4 py-2 bg-vinho-escuro text-white rounded-full text-sm hover:bg-vinho-claro transition-colors duration-300 ease-in-out"
            >
              Comprar
            </button>
            <button
              onClick={handleDetails}
              aria-label={`Ver detalhes de ${wine.name}`}
              className="px-4 py-2 border border-vinho-escuro text-vinho-escuro rounded-full text-sm hover:bg-vinho-escuro hover:text-white transition-colors duration-300 ease-in-out"
            >
              Detalhes
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default WineCard;