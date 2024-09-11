// src/components/ProductList.jsx
import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../api/api';
import ProductItem from './productitem';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const productsData = await fetchProducts();
      setProducts(productsData);
    };

    getProducts();
  }, []);

  return (
    <div className="product-list">
        <div class="container-fluid fruite py-5">
        <div class="container py-5">
        <div class="tab-class text-center">
        <div id="tab-1"  class="tab-pane fade show p-0 active">
        <div class="row g-4">
                                <div class="col-lg-12">
                                    <div class="row g-4">
      {products.length > 0 ? (
        products.map(product => <ProductItem key={product.id} product={product} />)
      ) : (
        <p>Loading...</p>
      )}
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
    </div>
  );
};

export default ProductList;
