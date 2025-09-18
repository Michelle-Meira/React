import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="sobre-nos" className="py-20 bg-gray-50 text-vinho-escuro">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Imagem ilustrativa */}
        <motion.div
          className="rounded-2xl overflow-hidden shadow-lg"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src="https://images.unsplash.com/photo-1506806732259-39c2d0268443?q=80&w=2670&auto=format&fit=crop"
            alt="Vinhedo Vinícola Serena"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Texto */}
        <motion.div
          className="space-y-6 text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-light mb-4 relative inline-block">
            Sobre a Vinícola Serena
            <span className="block w-20 h-1 bg-vinho-claro mt-3 mx-auto md:mx-0"></span>
          </h2>

          <p className="text-lg leading-relaxed text-gray-700">
            Fundada em 1985, a Vinícola Serena é o resultado de uma paixão de
            longa data pela arte da vinificação. Nossos vinhedos, localizados
            nas colinas ensolaradas do sul do Brasil, produzem uvas de qualidade
            excepcional, que dão origem a vinhos com caráter e alma.
          </p>

          <p className="text-lg leading-relaxed text-gray-700">
            Cada garrafa é um tributo à nossa herança, combinando técnicas
            tradicionais com inovação sustentável. Acreditamos que um grande
            vinho reflete a terra de onde ele vem e as mãos que o criaram, e é
            por isso que cuidamos de cada detalhe, da videira à garrafa.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
