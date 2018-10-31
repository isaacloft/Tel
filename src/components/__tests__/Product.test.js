import React from 'react';
import { mount } from 'enzyme';

import Product from 'components/Product';
import Root from 'Root';

let wrapped;
let testSample;

beforeEach(() => {
  testSample = {
    isPublished: 'true',
    productName: 'Apple iPhone X',
    productImage:
      'https://www.telstra.com.au/content/dam/tcom/personal/mobile-phones/product-catalogue/iphone-x/iphone-x-silver-grid.png',
    price: '299',
  };
  wrapped = mount(
    <Root>
      <Product item={testSample} />
    </Root>,
  );
});

afterEach(() => {
  console.log('unmount');
  wrapped.unmount();
});

it('has an image, anchor button, product name and price', () => {
  expect(wrapped.find('a').length).toEqual(1);
  expect(wrapped.find('img').length).toEqual(1);
  expect(wrapped.find('.productName').length).toEqual(1);
  expect(wrapped.find('.productPrice').length).toEqual(1);
});

// describe('tests for the textarea', () => {
//   beforeEach(() => {
//     wrapped.find('textarea').simulate('change', {
//       target: { value: 'new comment' },
//     });
//     wrapped.update();
//   });

//   it('has a textarea and users can type in', () => {
//     expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
//   });

// it('after clicking on the anchor tag, the product will be removed ', () => {
//   wrapped.find('a').simulate('click');
//   wrapped.update();
//   expect(wrapped.find('img').length).toEqual(0);
// });
