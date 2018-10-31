import selectedItemsReducer from 'reducers/selectedItems';
import availableItemsReducer from 'reducers/availableItems';
import { TELSTRA_ITEMS } from '../../components/productsData';

import {
  SAVE_SELECTED_ITEM,
  REMOVE_SELECTED_ITEM,
  ADD_AVAILABLE_ITEM,
  REMOVE_AVAILABLE_ITEM,
} from 'actions/types';

const testSample = {
  isPublished: 'true',
  productName: 'Apple iPhone X',
  productImage:
    'https://www.telstra.com.au/content/dam/tcom/personal/mobile-phones/product-catalogue/iphone-x/iphone-x-silver-grid.png',
  price: '299',
};

it('selectedItemsReducer handles actions of type SAVE_SELECTED_ITEM and REMOVE_SELECTED_ITEM', () => {
  const addAction = {
    type: SAVE_SELECTED_ITEM,
    payload: testSample,
  };
  const prevState = selectedItemsReducer([], addAction);
  expect(prevState).toEqual([testSample]);

  const removeAction = {
    type: REMOVE_SELECTED_ITEM,
    payload: testSample,
  };
  const nextState = selectedItemsReducer([], removeAction);
  expect(nextState).toEqual([]);
});

it('selectedItemsReducer handles action with unknown type', () => {
  const newState = selectedItemsReducer([], { type: 'LDASD' });
  expect(newState).toEqual([]);
});

// **********

it('availableItemsReducer takes initial state', () => {
  const initialState = TELSTRA_ITEMS;
  const newState = availableItemsReducer([initialState], { type: 'LDASD' });
  expect(newState).toEqual([initialState]);
});

it('availableItemsReducer handles actions of type ADD_AVAILABLE_ITEM and REMOVE_AVAILABLE_ITEM', () => {
  const addAction = {
    type: ADD_AVAILABLE_ITEM,
    payload: testSample,
  };
  const prevState = availableItemsReducer([], addAction);
  expect(prevState).toEqual([testSample]);

  const removeAction = {
    type: REMOVE_AVAILABLE_ITEM,
    payload: testSample,
  };
  const nextState = availableItemsReducer([], removeAction);
  expect(nextState).toEqual([]);
});

it('availableItemsReducer handles action with unknown type', () => {
  const newState = availableItemsReducer([], { type: 'LDASD' });
  expect(newState).toEqual([]);
});
