import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSearchPlus } from 'react-icons/fa';

// tenho que lembrar de importar as imagens
// Conferir nomes
import img1 from '../images/GALERIA_1.jpg';
import img2 from '../images/GALERIA_2.jpg';
import img3 from '../images/GALERIA_3.jpg';
import img4 from '../images/GALERIA_4.jpg';
import img5 from '../images/GALERIA_5.jpg'; // Usando um nome único
import img6 from '../images/GALERIA_6.jpg'; // Usando um nome único

const images = [img1, img2, img3, img4, img5, img6];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="galeria" className="py-20 bg-gray-50 text-vinho-escuro">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          className="text-5xl font-light mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Nossa Galeria
        </motion.h2>

        {/* Grid de imagens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="relative w-full h-80 rounded-2xl overflow-hidden shadow-lg cursor-pointer group"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image}
                alt={`Galeria Vinícola Serena ${index + 1}`}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
              />

              {/* Overlay no hover */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <FaSearchPlus className="text-white text-3xl" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              src={selectedImage}
              alt="Imagem ampliada da galeria"
              className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-2xl"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;