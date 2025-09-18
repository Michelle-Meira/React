import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import vinhedoImage from "../images/vinhedo.png";

const Hero = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);

  return (
    <div className="relative h-[70vh] md:h-[85vh] rounded-2xl overflow-hidden shadow-2xl">
      {/* Imagem de fundo com animação */}
      <motion.img
        className="absolute inset-0 w-full h-full object-cover"
        src={vinhedoImage}
        alt="Homem colhendo uvas em um vinhedo"
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
      />

      {/* Overlay escuro para contraste do texto */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>

      {/* Conteúdo do Hero */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-6">
        <motion.div
          className="text-white max-w-3xl"
          style={{ y }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-light mb-6 tracking-wide"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            A Elegância em Cada Gota
          </motion.h1>

          <motion.p
            className="text-lg md:text-2xl text-gray-200 mb-10 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Descubra a arte e a tradição por trás de cada garrafa da Vinícola Serena.
          </motion.p>

        <motion.a
                 href="#destaques" // Altera para um link de âncora
                className="inline-block px-10 py-4 bg-white text-vinho-escuro rounded-full font-semibold text-lg shadow-lg hover:shadow-vinho-escuro/50 transition-all"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                 >
           Descubra Nossos Vinhos
         </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;