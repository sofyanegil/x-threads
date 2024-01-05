import { ActionType } from './action';

function categoriesReducer(categories = { values: [], selectedCategory: null }, action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_CATEGORIES:
      return {
        values: action.payload.categories,
        selectedCategory: null,
      };
    case ActionType.SET_CATEGORY:
      return {
        ...categories,
        selectedCategory: action.payload.selectedCategory,
      };
    case ActionType.CLEAR_CATEGORY:
      return {
        ...categories,
        selectedCategory: null,
      };
    default:
      return categories;
  }
}

export default categoriesReducer;
