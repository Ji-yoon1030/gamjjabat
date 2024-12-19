import React from 'react';
import comp from '../css/FrontGender.module.css';
import ImageGallery from './ImageGallery';
import { ProductListBottom, ProductListTop } from './Product';

const FrontGender: React.FC = () => {
  const images = [
    { src: 'image1.jpg', alt: 'Description of image 1' },
    { src: 'image2.jpg', alt: 'Description of image 2' },
    { src: 'image3.jpg', alt: 'Description of image 3' },
    // Add more images as needed
  ];

  return (
    <>
      <div>
        <div id={comp.head}></div>
        <div>
          <ImageGallery images={images}></ImageGallery>
          <ProductListTop></ProductListTop>
          <ProductListBottom></ProductListBottom>
          <ProductListBottom></ProductListBottom>
          <ProductListBottom></ProductListBottom>
          <ProductListBottom></ProductListBottom>
          <ProductListBottom></ProductListBottom>
          <ProductListBottom></ProductListBottom>
          <ProductListBottom></ProductListBottom>
        </div>
      </div>
    </>
  );
};
export default FrontGender;
