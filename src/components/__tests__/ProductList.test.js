import React from 'react';
import { mount } from 'enzyme';

import ProductList from 'components/ProductList';
import Product from 'components/Product';

import Root from 'Root';

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <ProductList />
    </Root>,
  );
});

afterEach(() => {
  console.log('unmount');
  wrapped.unmount();
});

it('has five published products from the mocked data', () => {
  expect(wrapped.find(Product).length).toEqual(5);
  console.log(wrapped.find(Product).length);
});
