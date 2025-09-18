import React, { useState, useEffect } from "react";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../logo.png"; 

const navLinks = [
  { name: "Vinhos", to: "/vinhos", isAnchor: false },
  { name: "Sobre Nós", to: "/#sobre-nos", isAnchor: true },
  { name: "Galeria", to: "/#galeria", isAnchor: true },
  { name: "Contato", to: "/#contato", isAnchor: true },
];

const Navbar = ({ totalItems, onOpenCart, cartIconRef }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (event, to) => {
    setIsMenuOpen(false);

    if (to.startsWith("/#")) {
      const sectionId = to.substring(2);

      if (location.pathname === "/") {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigate("/");
        setTimeout(() => {
          document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
      event.preventDefault();
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-9 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link to="/">
            <img src={logo} alt="Vinícola Serena Logo" className="h-16 w-auto" />
          </Link>
          <span className="font-thin text-2xl text-vinho-escuro tracking-wide">
            Vinícola Serena
          </span>
        </div>

        {/* Links Desktop */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              onClick={(e) => handleLinkClick(e, link.to)}
              className="relative text-vinho-escuro font-medium group"
            >
              {link.name}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-vinho-claro transition-all group-hover:w-full"></span>
            </Link>
          ))}
          {/* Cart */}
          <motion.button
            ref={cartIconRef}
            onClick={onOpenCart}
            aria-label="Abrir carrinho"
            whileTap={{ scale: 0.9 }}
            whileHover={{ rotate: [0, -10, 10, -10, 0] }}
            className="relative text-vinho-escuro hover:text-vinho-claro transition-colors"
          >
            <FaShoppingCart className="text-2xl" />
            {totalItems > 0 && (
              <motion.span
                key={totalItems}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="absolute -top-2 -right-2 bg-vinho-claro text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center"
              >
                {totalItems}
              </motion.span>
            )}
          </motion.button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;