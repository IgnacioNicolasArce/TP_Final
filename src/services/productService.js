// src/services/productService.js

import { collection, getDocs, doc, getDoc } from 'firebase/firestore';
import { db } from './firebase';

export const getProducts = async () => {
  try {
    const productsCol = collection(db, 'products');
    const productsSnapshot = await getDocs(productsCol);
    const productsList = productsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return productsList;
  } catch (err) {
    console.error('Error al obtener productos:', err);
    return null;
  }
};

export const getProductById = async (id) => {
  try {
    const productRef = doc(db, 'products', id);
    const productSnap = await getDoc(productRef);
    if (productSnap.exists()) {
      return { id: productSnap.id, ...productSnap.data() };
    } else {
      return null;
    }
  } catch (err) {
    console.error('Error al obtener el producto:', err);
    return null;
  }
};
