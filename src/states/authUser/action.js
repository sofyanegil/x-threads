import { showLoading, hideLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import { showSuccessAlert, showErrorAlert } from '../../utils/alert';

const ActionType = {
  SET_AUTH_USER: 'authUser/SET',
  UNSET_AUTH_USER: 'authUser/UNSET',
};

function setAuthUserActionCreator(authUser) {
  return {
    type: ActionType.SET_AUTH_USER,
    payload: {
      authUser,
    },
  };
}

function unsetAuthUserActionCreator() {
  return {
    type: ActionType.UNSET_AUTH_USER,
    payload: {
      authUser: null,
    },
  };
}

function asyncSetAuthUser({ email, password }) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const token = await api.login({ email, password });
      api.putAccessToken(token);
      const authUser = await api.getOwnProfile();
      dispatch(setAuthUserActionCreator(authUser));
      showSuccessAlert('Login success');
    } catch (error) {
      showErrorAlert(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncUnsetAuthUser() {
  return (dispatch) => {
    dispatch(unsetAuthUserActionCreator());
    api.putAccessToken('');
    showSuccessAlert('Logout success');
  };
}

export {
  ActionType, setAuthUserActionCreator, unsetAuthUserActionCreator, asyncSetAuthUser, asyncUnsetAuthUser,
};
