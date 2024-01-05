import { configureStore } from '@reduxjs/toolkit';
import { loadingBarReducer } from 'react-redux-loading-bar';
import authUserReducer from './authUser/reducer';
import isPreloadReducer from './isPreload/reducer';
import leaderboardsReducer from './leaderboards/reducer';
import usersReducer from './users/reducer';
import threadsReducer from './threads/reducer';
import threadDetailReducer from './threadDetail/reducer';
import categoriesReducer from './categories/reducer';

const store = configureStore({
  reducer: {
    authUser: authUserReducer,
    isPreload: isPreloadReducer,
    leaderboards: leaderboardsReducer,
    users: usersReducer,
    threads: threadsReducer,
    threadDetail: threadDetailReducer,
    categories: categoriesReducer,
    loadingBar: loadingBarReducer,
  },
});

export default store;
