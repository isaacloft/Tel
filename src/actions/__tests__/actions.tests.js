import {
  saveSelectedItem,
  removeSelectedItem,
  addAvailableItem,
  removeAvailableItem,
} from 'actions';
import {
  SAVE_SELECTED_ITEM,
  REMOVE_SELECTED_ITEM,
  ADD_AVAILABLE_ITEM,
  REMOVE_AVAILABLE_ITEM,
} from 'actions/types';

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
