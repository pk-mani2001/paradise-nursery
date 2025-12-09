import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();
  const totalQuantity = useSelector(state => state.cart.totalQuantity);

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo" onClick={() => navigate('/')}>
          <span className="logo-icon">🌿</span>
          <span className="logo-text">Paradise Nursery</span>
        </div>
        <p className="tagline">Bringing Nature to Your Home</p>
        <div className="cart-icon" onClick={() => navigate('/cart')}>
          <svg className="cart-symbol" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
          {totalQuantity > 0 && <span className="cart-count">{totalQuantity}</span>}
        </div>
      </div>
    </header>
  );
};

export default Header;
