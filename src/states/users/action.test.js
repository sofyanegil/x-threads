/**
 * test scenario for asyncRegisterUser thunk
 * - asyncRegisterUser thunk
 *  - should dispatch action correctly when data fetching success
 *  - should dispatch action and show error alert when data fetching failed
 */

import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import { asyncRegisterUser } from './action';

describe('asyncRegisterUser thunk', () => {
  beforeEach(() => {
    api._register = api.register;
  });

  afterEach(() => {
    api.register = api._register;

    delete api._register;
  });

  it('should dispatch action correctly when data fetching success', async () => {
    // arrange
    api.register = vi.fn().mockResolvedValueOnce();

    // mock dispatch
    const dispatch = vi.fn();

    // action
    await asyncRegisterUser({
      name: 'user1',
      email: 'user1@mail.com',
      password: 'password',
    })(dispatch);

    // assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
    expect(api.register).toHaveBeenCalledWith({
      name: 'user1',
      email: 'user1@mail.com',
      password: 'password',
    });
  });
});
