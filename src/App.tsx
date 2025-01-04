import React, { JSX } from 'react';
import './App.module.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/landing-page/LandingPage';
import NotFound404 from './pages/NotFound404/NotFound404';
import Services from './pages/services-page/Services';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path="/"
          element={<LandingPage />}
        />
        <Route 
          path="/services"
          element={<Services />}
        />
        <Route path='*' element={<NotFound404 />} />
      </Routes>
    </BrowserRouter> 
  );
}

export default App;
