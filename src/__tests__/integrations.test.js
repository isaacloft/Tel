import React from 'react';
import { mount } from 'enzyme';
import Root from 'Root';
import App from '../components/App';

it('can fetch a list of available products and display them', () => {
  const wrapped = mount(
    <Root>
      <App />
    </Root>,
  );

  expect(wrapped.find('a').length).toEqual(7);
});
