// src/ImageCarousel.js
import React, { useState } from 'react';
import './App.css'

const images = [
    'https://picsum.photos/id/237/200/300',
    'https://picsum.photos/seed/picsum/200/300',
    'https://picsum.photos/200/300?grayscale',
    'https://picsum.photos/200/300?grayscale',
];

const ImageCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) => 
            (prevIndex - 1 + images.length) % images.length
        );
    };

    return (
        <div className="carousel">
            <button className="carousel-button" onClick={prevImage}>
                ❮
            </button>
            <img src={images[currentIndex]} alt="carousel" className="carousel-image" />
            <button className="carousel-button" onClick={nextImage}>
                ❯
            </button>
        </div>
    );
};

export default ImageCarousel;
