import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
import Rating from 'react-rating';

const Product = (props) => {
    // console.log(props.product)
    const {name,img,price,seller,stock} =props.product;
   const element= <FontAwesomeIcon icon={faCartShopping} />
    return (
        <div className='product'>
          <div>
          <img src={img} alt="" />
          </div>
          <div>
          <h2 className='product-name'>{name}</h2>
            <p><small>by: {seller}</small></p>
            <p>Price: {price}</p>
            <p><small>only{stock} </small></p>
            <Rating></Rating>
            <br />
            <button onClick={() =>props.handelAddToCart(props.product)}
            className='regular-button'>
              {element} add to card</button>

          </div>

        </div>
    );
};

export default Product;