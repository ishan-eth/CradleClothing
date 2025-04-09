import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar/Navbar';
import Cart from './components/Cart/Cart';
import Hero from './components/Hero/Hero';
import LowerHero from './components/LowerHero/LowerHero';
import Items from './components/Items/Items';
import Shop from './components/Shop/Shop';
import Checkout from './components/Checkout/Checkout';
import AdminLogin from './components/Admin/AdminLogin';
import AdminDashboard from './components/Admin/AdminDashboard';
import BlackCompressionShirt from './components/ProductPages/BlackCompressionShirt';
import OversizedTShirt from './components/ProductPages/OversizedTShirt';
import WhiteCompressionShirt from './components/ProductPages/WhiteCompressionShirt';
import RegularTShirt from './components/ProductPages/RegularTShirt';
import BlackTankTop from './components/ProductPages/BlackTankTop';

// Mobile Components
import MobileHome from './components/Mobile/MobileHome';
import MobileProductDetail from './components/Mobile/MobileProductDetail';

const ProtectedRoute = ({ children }) => {
    const adminToken = localStorage.getItem('adminToken');
    if (!adminToken) {
        return <Navigate to="/admin/login" replace />;
    }
    return children;
};

function App() {
    const [isMobile, setIsMobile] = useState(false);
    
    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        
        checkIfMobile();
        window.addEventListener('resize', checkIfMobile);
        
        return () => window.removeEventListener('resize', checkIfMobile);
    }, []);

    console.log("App rendering, isMobile:", isMobile);

    return (
        <CartProvider>
            <Router>
                <Routes>
                    {/* Home Route */}
                    <Route path="/" element={
                        isMobile ? (
                            <>
                                <MobileHome />
                                <Cart />
                            </>
                        ) : (
                            <>
                                <Navbar />
                                <Hero />
                                <LowerHero />
                                <Items />
                                <Cart />
                            </>
                        )
                    }/>
                    
                    {/* Shop Route */}
                    <Route path="/shop" element={
                        isMobile ? (
                            <>
                                <MobileHome />
                                <Cart />
                            </>
                        ) : (
                            <>
                                <Navbar />
                                <Shop />
                                <Cart />
                            </>
                        )
                    }/>
                    
                    {/* Checkout Route */}
                    <Route path="/checkout" element={
                        <>
                            <Navbar />
                            <Checkout />
                            <Cart />
                        </>
                    }/>
                    
                    {/* Admin Routes */}
                    <Route path="/admin/login" element={<AdminLogin />} />
                    <Route 
                        path="/admin/dashboard" 
                        element={
                            <ProtectedRoute>
                                <AdminDashboard />
                            </ProtectedRoute>
                        } 
                    />
                    
                    {/* Product Routes */}
                    <Route path="/product/:productId" element={
                        isMobile ? (
                            <>
                                <MobileProductDetail />
                                <Cart />
                            </>
                        ) : (
                            <>
                                <Navbar />
                                <BlackCompressionShirt />
                                <Cart />
                            </>
                        )
                    }/>
                    
                    {/* Legacy Product Routes */}
                    <Route path="/product/black-compression-shirt" element={
                        isMobile ? (
                            <>
                                <MobileProductDetail />
                                <Cart />
                            </>
                        ) : (
                            <>
                                <Navbar />
                                <BlackCompressionShirt />
                                <Cart />
                            </>
                        )
                    }/>
                    <Route path="/product/oversized-tshirt" element={
                        isMobile ? (
                            <>
                                <MobileProductDetail />
                                <Cart />
                            </>
                        ) : (
                            <>
                                <Navbar />
                                <OversizedTShirt />
                                <Cart />
                            </>
                        )
                    }/>
                    <Route path="/product/white-compression-shirt" element={
                        isMobile ? (
                            <>
                                <MobileProductDetail />
                                <Cart />
                            </>
                        ) : (
                            <>
                                <Navbar />
                                <WhiteCompressionShirt />
                                <Cart />
                            </>
                        )
                    }/>
                    <Route path="/product/regular-tshirt" element={
                        isMobile ? (
                            <>
                                <MobileProductDetail />
                                <Cart />
                            </>
                        ) : (
                            <>
                                <Navbar />
                                <RegularTShirt />
                                <Cart />
                            </>
                        )
                    }/>
                    <Route path="/product/black-tank-top" element={
                        isMobile ? (
                            <>
                                <MobileProductDetail />
                                <Cart />
                            </>
                        ) : (
                            <>
                                <Navbar />
                                <BlackTankTop />
                                <Cart />
                            </>
                        )
                    }/>
                </Routes>
            </Router>
        </CartProvider>
    );
}

export default App;