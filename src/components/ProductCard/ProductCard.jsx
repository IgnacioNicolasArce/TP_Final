// /components/ProductCard/ProductCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ id, img, title, final_price, real_price, discount }) => {
  return (
    <div className="product-card">
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <p>${final_price}</p>
      <p>Precio original: ${real_price}</p>
      <p>Descuento: {discount}%</p>
      <Link to={`/productos/${id}`}>Ver detalles</Link>
    </div>
  );
};

export default ProductCard;
