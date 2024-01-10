/**
 * test scenario for asyncAddThread thunk
 * - asyncAddThread thunk
 *  - should dispatch action correctly when data fetching success
 *  - should dispatch action and show error alert when data fetching failed
 */

import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { asyncAddThread, createThreadActionCreator } from './action';
import api from '../../utils/api';

const fakeThreadResponse = {
  id: 1,
  title: 'title1',
  body: 'body1',
  category: 'category1',
  createdAt: '2021-01-01T00:00:00.000Z',
  ownerId: 'user1',
  totalComments: 1,
  upVotesBy: [],
  downVotesBy: [],
};

const fakeErrorResponse = new Error('Something went wrong');

describe('asyncAddThread thunk', () => {
  beforeEach(() => {
    api._postThread = api.postThread;
  });

  afterEach(() => {
    api.postThread = api._postThread;

    delete api._postThread;
  });

  it('should dispatch action correctly when data fetching success', async () => {
    // arrange
    api.postThread = () => Promise.resolve(fakeThreadResponse);

    // mock dispatch
    const dispatch = vi.fn();

    // action
    await asyncAddThread({
      title: fakeThreadResponse.title,
      body: fakeThreadResponse.body,
      category: fakeThreadResponse.category,
    })(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
    expect(dispatch).toHaveBeenCalledWith(createThreadActionCreator(fakeThreadResponse));
  });

  it('should dispatch action and show error alert when data fetching failed', async () => {
    // arrange
    api.postThread = () => Promise.reject(fakeErrorResponse);

    // mock dispatch
    const dispatch = vi.fn();

    // action
    await asyncAddThread({
      title: fakeThreadResponse.title,
      body: fakeThreadResponse.body,
      category: fakeThreadResponse.category,
    })(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
    expect(dispatch).not.toHaveBeenCalledWith(createThreadActionCreator(fakeThreadResponse));
  });
});
