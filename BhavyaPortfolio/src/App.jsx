import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import LeftSidePortfolioProfileDescription from './components/LeftSidePortfolioProfileDescription/PortfolioProfileLeft';
import RightSidePortfolioDetailed from './components/RightSidePortfolioDetailed/RightSidePortfolio';
import Confetti from 'react-confetti';

function App() {
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100vh' }}>
        <Confetti
          width={999}
          height={6000}
        />
      </div>
      <div className='main'>
        <LeftSidePortfolioProfileDescription />
        <RightSidePortfolioDetailed />
      </div>
    </>
  );
}

export default App;
