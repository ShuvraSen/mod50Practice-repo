import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
        const [products,setProducts]=useState([])
        // products or jekono name dewa jabe.
        // state ke set korbe tai setProduct or set diye jekono name diya jabe.
        console.log(products);
            useEffect(()=>{
                fetch ('products.json')
                .then(res=>res.json())
                .then(data=>setProducts(data))
                // jehetu console nai tai kisu dekhabe na. eijonno 20line number e ta dite hobe
            },[])

    return (
       
            <div className='shop-container' >
                <div className="product-container">
                    {/* <h1>individual shopping cart:{products.length}</h1>
                    <Product></Product> */}
                    {
                        products.map(product=> <Product
                        key={product.id}
                        product={product}
                        ></Product>)
                        // products.map(product=> console.log(product))--eivabe dekhale khali browser console e dekhabe. but ui te dekhate chaile component dekhate hobe,.

                        // r je {} er vitore map kora hoise eita dynamic vabe dekhanor jonno
                    }
                   
                </div>
                
                
                <div className='cart-container'>
                    <p>order summary</p>
                </div>
            
            </div>
        
                

        
    );
};

export default Shop;