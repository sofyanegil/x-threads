const ActionType = {
  RECEIVE_CATEGORIES: 'categories/RECEIVE',
  SET_CATEGORY: 'categories/SET',
};

function receiveCategoriesActionCreator(categories) {
  return {
    type: ActionType.RECEIVE_CATEGORIES,
    payload: {
      categories,
    },
  };
}

function setCategoryActionCreator(category) {
  return {
    type: ActionType.SET_CATEGORY,
    payload: {
      category,
    },
  };
}

function clearCategoryActionCreator() {
  return {
    type: ActionType.SET_CATEGORY,
    payload: {
      category: null,
    },
  };
}

export {
  ActionType, receiveCategoriesActionCreator, setCategoryActionCreator, clearCategoryActionCreator,
};
