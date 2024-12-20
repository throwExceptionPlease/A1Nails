import React, { JSX } from 'react';
import './App.module.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/landing-page/LandingPage';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path="/"
          element={<LandingPage />}
        />
      </Routes>
    </BrowserRouter> 
  );
}

export default App;
