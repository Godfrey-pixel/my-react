import React from 'react';
import './FeaturedSection.css'; // Import the CSS file for the FeaturedSection component

const FeaturedSection = () => {
  const products = [
    {
      id: 1,
      name: 'E-Commerce Website',
      image: '../src/assets/e-commerce.svg',
      price: 'R5,000.00',
    },
    {
      id: 2,
      name: 'Search Engine Optimization',
      image: '../src/assets/seo.jpg',
      price: 'R29.99',
    },
    {
      id: 3,
      name: 'Product 3',
      image: 'path/to/product3.jpg',
      price: 'R39.99',
    },
    // Add more products as needed
  ];

  return (
    <section className="featured-section">
      <h2 className="section-title">Featured Products</h2>
      <div className="product-list">
        {products.map(product => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">{product.price}</p>
            <button className="add-to-cart-button">Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedSection;
