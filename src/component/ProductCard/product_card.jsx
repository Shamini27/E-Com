import React from 'react';
import Carousel from '../Caraousel/Carousel'; 
import './product_card.css';

const ProductCard = (props) => {
  const { name, type, price, availableItemCount, image } = props;

  return (
    <div className="product-card">
      {image && Array.isArray(image) && image.length > 0 && (
        <Carousel image={image} interval={3000} /> 
      )}
      
      <div className="product-details">
        <h2 className="product-name">{name}</h2>
        <p className="product-type">{type}</p>
        <p className="product-price">{price}</p>
        <p className="available-items">{availableItemCount}</p>
      </div>
    </div>
  );
};

export default ProductCard;
