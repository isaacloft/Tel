import React from 'react';
import { mount } from 'enzyme';
import Root from 'Root';
import App from '../components/App';
import SelectedList from '../components/SelectedList';
import ProductList from '../components/ProductList';
import Product from '../components/Product';

it('can fetch a list of available products and display them', () => {
  const wrapped = mount(
    <Root>
      <App />
    </Root>,
  );

  //Displaying five default available products
  expect(wrapped.find(Product).length).toEqual(5);
  expect(wrapped.find(ProductList).length).toEqual(1);
  expect(wrapped.find(SelectedList).length).toEqual(1);
});
