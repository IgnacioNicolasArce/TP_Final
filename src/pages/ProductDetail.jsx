import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../services/productService';
import '../styles/common.css';
import '../styles/products.css';

const ProductDetail = () => {
  const { id } = useParams(); // id viene como string
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const foundProduct = await getProductById(id);
        setProduct(foundProduct);
      } catch (error) {
        console.error('Error al cargar el producto:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <div className="loading">Cargando...</div>;
  }

  if (!product) {
    return <div className="loading">Producto no encontrado</div>;
  }

  return (
    <div className="container">
      <div className="product-card">
        <div className="product-detail-container">
          <div className="product-detail-image-container">
            <img
              className="product-detail-image"
              src={product.image}
              alt={product.title}
            />
          </div>
          <div className="product-detail-info">
            <h1 className="product-name">{product.title}</h1>
            <p className="product-description">{product.description}</p>
            <div className="product-detail-price">${product.final_price}</div>
            <button className="button">Comprar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
