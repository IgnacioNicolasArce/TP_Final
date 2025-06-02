// src/pages/DetalleProducto.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../services/productService';
import './DetalleProducto.css';

const DetalleProducto = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productData = await getProductById(id);
        if (productData) {
          setProduct(productData);
        } else {
          setErrorMessage('Producto no encontrado');
        }
      } catch (err) {
        setErrorMessage('Hubo un error al obtener el producto');
      }
      setLoading(false);
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <div className="product-detail-container"><h2>Cargando...</h2></div>;
  }

  if (errorMessage) {
    return <div className="product-detail-container"><h2>{errorMessage}</h2></div>;
  }

  return (
    <div className="product-detail-container">
      <img src={product.img} alt={product.title} className="product-image" />
      <div className="product-info">
        <h1 className="product-title">{product.title}</h1>
        <p className="product-description">{product.description}</p>
        <p className="original-price">${product.real_price}</p>
        <span className="product-price">${product.final_price}</span>
        <p className="discount">{product.discount}% de descuento</p>
      </div>
    </div>
  );
};

export default DetalleProducto;
