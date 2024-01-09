/**
 * test scenario for categoriesReducer
 *
 * - categoriesReducer function
 *  - should return the initial state when given by unknown action
 *  - should return the values of categories when given by RECEIVE_CATEGORIES action
 *  - should return the selectedCategory when given by SET_CATEGORY action
 *  - should return null the selectedCategory when given by CLEAR_CATEGORY action
 *
 */

import { describe, it, expect } from 'vitest';
import categoriesReducer from './reducer';
import { ActionType } from './action';

describe('categoriesReducer function', () => {
  it('should return the initial state when given by unknown action', () => {
    // arrange
    const initialState = { values: [], selectedCategory: null };
    const action = { type: 'UNKNOWN' };

    // action
    const nextState = categoriesReducer(initialState, action);

    // assert
    expect(nextState).toEqual(initialState);
  });

  it('should return the categories when given by RECEIVE_CATEGORIES action', () => {
    // arrange
    const initialState = { values: [], selectedCategory: null };
    const action = {
      type: ActionType.RECEIVE_CATEGORIES,
      payload: {
        categories: ['category-1', 'category-2'],
      },
    };

    // action
    const nextState = categoriesReducer(initialState, action);
    expect(nextState.values).toEqual(action.payload.categories);
    expect(nextState.selectedCategory).toEqual(null);
  });

  it('should return the selectedCategory when given by SET_CATEGORY action', () => {
    // arrange
    const initialState = {
      values: ['category-1', 'category-2'],
      selectedCategory: null,
    };
    const action = {
      type: ActionType.SET_CATEGORY,
      payload: {
        selectedCategory: 'category-1',
      },
    };

    // action
    const nextState = categoriesReducer(initialState, action);
    expect(nextState.selectedCategory).toEqual('category-1');
  });

  it('should return null the selectedCategory when given by CLEAR_CATEGORY action', () => {
    // arrange
    const initialState = {
      values: ['category-1', 'category-2'],
      selectedCategory: 'category-1',
    };
    const action = {
      type: ActionType.CLEAR_CATEGORY,
      payload: {
        selectedCategory: null,
      },
    };

    // action
    const nextState = categoriesReducer(initialState, action);
    expect(nextState.selectedCategory).toEqual(null);
  });
});
