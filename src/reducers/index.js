import { combineReducers } from 'redux';
import selectedItemsReducer from 'reducers/selectedItems';
import availableItemsReducer from 'reducers/availableItems';


export default combineReducers({
  selectedItems: selectedItemsReducer,
  availableItems: availableItemsReducer,
});
