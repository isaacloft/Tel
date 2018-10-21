import _ from 'lodash';
import { SAVE_ITEM, REMOVE_ITEM } from 'actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case SAVE_ITEM:
      return [...state, action.payload];
    case REMOVE_ITEM:
      console.log(state);
      const newArray = state.slice();
      newArray.splice(action.payload, 1);
      return newArray;

    // return [
    //   ...state,
    //   [
    //     ...state.selectItems.splice(0, action.payload),
    //     ...state.selectItems.splice(1),
    //   ],
    // ];

    default:
      return state;
  }
}
