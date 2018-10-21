import _ from 'lodash';
import { ADD_AVAILABLE_ITEM, REMOVE_AVAILABLE_ITEM } from 'actions/types';
import { TELSTRA_ITEMS } from '../components/productsData';

const initialState = TELSTRA_ITEMS;

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_AVAILABLE_ITEM:
      return [...state, action.payload];
    case REMOVE_AVAILABLE_ITEM:
      let newArray = state.slice();
      newArray = _.filter(newArray, (item) => {
        return item.productName !== action.payload.productName;
      });
      return newArray;
    default:
      return state;
  }
}
