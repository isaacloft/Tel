import React from 'react';
import { mount } from 'enzyme';
import App from 'components/App';
import Root from 'Root';
import moxios from 'moxios';
import ProductList from 'components/ProductList';
import SelectedList from 'components/SelectedList';
import { initialState } from 'components/productsData';

let wrapped;

beforeEach(() => {
  moxios.install();
  moxios.stubRequest('http://api.myjson.com/bins/1de90a', {
    status: 200,
    response: initialState,
  });
  wrapped = mount(
    <Root>
      <App />
    </Root>,
  );
});

afterEach(() => {
  wrapped.unmount();
  moxios.uninstall();
});

it('shows a list of available products', done => {
  moxios.wait(() => {
    wrapped.update();
    expect(wrapped.find(ProductList).length).toEqual(1);
    done();
  });
});

it('shows a selected list', () => {
  expect(wrapped.find(SelectedList).length).toEqual(1);
});

it('show a one header section', () => {
  expect(wrapped.find('.header').length).toEqual(1);
});

it('show a one footer section', () => {
  expect(wrapped.find('footer').length).toEqual(1);
});
