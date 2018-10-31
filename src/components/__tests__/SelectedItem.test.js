import React from 'react';
import { mount } from 'enzyme';

import SelectedItem from 'components/SelectedItem';
import Root from 'Root';

let wrapped;
let testSample;
let testIndex;

beforeEach(() => {
  testSample = {
    isPublished: 'true',
    productName: 'Apple iPhone X',
    productImage:
      'https://www.telstra.com.au/content/dam/tcom/personal/mobile-phones/product-catalogue/iphone-x/iphone-x-silver-grid.png',
    price: '299',
  };
  testIndex = 0;
  wrapped = mount(
    <Root>
      <SelectedItem productInfo={testSample} indexKey={testIndex} />
    </Root>,
  );
});

afterEach(() => {
  console.log('unmount');
  wrapped.unmount();
});

it('showing product name and remove button', () => {
  expect(wrapped.find('a').length).toEqual(1);
  expect(wrapped.find('a').text()).toEqual('Remove');
  expect(wrapped.find('.selectedProductName').length).toEqual(1);
  expect(wrapped.find('.selectedProductName').text()).toEqual('Apple iPhone X');
});
