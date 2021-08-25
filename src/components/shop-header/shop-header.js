import React from 'react';
import './shop-header.css';
import { Link } from 'react-router-dom';

const ShopHeader = () => {
  return (
    <header className="shop-header row">
      <Link to="/">
        <div className="logo text-dark">Market</div>
      </Link>
      <Link to="/cart">
        <div className="shopping-cart">
          <i className="cart-icon fa fa-shopping-cart" />
          123 items (500)
        </div>
      </Link>
    </header>
  );
};

export default ShopHeader;
