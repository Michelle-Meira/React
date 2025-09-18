import React from 'react';
import { motion } from 'framer-motion';

const Cart = ({ cartItems, onClose, onCheckout, onQuantityChange, onRemove }) => {
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ type: 'tween', duration: 0.4 }}
      className="fixed top-0 right-0 h-full w-4/5 md:w-1/2 lg:w-1/3 bg-white shadow-2xl z-50 flex flex-col"
    >
      <div className="flex justify-between items-center p-6 border-b border-gray-200">
        <h2 className="text-3xl font-thin text-vinho-escuro">Sua Sacola</h2>
        <button onClick={onClose} className="text-3xl text-gray-500 hover:text-gray-700 transition-colors">
          &times;
        </button>
      </div>
      <div className="flex-grow p-6 overflow-y-auto">
        {cartItems.length === 0 ? (
          <p className="text-center text-gray-500 mt-12">Sua sacola está vazia.</p>
        ) : (
          <ul className="space-y-6">
            {cartItems.map(item => (
              <li key={item.id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-lg" />
                <div className="flex-grow">
                  <h4 className="text-xl font-medium">{item.name}</h4>
                  <p className="text-gray-500 mt-1">R$ {item.price.toFixed(2)}</p>
                  <div className="flex items-center mt-2 space-x-2">
                    <button onClick={() => onQuantityChange(item.id, -1)} className="px-2 py-0.5 bg-gray-200 rounded-full hover:bg-gray-300">-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => onQuantityChange(item.id, 1)} className="px-2 py-0.5 bg-gray-200 rounded-full hover:bg-gray-300">+</button>
                  </div>
                </div>
                <button onClick={() => onRemove(item.id)} className="text-red-500 hover:text-red-700 transition-colors">Remover</button>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="p-6 border-t border-gray-200">
        <div className="flex justify-between items-center mb-4">
          <span className="text-lg font-medium">Total de Itens:</span>
          <span className="text-lg font-bold">{totalItems}</span>
        </div>
        <button
          onClick={onCheckout}
          className="w-full py-3 bg-vinho-escuro text-white rounded-full hover:bg-vinho-claro transition-colors"
        >
          Finalizar Compra
        </button>
      </div>
    </motion.div>
  );
};

export default Cart;