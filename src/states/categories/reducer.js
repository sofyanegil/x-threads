import { ActionType } from './action';

function categoriesReducer(categories = [], action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_CATEGORIES:
      return action.payload.categories;
    case ActionType.SET_CATEGORY:
      return {
        ...categories,
        selectedCategory: action.payload.category,
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
