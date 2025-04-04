import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Items.css'
import blackTshirt from "../../Assets/images/blackhalfbranded.png";
import whiteTshirt from "../../Assets/images/white-compression.png";
import greyTshirt from "../../Assets/images/grey-oversized.png";
import blackPlain from "../../Assets/images/black-tshirt.png";
import blackTankTop from "../../Assets/images/black-tanktop.png";

export default function Items() {
  const [activeCategory, setActiveCategory] = useState('compression');
  const navigate = useNavigate();

  const handleProductClick = (productName) => {
    // Convert product name to URL-friendly format and navigate
    const urlPath = productName.toLowerCase().replace(/ /g, '-');
    navigate(`/product/${urlPath}`);
  };

  return (
    <div className="main-page">
        <ul className="categories">
            <li 
              className={activeCategory === 'compression' ? 'active' : ''} 
              onClick={() => setActiveCategory('compression')}
            >
              Compression
            </li>
            <li 
              className={activeCategory === 'oversized' ? 'active' : ''} 
              onClick={() => setActiveCategory('oversized')}
            >
              Oversized
            </li>
            <li 
              className={activeCategory === 'white' ? 'active' : ''} 
              onClick={() => setActiveCategory('white')}
            >
              White
            </li>
            <li 
              className={activeCategory === 'regular' ? 'active' : ''} 
              onClick={() => setActiveCategory('regular')}
            >
              Regular
            </li>
            <li 
              className={activeCategory === 'tanktop' ? 'active' : ''} 
              onClick={() => setActiveCategory('tanktop')}
            >
              Tank Tops
            </li>
        </ul>
        <div className="objects">
            <div className="product-section" style={{ display: activeCategory === 'compression' ? 'grid' : 'none' }}>
                {[...Array(6)].map((_, index) => (
                    <div 
                        key={index} 
                        className={`obj1 ${index < 3 ? 'nomarg' : ''}`}
                        onClick={() => handleProductClick('black-compression-shirt')}
                    >
                        <img src={blackTshirt} className="obj-img" alt="Black Compression Shirt"/>
                        <p>Black Compression Shirt</p>
                    </div>
                ))}
            </div>
            
            <div className="product-section" style={{ display: activeCategory === 'white' ? 'grid' : 'none' }}>
                {[...Array(6)].map((_, index) => (
                    <div 
                        key={index} 
                        className={`obj1 ${index < 3 ? 'nomarg' : ''}`}
                        onClick={() => handleProductClick('white-compression-shirt')}
                    >
                        <img src={whiteTshirt} className="obj-img" alt="White Compression Shirt"/>
                        <p>White Compression Shirt</p>
                    </div>
                ))}
            </div>
            
            <div className="product-section" style={{ display: activeCategory === 'oversized' ? 'grid' : 'none' }}>
                {[...Array(6)].map((_, index) => (
                    <div 
                        key={index} 
                        className={`obj1 ${index < 3 ? 'nomarg' : ''}`}
                        onClick={() => handleProductClick('oversized-tshirt')}
                    >
                        <img src={greyTshirt} className="obj-img" alt="Oversized TShirt"/>
                        <p>Oversized TShirt</p>
                    </div>
                ))}
            </div>
            
            <div className="product-section" style={{ display: activeCategory === 'regular' ? 'grid' : 'none' }}>
                {[...Array(6)].map((_, index) => (
                    <div 
                        key={index} 
                        className={`obj1 ${index < 3 ? 'nomarg' : ''}`}
                        onClick={() => handleProductClick('regular-tshirt')}
                    >
                        <img src={blackPlain} className="obj-img" alt="Regular TShirt"/>
                        <p>Regular TShirt</p>
                    </div>
                ))}
            </div>
            
            <div className="product-section" style={{ display: activeCategory === 'tanktop' ? 'grid' : 'none' }}>
                {[...Array(6)].map((_, index) => (
                    <div 
                        key={index} 
                        className={`obj1 ${index < 3 ? 'nomarg' : ''}`}
                        onClick={() => handleProductClick('black-tank-top')}
                    >
                        <img src={blackTankTop} className="obj-img" alt="Black Tank Top"/>
                        <p>Black Tank Top</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}