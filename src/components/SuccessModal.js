import React from 'react';
import { motion } from 'framer-motion';

const SuccessModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3 }}
        className="relative max-w-sm w-full p-8 bg-white rounded-2xl shadow-lg border border-gray-100 text-center"
      >
        <h3 className="text-4xl font-thin text-vinho-escuro mb-4">
          Compra Finalizada!
        </h3>
        <p className="text-lg text-gray-700 mb-6">
          Obrigado pela sua compra. Seu pedido será processado em breve.
        </p>
        <button
          onClick={onClose}
          className="w-full py-3 bg-vinho-escuro text-white rounded-full hover:bg-vinho-claro transition-colors"
        >
          Fechar
        </button>
      </motion.div>
    </div>
  );
};

export default SuccessModal;