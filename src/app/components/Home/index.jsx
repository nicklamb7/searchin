import React from 'react';
import './style.scss';
import Featured from '../Featured';

function Home() {
  return (
    <div className="home">
      <div className="banner">
        <h1 className="banner__title">Find things faster</h1>
      </div>
      <div className="featured-products">
        <Featured name="Your design" />
        <Featured name="Recently added" />
        <Featured name="Popular" />
        <Featured name="Fashion" />
        <Featured name="Under £5" />
        <Featured name="Collectibles" />
        <Featured name="Books" />
        <Featured name="Furniture" />
      </div>
    </div>
  )
}

export default Home;
