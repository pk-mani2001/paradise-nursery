import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { increaseQty, decreaseQty, removeFromCart } from '../redux/cartSlice';
import Header from '../components/Header';
import './ShoppingCartPage.css';

const ShoppingCartPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cartItems, totalQuantity, totalAmount } = useSelector(state => state.cart);

  const handleCheckout = () => {
    alert('Checkout Successful!');
  };

  return (
    <div className="shopping-cart-page">
      <Header />
      <div className="cart-container">
        <h1 className="cart-title">Shopping Cart</h1>
        
        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <p>Your cart is empty</p>
            <button className="continue-shopping-btn" onClick={() => navigate('/products')}>
              Start Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="cart-summary">
              <p>Total Items: <strong>{totalQuantity}</strong></p>
              <p>Total Amount: <strong>${totalAmount.toFixed(2)}</strong></p>
            </div>

            <div className="cart-items">
              {cartItems.map(item => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} className="cart-item-image" />
                  <div className="cart-item-details">
                    <h3>{item.name}</h3>
                    <p className="cart-item-price">Unit Price: ${item.price}</p>
                  </div>
                  <div className="cart-item-controls">
                    <div className="quantity-controls">
                      <button onClick={() => dispatch(decreaseQty(item.id))}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => dispatch(increaseQty(item.id))}>+</button>
                    </div>
                    <p className="subtotal">Subtotal: ${item.totalPrice.toFixed(2)}</p>
                    <button 
                      className="delete-btn" 
                      onClick={() => dispatch(removeFromCart(item.id))}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-actions">
              <button className="continue-shopping-btn" onClick={() => navigate('/products')}>
                Continue Shopping
              </button>
              <button className="checkout-btn" onClick={handleCheckout}>
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ShoppingCartPage;
