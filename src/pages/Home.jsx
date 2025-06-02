import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getProducts } from '../services/productService';
import '../styles/common.css';
import '../styles/products.css';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error('Error al cargar los productos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div className="loading">Cargando...</div>;
  }

  return (
    <div className="container">
      <h1 className="product-title">Productos Destacados</h1>
      <div className="product-grid product-grid-cols-1">
        {products && products.map((product) => (
          <div key={product.id} className="product-card">
            <img
              className="product-image"
              src={product.image}
              alt={product.title}
            />
            <div className="product-info">
              <h2 className="product-name">{product.title}</h2>
              <p className="product-description">{product.description}</p>
              <span className="original-price">${product.real_price}</span>
              <span className="discount">{product.discount}% de descuento</span>
              <span className="product-prices">${product.final_price}</span>
                <Link to={`/product/${product.id}`} className="button-details">
                  Ver Detalles
                </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home; 