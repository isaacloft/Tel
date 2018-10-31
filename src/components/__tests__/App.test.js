import React from 'react';
import { shallow } from 'enzyme';

import App from 'components/App';
import ProductList from 'components/ProductList';
import SelectedList from 'components/SelectedList';

let wrapped;

beforeEach(() => {
  wrapped = shallow(<App />);
});

it('shows a list of available products', () => {
  expect(wrapped.find(ProductList).length).toEqual(1);
});

