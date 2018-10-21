import React from 'react';
import ProductList from 'components/ProductList';
import SelectedList from 'components/SelectedList';

export default () => {
  return (
    <div className="mainContainer">
      <div className="mainDisplay">
        <div className="itemsContainer">
          <ProductList />
        </div>
        <div className="cartContainer">
          <div className="cartContent">
            <div style={{ fontWeight: 600, marginBottom: '20px' }}>
              Shopping Cart
            </div>
            <SelectedList />
          </div>
        </div>
      </div>
    </div>
  );
};
