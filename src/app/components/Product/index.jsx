import React from 'react';
import './style.scss';

function Product(props) {
  return (
    <li className="product">
      <div className="product__image">
      </div>
      <p className="product__title">{props.title}</p>
    </li>
  )
}

export default Product;
