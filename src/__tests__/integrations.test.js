import React from 'react';
import { mount } from 'enzyme';
import Root from 'Root';
import App from '../components/App';
import { applyMiddleware, createStore } from 'redux';
import reduxPromise from 'redux-promise';
import reducers from '../reducers/index';

import moxios from 'moxios';
import SelectedItem from '../components/SelectedItem';
import Product from '../components/Product';
import { initialState } from 'components/productsData';

let wrapped;
const setupStore = createStore(
  reducers,
  { ...initialState },
  applyMiddleware(reduxPromise),
);
beforeEach(() => {
  moxios.install();
  moxios.stubRequest('http://api.myjson.com/bins/1de90a', {
    status: 200,
    response: initialState,
  });
  wrapped = mount(
    <Root store={setupStore}>
      <App />
    </Root>,
  );
});

afterEach(() => {
  wrapped.unmount();
  moxios.uninstall();
});

it('<App /> integration testing of entire shopping cart functions', () => {
  wrapped.update();
  expect(wrapped.find(Product).length).toEqual(5);
  expect(wrapped.find(SelectedItem).length).toEqual(0);
  wrapped
    .find('a')
    .first()
    .simulate('click');
  //   wrapped.update();
  expect(wrapped.find(SelectedItem).length).toEqual(1);
  expect(wrapped.find(Product).length).toEqual(4);
  expect(wrapped.find('.buttonRm').length).toEqual(1);
  wrapped
    .find('.buttonRm')
    .first()
    .simulate('click');
  expect(wrapped.find('.buttonRm').length).toEqual(0);
  expect(wrapped.find(Product).length).toEqual(5);
  expect(wrapped.find(SelectedItem).length).toEqual(0);
});
