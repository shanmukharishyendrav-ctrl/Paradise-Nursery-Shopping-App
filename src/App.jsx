import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

const App = ({ currentPage, setCurrentPage }) => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    setCurrentPage('products');
    navigate('/products');
  };

  return (
    <div className="app-container">
      {currentPage === 'home' ? (
        <div className="landing-page">
          <div className="landing-content">
            <h1>Paradise Nursery</h1>
            <p>Bring Nature Into Your Home - Premium Houseplants Delivered to Your Door</p>
            <button className="get-started-btn" onClick={handleGetStarted}>
              Get Started
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default App;
