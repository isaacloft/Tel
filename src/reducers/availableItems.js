import _ from 'lodash';
import {
  ADD_AVAILABLE_ITEM,
  REMOVE_AVAILABLE_ITEM,
  FETCH_AVAILABLE_ITEMS,
} from 'actions/types';
import { TELSTRA_ITEMS } from '../components/productsData';

const initialState = TELSTRA_ITEMS;

export default function(state = [], action) {
  switch (action.type) {
    case ADD_AVAILABLE_ITEM:
      return [...state, action.payload];
    case REMOVE_AVAILABLE_ITEM:
      let newArray = state.slice();
      newArray = _.filter(newArray, item => {
        return item.productName !== action.payload.productName;
      });
      return newArray;
    case FETCH_AVAILABLE_ITEMS:
      const items = action.payload.data ? action.payload.data : initialState;
      return [...state, ...items];
    default:
      return state;
  }
}
