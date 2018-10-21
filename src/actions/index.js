import axios from 'axios';
import { SAVE_COMMENT, FETCH_COMMENTS, SAVE_ITEM, REMOVE_ITEM } from 'actions/types';

export function saveComment(comment) {
	return {
		type: SAVE_COMMENT,
		payload: comment,
	};
}

export function saveItem(item) {
	return { type: SAVE_ITEM, payload: item };
}

export function removeItem(item) {
	return { type: REMOVE_ITEM, payload: item };
}

export function fetchComments() {
	const response = axios.get('http://jsonplaceholder.typicode.com/comments');

	return {
		type: FETCH_COMMENTS,
		payload: response,
	};
}
