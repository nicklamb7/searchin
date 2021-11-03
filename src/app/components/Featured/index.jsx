import React from 'react';
import './style.scss';
import Product from '../Product/index';

function Featured(props) {
  return (
    <div className="featured">
      <h2 className="featured__title">{props.name}</h2>
      <div className="featured__products">
        <ul>
          <Product title="ISO this X"/>
          <Product title="ISO this X"/>
          <Product title="ISO this X"/>
          <Product title="ISO this X"/>
          <Product title="ISO this X"/>
        </ul>
      </div>
    </div>
  )
}

export default Featured;
