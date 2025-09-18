import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contato" className="bg-white py-16 text-center shadow-inner">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-thin mb-12 text-vinho-escuro">Fale Conosco</h2>
        <div className="flex flex-wrap justify-center gap-12">
          {/* Informações de Contato */}
          <div className="w-full md:w-1/3 text-left">
            <h3 className="text-3xl font-thin mb-4">Estamos Aqui para Você</h3>
            <p className="text-gray-600 mb-6">
              Visite-nos ou entre em contato para tirar suas dúvidas, fazer um tour guiado ou agendar uma degustação.
            </p>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-center space-x-2">
                <FaMapMarkerAlt className="text-xl text-vinho-escuro" />
                <span>Rua do Vinhedo, 123 - Cidade do Sol, Brasil</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaEnvelope className="text-xl text-vinho-escuro" />
                <span>contato@vinicolaserena.com.br</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaPhone className="text-xl text-vinho-escuro" />
                <span>+55 (11) 98765-4321</span>
              </li>
            </ul>
          </div>

          {/* Formulário de Contato */}
          <div className="w-full md:w-1/2 text-left">
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-1">Nome</label>
                <input type="text" id="name" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-vinho-claro" />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-1">Email</label>
                <input type="email" id="email" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-vinho-claro" />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-1">Mensagem</label>
                <textarea id="message" rows="4" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-vinho-claro"></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-vinho-escuro text-white rounded-md hover:bg-vinho-claro transition-colors"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;