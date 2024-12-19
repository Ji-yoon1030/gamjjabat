/*
import React from 'react';
import Main from '../main.module.css';

const ImageContainer = ({ images }) => {
    return (
        <div className={Main.image_container}>
            {images.map((image, index) => (
                <div key={index} id={image.id} className={Main.container_top}>
                    <div className={Main.image_box} style={{backgroundImage: `url(${image.url})`}}></div>
                </div>
            ))}
        </div>
    );
};

export default ImageContainer;*/

import React from 'react';
import Main from '../main.module.css';

const ImageContainer = ({ images }) => {
    return (
        <div className={Main.image_container}>
            {images.map((image, index) => (
                <div key={index} className={`${Main.container_top} ${Main[`box_${index}`]}`}>
                    <div
                        className={Main.image_box}
                        style={{ backgroundImage: `url(${image.url})` }}
                    >
                        <div className={Main.text_overlay}>
                            <p className={Main.hash_tags}>{image.hashTags}</p>
                            <h2 className={Main.title}>{image.title}</h2>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ImageContainer;
