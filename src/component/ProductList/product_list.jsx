import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import ProductCard from '../ProductCard/product_card';
import './product_list.css';
import productData from '../productdetails.json';

const ProductList = () => {
  const initialItems = productData.slice(0, 8);
  const [items, setItems] = useState(initialItems);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  const loadMore = () => {
    if (loading) return; 
    setLoading(true);
    const currentLength = items.length;
    if (currentLength >= productData.length) {
      setHasMore(false);
      setLoading(false);
      return;
    }

    
    const loadingTime = 2000; 

    setTimeout(() => {
      
      const newItem = productData[currentLength];
      setItems([...items, newItem]);
      setLoading(false);
    }, loadingTime);
  };

  return (
    <InfiniteScroll
      dataLength={items.length}
      next={loadMore}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
    >
      <div className="product-list">
        {items.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            name={product.name}
            type={product.category}
            price={product.Price}
            availableItemCount={product.stock}
          />
        ))}
      </div>
    </InfiniteScroll>
  );
};

export default ProductList;
