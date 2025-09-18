import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search } from "lucide-react";
import WineCard from "./WineCard";
import wineData from "../wineData";
import WineDetails from "./WineDetails";

const Wines = ({ onAddToCart }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedWine, setSelectedWine] = useState(null);

  const filteredWines = wineData.filter((wine) =>
    wine.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelectWine = (wine) => {
    setSelectedWine(wine);
  };

  const handleCloseDetails = () => {
    setSelectedWine(null);
  };

  return (
    <section
      id="nossos-vinhos"
      className="relative py-24 px-6 bg-gradient-to-b from-[#f8f8f8] via-[#ffffff] to-[#f8f8f8] text-gray-800"
    >
      {/* Modal de detalhes */}
      <AnimatePresence>
        {selectedWine && (
          <motion.div
            key="wine-details-modal"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
          >
            <div className="bg-white rounded-2xl shadow-xl max-w-3xl w-full p-6 relative">
              <WineDetails
                wine={selectedWine}
                onClose={handleCloseDetails}
                onAddToCart={onAddToCart}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Título */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative text-5xl md:text-6xl font-light mb-12 text-center tracking-wider text-vinho-escuro"
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b9975b] to-[#f5e1a4]">
          Nossos Vinhos
        </span>
      </motion.h2>

      {/* Campo de busca */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="relative mb-16 max-w-2xl mx-auto"
      >
        <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-500 text-xl" />
        <input
          type="text"
          placeholder="Buscar por vinho..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-14 pr-6 py-4 text-lg rounded-full shadow-md border border-gray-300 bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#b9975b] transition"
        />
      </motion.div>

      {/* Lista de vinhos */}
      <motion.div
        layout
        className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto"
      >
        {filteredWines.length > 0 ? (
          filteredWines.map((wine, index) => (
            <motion.div
              key={wine.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{
                scale: 1.04,
                boxShadow: "0 0 40px rgba(185,151,91,0.4)",
              }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 transition transform cursor-pointer"
            >
              <WineCard
                wine={wine}
                onAddToCart={onAddToCart}
                onSelectWine={() => handleSelectWine(wine)}
              />
            </motion.div>
          ))
        ) : (
          <p className="col-span-full text-xl text-gray-500 text-center">
            Nenhum vinho encontrado 🍇
          </p>
        )}
      </motion.div>
    </section>
  );
};

export default Wines;
