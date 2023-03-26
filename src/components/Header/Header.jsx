import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <div className='header '>
            <img src={logo} alt="" />
            {/* a*4[href=$]{$} */}
            <div>
            <a href="/shop">Shop</a>
            <a href="/order">order</a>
            <a href="/login">login</a>
            <a href="/inventory">inventory</a>
            </div>
    
        </div>
    );
};

export default Header;