/**
 * test scenario for asyncHomePageData thunk
 * - asyncHomePageData thunk
 *  - should dispatch action correctly when data fetching success
 *  - should dispatch action and show error alert when data fetching failed
 */

import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { asyncHomePageData } from './action';
import { receiveThreadsActionCreator } from '../threads/action';
import { receiveUsersActionCreator } from '../users/action';
import { receiveLeaderboardsActionCreator } from '../leaderboards/action';
import { receiveCategoriesActionCreator } from '../categories/action';
import api from '../../utils/api';

const fakeThreadsResponse = [
  {
    id: 1,
    title: 'title1',
    body: 'body1',
    category: 'category1',
    createdAt: '2021-01-01T00:00:00.000Z',
    ownerId: 'user1',
    totalComments: 1,
    upVotesBy: [],
    downVotesBy: [],
  },
];

const fakeUsersResponse = [
  {
    id: 'user1',
    name: 'username1',
    email: 'user1@mail.com',
    avatar: 'user1.jpg',
  },
  {
    id: 'user2',
    name: 'username2',
    email: 'user2@mail.com',
    avatar: 'user2.jpg',
  },
];

const fakeLeaderboardsResponse = [
  {
    user: {
      id: 'user1',
      name: 'username1',
      email: 'user1@mail.com',
      avatar: 'user1.jpg',
    },
    score: 100,
  },
  {
    user: {
      id: 'user2',
      name: 'username2',
      email: 'user2@mail.com',
      avatar: 'user2.jpg',
    },
    score: 200,
  },
];

const fakeCategoriesResponse = ['category1'];

const fakeErrorResponse = new Error('Fake error response');

describe('asyncHomePageData thunk', () => {
  beforeEach(() => {
    api._getAllUsers = api.getAllUsers;
    api._getAllThreads = api.getAllThreads;
    api._getLeaderboards = api.getLeaderboards;
  });

  afterEach(() => {
    api.getAllUsers = api._getAllUsers;
    api.getAllThreads = api._getAllThreads;
    api.getLeaderboards = api._getLeaderboards;

    delete api._getAllUsers;
    delete api._getAllThreads;
    delete api._getLeaderboards;
  });

  it('should dispatch action correctly when data fetching success', async () => {
    // arrange
    // stub
    api.getAllUsers = () => Promise.resolve(fakeUsersResponse);
    api.getAllThreads = () => Promise.resolve(fakeThreadsResponse);
    api.getLeaderboards = () => Promise.resolve(fakeLeaderboardsResponse);

    // mock dispatch
    const dispatch = vi.fn();

    // action
    await asyncHomePageData()(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(receiveThreadsActionCreator(fakeThreadsResponse));
    expect(dispatch).toHaveBeenCalledWith(receiveUsersActionCreator(fakeUsersResponse));
    expect(dispatch).toHaveBeenCalledWith(receiveLeaderboardsActionCreator(fakeLeaderboardsResponse));
    expect(dispatch).toHaveBeenCalledWith(receiveCategoriesActionCreator(fakeCategoriesResponse));
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('should dispatch action and show error alert when data fetching failed', async () => {
    // arrange
    // stub
    api.getAllUsers = () => Promise.reject(fakeErrorResponse);
    api.getAllThreads = () => Promise.reject(fakeErrorResponse);
    api.getLeaderboards = () => Promise.reject(fakeErrorResponse);

    // mock dispatch
    const dispatch = vi.fn();

    // action
    await asyncHomePageData()(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
    expect(dispatch).not.toHaveBeenCalledWith(receiveThreadsActionCreator(fakeThreadsResponse));
    expect(dispatch).not.toHaveBeenCalledWith(receiveUsersActionCreator(fakeUsersResponse));
    expect(dispatch).not.toHaveBeenCalledWith(receiveLeaderboardsActionCreator(fakeLeaderboardsResponse));
    expect(dispatch).not.toHaveBeenCalledWith(receiveCategoriesActionCreator(fakeCategoriesResponse));
    // pengujian gagal
  });
});
