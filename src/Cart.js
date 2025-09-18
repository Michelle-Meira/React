import React from 'react';
import './Cart.css';

function Cart({ cartItems, onClose, onCheckout, onRemove, onQuantityChange }) {
  const total = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="cart-overlay">
      <div className="cart-sidebar">
        <div className="cart-header">
          <h2>Sua Sacola</h2>
          <button className="close-button" onClick={onClose}>&times;</button>
        </div>
        {cartItems.length === 0 ? (
          <p className="empty-cart">Sua sacola está vazia.</p>
        ) : (
          <ul className="cart-list">
            {cartItems.map(item => (
              <li key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="item-details">
                  <h4>{item.name}</h4>
                  <div className="quantity-controls">
                    <button onClick={() => onQuantityChange(item.id, -1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => onQuantityChange(item.id, 1)}>+</button>
                  </div>
                </div>
                <button className="remove-button" onClick={() => onRemove(item.id)}>Remover</button>
              </li>
            ))}
          </ul>
        )}
        <div className="cart-footer">
          <p>Total de itens: {total}</p>
          <button className="checkout-button" onClick={onCheckout}>Finalizar Compra</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;