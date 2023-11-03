import React, { useState, useEffect } from 'react';

const Carousel = ({ image, interval }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % image.length);
    }, 4000);

    return () => {
      clearInterval(timer);
    };
  }, [image, interval]);

  return Array.isArray(image) && image.length >= 0 ? (
    <img src={image[currentIndex]} alt="Product" />
  ) : null;
};

export default Carousel;
