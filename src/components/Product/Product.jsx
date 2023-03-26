import React from 'react';
import './Product.css'

const Product = (props) => {
    // console.log(props);
    // console.log(props.product);
    const {img,price,name,seller,quantity}=props.product
    return (
        <div className='product'>
            <div >
            <img src={img}alt="" />
            <p>name:{name}</p>
            <p>Price:{price}</p>
            
        </div>
        
       
        <button className='btn-cart'>add to card</button>
        </div>
    );
};

export default Product;