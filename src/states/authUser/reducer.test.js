/**
 * test scenario for authUserReducer
 *
 * - authUserReducer function
 *  - should return the initial state when given by unknown action
 *  - should return the authUser when given by SET_AUTH_USER action
 *  - should return null when given by UNSET_AUTH_USER
 *
 */

import { describe, it, expect } from 'vitest';
import authUserReducer from './reducer';
import { ActionType } from './action';

describe('threadReducer function', () => {
  it('should return the initial state when given by unknown action', () => {
    // arrange
    const initialState = [];
    const action = { type: 'UNKNOWN' };

    // action
    const nextState = authUserReducer(initialState, action);

    // assert
    expect(nextState).toEqual(initialState);
  });

  it('should return the authUser when given by SET_AUTH_USER action', () => {
    // arrange
    const initialState = null;
    const action = {
      type: ActionType.SET_AUTH_USER,
      payload: {
        authUser: {
          id: 'user-1',
          email: 'user1@mail.com',
          name: 'user1',
          avatar: 'user1.jpg',
        },
      },
    };

    // action
    const nextState = authUserReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload.authUser);
  });

  it('should return null when given by UNSET_AUTH_USER', () => {
    // arrange
    const initialState = {
      authUser: {
        id: 'user-1',
        email: 'user1@mail.com',
        name: 'user1',
        avatar: 'user1.jpg',
      },
    };
    const action = {
      type: ActionType.UNSET_AUTH_USER,
      payload: {
        authUser: null,
      },
    };

    // action
    const nextState = authUserReducer(initialState, action);

    // assert
    expect(nextState).toEqual(null);
  });
});
