import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminDashboard.css';

export default function AdminDashboard() {
    const [products, setProducts] = useState([]);
    const [newProduct, setNewProduct] = useState({
        name: '',
        price: '',
        category: '',
        description: '',
        image: null
    });
    const [editingProduct, setEditingProduct] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/products', {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
                }
            });
            if (response.ok) {
                const data = await response.json();
                setProducts(data);
            }
        } catch (error) {
            console.error('Failed to fetch products:', error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewProduct(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        setNewProduct(prev => ({
            ...prev,
            image: file
        }));
    };

    const handleAddProduct = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        Object.keys(newProduct).forEach(key => {
            formData.append(key, newProduct[key]);
        });

        try {
            const response = await fetch('http://localhost:5000/api/products', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
                },
                body: formData
            });

            if (response.ok) {
                fetchProducts();
                setNewProduct({
                    name: '',
                    price: '',
                    category: '',
                    description: '',
                    image: null
                });
            }
        } catch (error) {
            console.error('Failed to add product:', error);
        }
    };

    const handleUpdateProduct = async (id) => {
        try {
            const response = await fetch(`http://localhost:5000/api/products/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
                },
                body: JSON.stringify(editingProduct)
            });

            if (response.ok) {
                fetchProducts();
                setEditingProduct(null);
            }
        } catch (error) {
            console.error('Failed to update product:', error);
        }
    };

    const handleDeleteProduct = async (id) => {
        if (window.confirm('Are you sure you want to delete this product?')) {
            try {
                const response = await fetch(`http://localhost:5000/api/products/${id}`, {
                    method: 'DELETE',
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
                    }
                });

                if (response.ok) {
                    fetchProducts();
                }
            } catch (error) {
                console.error('Failed to delete product:', error);
            }
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('adminToken');
        navigate('/admin/login');
    };

    return (
        <div className="admin-dashboard">
            <header className="dashboard-header">
                <h1>Admin Dashboard</h1>
                <button onClick={handleLogout} className="logout-button">Logout</button>
            </header>

            <div className="dashboard-content">
                <section className="add-product-section">
                    <h2>Add New Product</h2>
                    <form onSubmit={handleAddProduct} className="product-form">
                        <input
                            type="text"
                            name="name"
                            placeholder="Product Name"
                            value={newProduct.name}
                            onChange={handleInputChange}
                            required
                        />
                        <input
                            type="number"
                            name="price"
                            placeholder="Price"
                            value={newProduct.price}
                            onChange={handleInputChange}
                            required
                        />
                        <select
                            name="category"
                            value={newProduct.category}
                            onChange={handleInputChange}
                            required
                        >
                            <option value="">Select Category</option>
                            <option value="compression">Compression</option>
                            <option value="oversized">Oversized</option>
                            <option value="regular">Regular</option>
                            <option value="tank-top">Tank Top</option>
                        </select>
                        <textarea
                            name="description"
                            placeholder="Product Description"
                            value={newProduct.description}
                            onChange={handleInputChange}
                            required
                        />
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                            required
                        />
                        <button type="submit">Add Product</button>
                    </form>
                </section>

                <section className="products-list-section">
                    <h2>Products List</h2>
                    <div className="products-grid">
                        {products.map(product => (
                            <div key={product._id} className="product-card">
                                <img src={product.imageUrl} alt={product.name} />
                                {editingProduct && editingProduct._id === product._id ? (
                                    <div className="edit-form">
                                        <input
                                            type="text"
                                            value={editingProduct.name}
                                            onChange={e => setEditingProduct({
                                                ...editingProduct,
                                                name: e.target.value
                                            })}
                                        />
                                        <input
                                            type="number"
                                            value={editingProduct.price}
                                            onChange={e => setEditingProduct({
                                                ...editingProduct,
                                                price: e.target.value
                                            })}
                                        />
                                        <button onClick={() => handleUpdateProduct(product._id)}>
                                            Save
                                        </button>
                                        <button onClick={() => setEditingProduct(null)}>
                                            Cancel
                                        </button>
                                    </div>
                                ) : (
                                    <div className="product-info">
                                        <h3>{product.name}</h3>
                                        <p>${product.price}</p>
                                        <div className="product-actions">
                                            <button onClick={() => setEditingProduct(product)}>
                                                Edit
                                            </button>
                                            <button onClick={() => handleDeleteProduct(product._id)}>
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}