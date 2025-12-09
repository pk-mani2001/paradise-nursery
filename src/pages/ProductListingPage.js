import React from 'react';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import './ProductListingPage.css';

const ProductListingPage = () => {
  const categories = ['Air Purifying', 'Aromatic', 'Decorative'];

  return (
    <div className="product-listing-page">
      <Header />
      <div className="products-container">
        {categories.map(category => {
          const categoryProducts = products.filter(p => p.category === category);
          return (
            <div key={category} className="category-section">
              <h2 className="category-title">{category} Plants</h2>
              <div className="products-grid">
                {categoryProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductListingPage;
