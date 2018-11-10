import {
  saveSelectedItem,
  removeSelectedItem,
  fetchAvailableItems,
  addAvailableItem,
  removeAvailableItem,
} from 'actions';
import {
  SAVE_SELECTED_ITEM,
  REMOVE_SELECTED_ITEM,
  ADD_AVAILABLE_ITEM,
  REMOVE_AVAILABLE_ITEM,
  FETCH_AVAILABLE_ITEMS,
} from 'actions/types';
import moxios from 'moxios';
import { TELSTRA_ITEMS } from '../../components/productsData';

describe('add selected item', () => {
  it('has the correct types', () => {
    const action = saveSelectedItem();

    expect(action.type).toEqual(SAVE_SELECTED_ITEM);
  });

  it('has the correct payload', () => {
    const action = saveSelectedItem('item');
    expect(action.payload).toEqual('item');
  });
});

describe('remove selected item', () => {
  it('has the correct types', () => {
    const action = removeSelectedItem();

    expect(action.type).toEqual(REMOVE_SELECTED_ITEM);
  });
  it('has the correct payload', () => {
    const action = removeSelectedItem('item');
    expect(action.payload).toEqual('item');
  });
});

describe('fetch available items', () => {
  moxios.install();
  moxios.stubRequest('http://api.myjson.com/bins/1de90a', {
    status: 200,
    response: TELSTRA_ITEMS,
  });

  it('has the correct types', () => {
    const action = fetchAvailableItems();
    expect(action.type).toEqual(FETCH_AVAILABLE_ITEMS);
    console.log('action');
  });
});

describe('addAvailableItem', () => {
  it('has the correct types', () => {
    const action = addAvailableItem();
    expect(action.type).toEqual(ADD_AVAILABLE_ITEM);
  });
  it('has the correct payload', () => {
    const action = addAvailableItem('item');
    expect(action.payload).toEqual('item');
  });
});

describe('removeAvailableItem', () => {
  it('has the correct types', () => {
    const action = removeAvailableItem();
    expect(action.type).toEqual(REMOVE_AVAILABLE_ITEM);
  });
  it('has the correct payload', () => {
    const action = removeAvailableItem('item');
    expect(action.payload).toEqual('item');
  });
});
