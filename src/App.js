import React, { useState, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedWines from './components/FeaturedWines';
import Cart from './components/Cart';
import SuccessModal from './components/SuccessModal';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import WinesPage from './components/WinesPage';
import WineDetails from './components/WineDetails';
import WineDetailsPage from './components/WineDetailsPage'; 

function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedWine, setSelectedWine] = useState(null); 
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const cartIconRef = useRef(null);

  const handleAddToCart = (wine) => {
    const existingItem = cart.find(item => item.id === wine.id);
    setCart(prevCart =>
      existingItem
        ? prevCart.map(item => item.id === wine.id ? { ...item, quantity: item.quantity + 1 } : item)
        : [...prevCart, { ...wine, quantity: 1 }]
    );
    setIsCartOpen(true);
  };

  const handleQuantityChange = (id, change) => {
    setCart(prevCart =>
      prevCart
        .map(item => item.id === id ? { ...item, quantity: item.quantity + change } : item)
        .filter(item => item.quantity > 0)
    );
  };

  const handleRemoveFromCart = (id) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };
  
  const handleCloseCart = () => {
    setIsCartOpen(false);
  };

  const handleCheckout = () => {
    setCart([]);
    setIsCartOpen(false);
    setIsSuccessModalOpen(true);
  };

  return (
    <Router>
      <div className="bg-gray-50 text-vinho-escuro min-h-screen">
        <Navbar totalItems={cart.length} onOpenCart={() => setIsCartOpen(true)} cartIconRef={cartIconRef} />
        
        <Routes>
          <Route path="/" element={
            <main className="pt-20">
              <Hero />
              <FeaturedWines onSelectWine={setSelectedWine} />
              <About />
              <Gallery />
              <Contact />
            </main>
          } />
          <Route path="/vinhos" element={
            <div className="pt-20">
              <WinesPage onAddToCart={handleAddToCart} />
            </div>
          } />
          <Route path="/vinhos/:id" element={<WineDetailsPage onAddToCart={handleAddToCart} />} />
        </Routes>
        
        <Footer />
        
        <AnimatePresence>
          {isCartOpen && (
            <Cart
              cartItems={cart}
              onClose={handleCloseCart}
              onCheckout={handleCheckout}
              onQuantityChange={handleQuantityChange}
              onRemove={handleRemoveFromCart}
            />
          )}
        </AnimatePresence>
        
        <AnimatePresence>
          {selectedWine && (
            <WineDetails
              wine={selectedWine}
              onClose={() => setSelectedWine(null)}
              onAddToCart={handleAddToCart}
            />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {isSuccessModalOpen && (
            <SuccessModal
              onClose={() => setIsSuccessModalOpen(false)}
            />
          )}
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;