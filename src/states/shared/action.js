import { showLoading, hideLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import { receiveThreadsActionCreator } from '../threads/action';
import { receiveUsersActionCreator } from '../users/action';
import { receiveLeaderboardsActionCreator } from '../leaderboards/action';
import { showErrorAlert } from '../../utils/alert';
import { receiveCategoriesActionCreator } from '../categories/action';

function asyncHomePageData() {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const threads = await api.getAllThreads();
      const users = await api.getAllUsers();
      const leaderboards = await api.getLeaderboards();
      const categories = [...new Set(threads.map((thread) => thread.category))];

      dispatch(receiveThreadsActionCreator(threads));
      dispatch(receiveUsersActionCreator(users));
      dispatch(receiveLeaderboardsActionCreator(leaderboards));
      dispatch(receiveCategoriesActionCreator(categories));
    } catch (error) {
      showErrorAlert(error.message);
    }
    dispatch(hideLoading());
  };
}

export { asyncHomePageData };
