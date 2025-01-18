import React, { JSX } from "react";
import "./App.module.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/landing-page/LandingPage";
import NotFound404 from "./pages/NotFound404/NotFound404";
import Services from "./pages/services-page/Services";
import Products from "./pages/products-page/Products";
import IndProductPage from "./components/product-page/IndProductPage";
import productsList from "./assets/productsList.json";
import BookingPage from "./pages/book-apt/BookingPage";

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/services" element={<Services />} />
        <Route
          path="/products"
          element={<Products products={productsList.products} />}
        />
        <Route path="/products/:id" element={<IndProductPage />} />
        <Route path="*" element={<NotFound404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
