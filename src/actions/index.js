import {
  SAVE_SELECTED_ITEM,
  REMOVE_SELECTED_ITEM,
  ADD_AVAILABLE_ITEM,
  REMOVE_AVAILABLE_ITEM,
} from 'actions/types';

export function saveSelectedItem(item) {
  return { type: SAVE_SELECTED_ITEM, payload: item };
}

export function removeSelectedItem(item) {
  return { type: REMOVE_SELECTED_ITEM, payload: item };
}

export function addAvailableItem(item) {
  return { type: ADD_AVAILABLE_ITEM, payload: item };
}

export function removeAvailableItem(item) {
  return { type: REMOVE_AVAILABLE_ITEM, payload: item };
}
