import React from 'react';
import Product from './Product';

const ProductContainer = ({ products, className }) => {
    return (
        <div className={`product-container ${className}`}>
            {products.map((product) => (
                <Product
                    key={product.id}
                    id={product.id}
                    productId={product.productId}
                />
            ))}
        </div>
    );
};

export default ProductContainer;
