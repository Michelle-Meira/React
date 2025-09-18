import React from "react";
import { motion } from "framer-motion";

// Altere "addToCart" para "onAddToCart" aqui
const WineDetails = ({ wine, onClose, onAddToCart }) => {
  if (!wine) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-white rounded-2xl p-6 max-w-lg w-full shadow-lg text-center"
      >
        <img
          src={wine.image}
          alt={wine.name}
          className="mx-auto mb-4 max-h-72 object-contain"
        />

        <h2 className="text-2xl font-bold">{wine.name}</h2>
        <p className="text-gray-600 my-2">{wine.description}</p>
        <p className="text-lg font-semibold text-gray-900">
          R${wine.price.toFixed(2)}
        </p>

        <button
          // E altere "addToCart" para "onAddToCart" aqui também
          onClick={() => onAddToCart(wine)}
          className="mt-4 px-4 py-2 bg-[#5a0c28] text-white rounded-full shadow hover:bg-[#7a143a] transition"
        >
          Adicionar ao Carrinho
        </button>

        <button
          onClick={onClose}
          className="mt-3 block mx-auto text-sm text-gray-500 hover:underline"
        >
          Fechar
        </button>
      </motion.div>
    </div>
  );
};

export default WineDetails;