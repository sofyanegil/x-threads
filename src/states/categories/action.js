const ActionType = {
  RECEIVE_CATEGORIES: 'categories/RECEIVE',
  SET_CATEGORY: 'categories/SET',
  CLEAR_CATEGORY: 'categories/CLEAR',
};

function receiveCategoriesActionCreator(categories) {
  return {
    type: ActionType.RECEIVE_CATEGORIES,
    payload: {
      categories,
    },
  };
}

function setCategoryActionCreator(selectedCategory) {
  return {
    type: ActionType.SET_CATEGORY,
    payload: {
      selectedCategory,
    },
  };
}

function clearCategoryActionCreator() {
  return {
    type: ActionType.CLEAR_CATEGORY,
    payload: {
      selectedCategory: null,
    },
  };
}

export { ActionType, receiveCategoriesActionCreator, setCategoryActionCreator, clearCategoryActionCreator };
