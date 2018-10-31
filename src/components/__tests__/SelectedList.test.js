import React from 'react';
import { mount } from 'enzyme';

import SelectedList from 'components/SelectedList';
import SelectedItem from 'components/SelectedItem';

import Root from 'Root';


it('showing empty cart', () => {
  const wrapped = mount(
    <Root>
      <SelectedList />
    </Root>,
  );
  expect(wrapped.find('div').text()).toEqual('Your shopping cart is empty.');
});
