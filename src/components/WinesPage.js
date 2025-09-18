import React from 'react';
import Wines from './Wines'; // Aqui está a correção. Use "./" para a mesma pasta.

const WinesPage = ({ onAddToCart }) => {
    return (
        <section className="container mx-auto px-4 py-8 pt-20">
            <h2 className="text-4xl font-light text-center mb-8">Nossos Vinhos</h2>
            <Wines
                onAddToCart={onAddToCart}
            />
        </section>
    );
};

export default WinesPage;