// src/components/ProductList/ProductList.jsx
import React, { useEffect, useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import { getProducts } from '../../services/productService'; // Asegúrate de que esté correctamente importado
import './ProductList.css'; // Importamos el archivo CSS

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getProductsList = async () => {
    setLoading(true);
    const products_list_response = await getProducts();
    if (products_list_response) {
      setProducts(products_list_response);
    } else {
      setError('Error al obtener productos');
    }
    setLoading(false);
  };

  useEffect(() => {
    getProductsList();
  }, []);

  let content;
  if (loading) {
    content = <h2 className="loading">Cargando...</h2>;
  } else {
    if (error) {
      content = <h2 className="error">{error}</h2>;
    } else {
      content = (
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard {...product} key={product.id} />
          ))}
        </div>
      );
    }
  }

  return <div className="product-list-container">{content}</div>;
};

export default ProductList;
