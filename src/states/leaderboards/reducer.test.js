/**
 * test scenario for leaderboardsReducer
 *
 * - leaderboardsReducer function
 *  - should return the initial state when given by unknown action
 *  - should return the values of leaderboards when given by RECEIVE_LEADERBOARDS action
 *
 */

import { describe, it, expect } from 'vitest';
import leaderboardsReducer from './reducer';
import { ActionType } from './action';

describe('leaderboardsReducer function', () => {
  it('should return the initial state when given by unknown action', () => {
    // arrange
    const initialState = [];
    const action = { type: 'UNKNOWN' };

    // action
    const nextState = leaderboardsReducer(initialState, action);

    // assert
    expect(nextState).toEqual(initialState);
  });

  it('should return the leaderboards when given by RECEIVE_LEADERBOARDS action', () => {
    // arrange
    const initialState = [];
    const action = {
      type: ActionType.RECEIVE_LEADERBOARDS,
      payload: {
        leaderboards: [
          {
            user: {
              id: 'user-1',
              name: 'user-1',
              email: 'user1@mail.com',
              avatar: 'image1.png',
            },
            score: 10,
          },
          {
            user: {
              id: 'user-2',
              name: 'user-2',
              email: 'user2@mail.com',
              avatar: 'image2.png',
            },
            score: 20,
          },
        ],
      },
    };

    // action
    const nextState = leaderboardsReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload.leaderboards);
  });
});
