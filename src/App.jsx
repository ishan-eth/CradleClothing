import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import LowerHero from './components/LowerHero/LowerHero'
import Items from './components/Items/Items'
import Shop from './components/Shop/Shop'
import BlackCompressionShirt from './components/ProductPages/BlackCompressionShirt'
import OversizedTShirt from './components/ProductPages/OversizedTShirt'
import WhiteCompressionShirt from './components/ProductPages/WhiteCompressionShirt'
import RegularTShirt from './components/ProductPages/RegularTShirt'
import BlackTankTop from './components/ProductPages/BlackTankTop'
import Checkout from './components/Checkout/Checkout'
import Cart from './components/Cart/Cart'

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={
            <>
              <Navbar/>
              <Hero/>
              <LowerHero/>
              <Items/>
              <Cart/>
            </>
          }/>
          <Route path="/shop" element={
            <>
              <Navbar/>
              <Shop/>
              <Cart/>
            </>
          }/>
          <Route path="/product/black-compression-shirt" element={
            <>
              <Navbar/>
              <BlackCompressionShirt/>
              <Cart/>
            </>
          }/>
          <Route path="/product/oversized-tshirt" element={
            <>
              <Navbar/>
              <OversizedTShirt/>
              <Cart/>
            </>
          }/>
          <Route path="/product/white-compression-shirt" element={
            <>
              <Navbar/>
              <WhiteCompressionShirt/>
              <Cart/>
            </>
          }/>
          <Route path="/product/regular-tshirt" element={
            <>
              <Navbar/>
              <RegularTShirt/>
              <Cart/>
            </>
          }/>
          <Route path="/product/black-tank-top" element={
            <>
              <Navbar/>
              <BlackTankTop/>
              <Cart/>
            </>
          }/>
          <Route path="/checkout" element={
            <>
              <Navbar/>
              <Checkout/>
            </>
          }/>
        </Routes>
      </Router>
    </CartProvider>
  )
}

export default App