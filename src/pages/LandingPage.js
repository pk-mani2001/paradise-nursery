import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <div className="landing-overlay">
        <div className="landing-content">
          <h1 className="company-name">🌿 Paradise Nursery 🌿</h1>
          <p className="company-description">
            Welcome to Paradise Nursery, where nature meets your home. We specialize in 
            premium houseplants that purify your air, enhance your space, and bring the 
            serenity of nature indoors. Our eco-friendly collection features fresh, 
            hand-picked plants that are perfect for both beginners and experienced plant 
            enthusiasts. Transform your living space into a green paradise today!
          </p>
          <button className="get-started-btn" onClick={() => navigate('/products')}>
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
