import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import { showErrorAlert, showSuccessAlert } from '../../utils/alert';

const ActionType = {
  RECEIVE_USERS: 'users/RECEIVE',
};

function receiveUsersActionCreator(users) {
  return {
    type: ActionType.RECEIVE_USERS,
    payload: {
      users,
    },
  };
}

function asyncRegisterUser({ name, email, password }) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      await api.register({ name, email, password });
      showSuccessAlert('User registered successfully, please login');
    } catch (error) {
      showErrorAlert(error.message);
    }
    dispatch(hideLoading());
  };
}

export { ActionType, receiveUsersActionCreator, asyncRegisterUser };
