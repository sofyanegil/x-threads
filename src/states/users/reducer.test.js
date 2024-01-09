/**
 * test scenario for usersReducer
 *
 * - usersReducer function
 *  - should return the initial state when given by unknown action
 *  - should return the users when given by RECEIVE_USERS action
 *
 */

import { describe, it, expect } from 'vitest';
import usersReducer from './reducer';
import { ActionType } from './action';

describe('usersReducer function', () => {
  it('should return the initial state when given by unknown action', () => {
    // arrange
    const initialState = [];
    const action = { type: 'UNKNOWN' };

    // action
    const nextState = usersReducer(initialState, action);

    // assert
    expect(nextState).toEqual(initialState);
  });

  it('should return the users when given by RECEIVE_USERS action', () => {
    // arrange
    const initialState = [];
    const action = {
      type: ActionType.RECEIVE_USERS,
      payload: {
        users: [
          {
            id: 'user-1',
            name: 'user-1',
            avatar: 'image-1.png',
          },
          {
            id: 'user-2',
            name: 'user-2',
            avatar: 'image-2.png',
          },
        ],
      },
    };

    // action
    const nextState = usersReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload.users);
  });
});
