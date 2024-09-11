// src/components/ProductItem.jsx
import React from 'react';

const ProductItem = ({ product }) => {
  return (
    <div className='col-md-6 col-lg-4 col-xl-3'>
        <div class="rounded position-relative fruite-item border border-secondary">
        <div class="fruite-img">
      <img src={product.thumbnail} alt={product.title} className='img-fluid w-100 rounded-top'/>
      </div>
      <div class="p-4  border-top-0 rounded-bottom">
      <h4>{product.title}</h4>
      <p className="multi-line-ellipsis" style={{ maxHeight: '50px' }}>
  {product.description}
</p>
      <p><strong>Price:</strong> ${product.price}</p>
      <p><strong>Rating:</strong> {product.rating} ⭐</p>
      <p><strong>Stock:</strong> {product.stock}</p>
      <p><strong>Category:</strong> {product.category}</p>
      </div>
    </div>
    </div>
  );
};

export default ProductItem;
