/**
 * test scenario for threadsReducer
 *
 * - threadsReducer function
 *  - should return the initial state when given by unknown action
 *  - should return the threads when given by RECEIVE_THREADS action
 *  - should return the threads with new thread when given by ADD_THREAD action
 *
 */

import { describe, it, expect } from 'vitest';
import threadsReducer from './reducer';
import { ActionType } from './action';

describe('threadReducer function', () => {
  it('should return the initial state when given by unknown action', () => {
    // arrange
    const initialState = [];
    const action = { type: 'UNKNOWN' };

    // action
    const nextState = threadsReducer(initialState, action);

    // assert
    expect(nextState).toEqual(initialState);
  });

  it('should return the threads when given by RECEIVE_THREADS action', () => {
    // arrange
    const initialState = [];
    const action = {
      type: ActionType.RECEIVE_THREADS,
      payload: {
        threads: [
          {
            id: 'thread-1',
            title: 'Thread 1',
            body: 'Thread 1 body',
            category: 'category-1',
            createdAt: '2024-01-09T00:00:00.000Z',
            ownerId: 'user-1',
            totalComments: 0,
            upVotesBy: [],
            downVotesBy: [],
          },
          {
            id: 'thread-2',
            title: 'Thread 2',
            body: 'Thread 2 body',
            category: 'category-2',
            createdAt: '2024-01-09T00:00:00.000Z',
            ownerId: 'user-2',
            totalComments: 0,
            upVotesBy: [],
            downVotesBy: [],
          },
        ],
      },
    };

    // action
    const nextState = threadsReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload.threads);
  });

  it('should return the threads with new thread when given by ADD_THREAD action', () => {
    // arrange
    const initialState = [
      {
        id: 'thread-1',
        title: 'Thread 1',
        body: 'Thread 1 body',
        category: 'category-1',
        createdAt: '2024-01-09T00:00:00.000Z',
        ownerId: 'user-1',
        totalComments: 0,
        upVotesBy: [],
        downVotesBy: [],
      },
    ];

    const action = {
      type: ActionType.CREATE_THREAD,
      payload: {
        thread: {
          id: 'thread-2',
          title: 'Thread 2',
          body: 'Thread 2 body',
          category: 'category-2',
          createdAt: '2024-01-09T00:00:00.000Z',
          ownerId: 'user-2',
          totalComments: 0,
          upVotesBy: [],
          downVotesBy: [],
        },
      },
    };

    // action
    const nextState = threadsReducer(initialState, action);

    // assert
    expect(nextState).toEqual([action.payload.thread, ...initialState]);
  });
});
