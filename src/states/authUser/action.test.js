/**
 * test scenario for asyncSetUser thunk
 * - asyncSetUser thunk
 *  - should dispatch action correctly when data fetching success
 *  - should dispatch action and show error alert when data fetching failed
 */

import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { asyncSetAuthUser, setAuthUserActionCreator } from './action';
import api from '../../utils/api';

const fakeTokenResponse = 'fake-token';

const fakeAuthUserResponse = {
  id: 'user1',
  name: 'username1',
  email: 'user1@mail.com',
  avatar: 'user1.jpg',
};

const fakeErrorResponse = new Error('Email or password is incorrect');

describe('asyncSetAuthUser thunk', () => {
  beforeEach(() => {
    api._login = api.login;
    api._getOwnProfile = api.getOwnProfile;
  });

  afterEach(() => {
    api.login = api._login;
    api.getOwnProfile = api._getOwnProfile;

    delete api._login;
    delete api._getOwnProfile;
  });

  it('should dispatch action correctly when data fetching success', async () => {
    // arrange
    api.login = () => Promise.resolve(fakeTokenResponse);
    api.getOwnProfile = () => Promise.resolve(fakeAuthUserResponse);

    // mock dispatch
    const dispatch = vi.fn();

    // action
    await asyncSetAuthUser({
      email: fakeAuthUserResponse.email,
      password: 'password',
    })(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
    expect(dispatch).toHaveBeenCalledWith(setAuthUserActionCreator(fakeAuthUserResponse));
  });

  it('should dispatch action and show error alert when data fetching failed', async () => {
    // arrange
    api.login = () => Promise.reject(fakeErrorResponse);
    api.getOwnProfile = () => Promise.reject(fakeErrorResponse);

    // mock dispatch
    const dispatch = vi.fn();

    // action
    await asyncSetAuthUser({
      email: fakeAuthUserResponse.email,
      password: 'password',
    })(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
    expect(dispatch).not.toHaveBeenCalledWith(setAuthUserActionCreator(fakeAuthUserResponse));
  });
});
