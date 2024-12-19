import React from 'react';

const Product = ({ id, productId }) => {
    return (
        <div className="Make-product">
            <div id={id} className="product"></div>
            <div id={productId} className="id">id</div>
        </div>
    );
};

export default Product;