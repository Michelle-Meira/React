import React from 'react';
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-vinho-escuro text-white py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        {/* Informações de Direitos Autorais */}
        <div className="mb-4 md:mb-0">
          <p>&copy; 2025 Vinícola Serena. Todos os direitos reservados.</p>
        </div>

        {/* Links de Navegação */}
        <div className="mb-4 md:mb-0">
          <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8">
            <li><a href="#nossos-vinhos" className="hover:underline">Vinhos</a></li>
            <li><a href="#contato" className="hover:underline">Contato</a></li>
          </ul>
        </div>

        {/* Ícones de Redes Sociais */}
        <div className="flex space-x-4">
          <a href="#" aria-label="Instagram" className="hover:text-gray-300">
            <FaInstagram size={24} />
          </a>
          <a href="#" aria-label="Facebook" className="hover:text-gray-300">
            <FaFacebook size={24} />
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-gray-300">
            <FaTwitter size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;