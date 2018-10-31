import { SAVE_SELECTED_ITEM, REMOVE_SELECTED_ITEM } from 'actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case SAVE_SELECTED_ITEM:
      return [...state, action.payload];
    case REMOVE_SELECTED_ITEM:
      const newArray = state.slice();
      newArray.splice(action.payload, 1);
      return newArray;
    default:
      return state;
  }
}
