import { combineReducers } from 'redux';
import commentsReducer from 'reducers/comments';
import itemsReducer from 'reducers/items';


export default combineReducers({
	comments: commentsReducer,
	selectedItems: itemsReducer
});