/**
 * test scenario for threadDetailReducer
 *
 * - threadDetailReducer function
 *  - should return the initial state when given by unknown action
 *  - should return the values of threadDetail when given by RECEIVE_THREAD_DETAIL action
 *  - should return null when given by CLEAR_THREAD_DETAIL action
 *  - should return the values of threadDetail when given by UP_VOTE_THREAD action
 *  - should return the values of threadDetail when given by DOWN_VOTE_THREAD action
 *  - should return the values of threadDetail when given by NEUTRAL_VOTE_THREAD action
 *  - should return the values of threadDetail when given by UP_VOTE_COMMENT action
 *  - should return the values of threadDetail when given by DOWN_VOTE_COMMENT action
 *  - should return the values of threadDetail when given by NEUTRAL_VOTE_COMMENT action
 *
 */

import { describe, it, expect } from 'vitest';
import threadDetailReducer from './reducer';
import { ActionType } from './action';

describe('threadDetailReducer function', () => {
  it('should return the initial state when given by unknown action', () => {
    // arrange
    const initialState = {};
    const action = { type: 'UNKNOWN' };

    // action
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState).toEqual(initialState);
  });

  it('should return the threadDetail when given by RECEIVE_THREAD_DETAIL action', () => {
    // arrange
    const initialState = {};
    const action = {
      type: ActionType.RECEIVE_THREAD_DETAIL,
      payload: {
        threadDetail: {
          id: 'thread-1',
          title: 'thread-1',
          body: 'body-1',
          createdAt: '2021-01-01',
          owner: {
            id: 'user-1',
            name: 'user-1',
            avatar: 'image-1.png',
          },
          category: 'category-1',
          comments: [],
          upVotesBy: [],
          downVotesBy: [],
        },
      },
    };

    // action
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload.threadDetail);
  });

  it('should return null when given by CLEAR_THREAD_DETAIL action', () => {
    // arrange
    const initialState = {
      id: 'thread-1',
      title: 'thread-1',
      body: 'body-1',
      createdAt: '2021-01-01',
      owner: {
        id: 'user-1',
        name: 'user-1',
        avatar: 'image-1.png',
      },
      category: 'category-1',
      comments: [],
      upVotesBy: [],
      downVotesBy: [],
    };
    const action = {
      type: ActionType.CLEAR_THREAD_DETAIL,
    };

    // action
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState).toEqual(null);
  });

  it('should return the threadDetail when given by UP_VOTE_THREAD action', () => {
    // arrange
    const initialState = {
      id: 'thread-1',
      title: 'thread-1',
      body: 'body-1',
      createdAt: '2021-01-01',
      owner: {
        id: 'user-1',
        name: 'user-1',
        avatar: 'image-1.png',
      },
      category: 'category-1',
      comments: [],
      upVotesBy: [],
      downVotesBy: [],
    };
    const action = {
      type: ActionType.UP_VOTE_THREAD,
      payload: {
        userId: 'user-1',
      },
    };

    // action
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState).toEqual({
      ...initialState,
      upVotesBy: [action.payload.userId],
    });
  });

  it('should return the threadDetail when given by DOWN_VOTE_THREAD action', () => {
    // arrange
    const initialState = {
      id: 'thread-1',
      title: 'thread-1',
      body: 'body-1',
      createdAt: '2021-01-01',
      owner: {
        id: 'user-1',
        name: 'user-1',
        avatar: 'image-1.png',
      },
      category: 'category-1',
      comments: [],
      upVotesBy: [],
      downVotesBy: [],
    };
    const action = {
      type: ActionType.DOWN_VOTE_THREAD,
      payload: {
        userId: 'user-1',
      },
    };

    // action
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState).toEqual({
      ...initialState,
      downVotesBy: [action.payload.userId],
    });
  });

  it('should return the threadDetail when given by NEUTRAL_VOTE_THREAD action', () => {
    // arrange
    const initialState = {
      id: 'thread-1',
      title: 'thread-1',
      body: 'body-1',
      createdAt: '2021-01-01',
      owner: {
        id: 'user-1',
        name: 'user-1',
        avatar: 'image-1.png',
      },
      category: 'category-1',
      comments: [],
      upVotesBy: ['user-1'],
      downVotesBy: ['user-2'],
    };
    const action = {
      type: ActionType.NEUTRAL_VOTE_THREAD,
      payload: {
        userId: 'user-1',
      },
    };

    // action
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState).toEqual({
      ...initialState,
      upVotesBy: [],
      downVotesBy: ['user-2'],
    });
  });

  it('should return the threadDetail when given by UP_VOTE_COMMENT action', () => {
    // arrange
    const initialState = {
      id: 'thread-1',
      title: 'thread-1',
      body: 'body-1',
      createdAt: '2021-01-01',
      owner: {
        id: 'user-1',
        name: 'user-1',
        avatar: 'image-1.png',
      },
      category: 'category-1',
      comments: [
        {
          id: 'comment-1',
          content: 'comment-1',
          createdAt: '2021-01-01',
          owner: {
            id: 'user-1',
            name: 'user-1',
            avatar: 'image-1.png',
          },
          upVotesBy: [],
          downVotesBy: [],
        },
      ],
      upVotesBy: [],
      downVotesBy: [],
    };
    const action = {
      type: ActionType.UP_VOTE_COMMENT,
      payload: {
        commentId: 'comment-1',
        userId: 'user-1',
      },
    };

    // action
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState).toEqual({
      ...initialState,
      comments: [
        {
          ...initialState.comments[0],
          upVotesBy: [action.payload.userId],
        },
      ],
    });
  });

  it('should return the threadDetail when given by DOWN_VOTE_COMMENT action', () => {
    // arrange
    const initialState = {
      id: 'thread-1',
      title: 'thread-1',
      body: 'body-1',
      createdAt: '2021-01-01',
      owner: {
        id: 'user-1',
        name: 'user-1',
        avatar: 'image-1.png',
      },
      category: 'category-1',
      comments: [
        {
          id: 'comment-1',
          content: 'comment-1',
          createdAt: '2021-01-01',
          owner: {
            id: 'user-1',
            name: 'user-1',
            avatar: 'image-1.png',
          },
          upVotesBy: [],
          downVotesBy: [],
        },
      ],
      upVotesBy: [],
      downVotesBy: [],
    };
    const action = {
      type: ActionType.DOWN_VOTE_COMMENT,
      payload: {
        commentId: 'comment-1',
        userId: 'user-1',
      },
    };

    // action
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState).toEqual({
      ...initialState,
      comments: [
        {
          ...initialState.comments[0],
          downVotesBy: [action.payload.userId],
        },
      ],
    });
  });

  it('should return the threadDetail when given by NEUTRAL_VOTE_COMMENT action', () => {
    // arrange
    const initialState = {
      id: 'thread-1',
      title: 'thread-1',
      body: 'body-1',
      createdAt: '2021-01-01',
      owner: {
        id: 'user-1',
        name: 'user-1',
        avatar: 'image-1.png',
      },
      category: 'category-1',
      comments: [
        {
          id: 'comment-1',
          content: 'comment-1',
          createdAt: '2021-01-01',
          owner: {
            id: 'user-1',
            name: 'user-1',
            avatar: 'image-1.png',
          },
          upVotesBy: ['user-1'],
          downVotesBy: ['user-2'],
        },
      ],
      upVotesBy: [],
      downVotesBy: [],
    };
    const action = {
      type: ActionType.NEUTRAL_VOTE_COMMENT,
      payload: {
        commentId: 'comment-1',
        userId: 'user-1',
      },
    };

    // action
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState).toEqual({
      ...initialState,
      comments: [
        {
          ...initialState.comments[0],
          upVotesBy: [],
          downVotesBy: ['user-2'],
        },
      ],
    });
  });
});
