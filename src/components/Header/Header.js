import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <h2>this is header</h2>
            <img className='logo' src={logo} alt="" />
       
       <nav>
           <a href="/shop"> shop</a>
       <a href="/orders">orders</a>
       <a href="/inventory ">inventory</a>
       </nav>
        </div>
    );
};

export default Header;