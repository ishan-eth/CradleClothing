import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import LowerHero from "./components/LowerHero/LowerHero.jsx";
import Items from "./components/Items/Items.jsx";
import Shop from "./components/Shop/Shop.jsx";
import BlackCompressionShirt from "./components/ProductPages/BlackCompressionShirt.jsx";
import OversizedTShirt from "./components/ProductPages/OversizedTshirt.jsx";
import WhiteCompressionShirt from "./components/ProductPages/WhiteCompressionShirt.jsx";
import RegularTShirt from "./components/ProductPages/RegularTshirt.jsx";
import BlackTankTop from "./components/ProductPages/BlackTankTop.jsx";
import Checkout from "./components/Checkout/Checkout.jsx";
import Cart from "./components/Cart/Cart.jsx";

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Hero />
                <LowerHero />
                <Items />
                <Cart />
              </>
            }
          />
          <Route
            path="/shop"
            element={
              <>
                <Navbar />
                <Shop />
                <Cart />
              </>
            }
          />
          <Route
            path="/product/black-compression-shirt"
            element={
              <>
                <Navbar />
                <BlackCompressionShirt />
                <Cart />
              </>
            }
          />
          <Route
            path="/product/oversized-tshirt"
            element={
              <>
                <Navbar />
                <OversizedTShirt />
                <Cart />
              </>
            }
          />
          <Route
            path="/product/white-compression-shirt"
            element={
              <>
                <Navbar />
                <WhiteCompressionShirt />
                <Cart />
              </>
            }
          />
          <Route
            path="/product/regular-tshirt"
            element={
              <>
                <Navbar />
                <RegularTShirt />
                <Cart />
              </>
            }
          />
          <Route
            path="/product/black-tank-top"
            element={
              <>
                <Navbar />
                <BlackTankTop />
                <Cart />
              </>
            }
          />
          <Route
            path="/checkout"
            element={
              <>
                <Navbar />
                <Checkout />
              </>
            }
          />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
