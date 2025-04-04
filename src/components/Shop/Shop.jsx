import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Shop.css'
import blackTshirt from '../../Assets/images/blackhalfbranded.png'
import whiteTshirt from '../../Assets/images/white-compression.png'
import greyTshirt from '../../Assets/images/grey-oversized.png'
import blackPlain from '../../Assets/images/black-tshirt.png'
import blackTankTop from '../../Assets/images/black-tanktop.png'

export default function Shop() {
    const navigate = useNavigate();
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedPrice, setSelectedPrice] = useState('all');

    const products = [
        {
            id: 'black-compression-shirt',
            name: 'Black Compression Shirt',
            price: 49.99,
            category: 'compression',
            image: blackTshirt
        },
        {
            id: 'white-compression-shirt',
            name: 'White Compression Shirt',
            price: 49.99,
            category: 'compression',
            image: whiteTshirt
        },
        {
            id: 'oversized-tshirt',
            name: 'Oversized TShirt',
            price: 39.99,
            category: 'oversized',
            image: greyTshirt
        },
        {
            id: 'regular-tshirt',
            name: 'Regular TShirt',
            price: 29.99,
            category: 'regular',
            image: blackPlain
        },
        {
            id: 'black-tank-top',
            name: 'Black Tank Top',
            price: 34.99,
            category: 'tank-top',
            image: blackTankTop
        }
    ];

    const filteredProducts = products.filter(product => {
        const categoryMatch = selectedCategory === 'all' || product.category === selectedCategory;
        const priceMatch = selectedPrice === 'all' || 
            (selectedPrice === 'under30' && product.price < 30) ||
            (selectedPrice === '30to40' && product.price >= 30 && product.price <= 40) ||
            (selectedPrice === 'over40' && product.price > 40);
        
        return categoryMatch && priceMatch;
    });

    return (
        <div className="shop-container">
            <div className="shop-content">
                <div className="filters">
                    <div className="filter-section">
                        <h3>Categories</h3>
                        <select 
                            value={selectedCategory} 
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            className="filter-select"
                        >
                            <option value="all">All Categories</option>
                            <option value="compression">Compression</option>
                            <option value="oversized">Oversized</option>
                            <option value="regular">Regular</option>
                            <option value="tank-top">Tank Tops</option>
                        </select>
                    </div>

                    <div className="filter-section">
                        <h3>Price Range</h3>
                        <select 
                            value={selectedPrice} 
                            onChange={(e) => setSelectedPrice(e.target.value)}
                            className="filter-select"
                        >
                            <option value="all">All Prices</option>
                            <option value="under30">Under $30</option>
                            <option value="30to40">$30 - $40</option>
                            <option value="over40">Over $40</option>
                        </select>
                    </div>
                </div>

                <div className="products-grid">
                    {filteredProducts.map(product => (
                        <div 
                            key={product.id} 
                            className="product-card"
                            onClick={() => navigate(`/product/${product.id}`)}
                        >
                            <img src={product.image} alt={product.name} />
                            <h3>{product.name}</h3>
                            <p className="price">${product.price}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}