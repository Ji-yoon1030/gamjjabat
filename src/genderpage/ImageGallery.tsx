import React from 'react';
import gallery from '../css/Gallery.module.css';

type ImageProps = {
  src: string;
  alt?: string;
};

const ImageGallery: React.FC<{ images: ImageProps[] }> = ({ images }) => {
  return (
    <div className={gallery.image_gallery}>
      {images.map((image, index) => (
        <img
          key={index}
          src={image.src}
          alt={image.alt || 'Shopping mall item'}
        />
      ))}
    </div>
  );
};

export default ImageGallery;
