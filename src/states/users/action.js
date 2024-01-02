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
  return async () => {
    try {
      await api.register({ name, email, password });
      showSuccessAlert('User registered successfully');
    } catch (error) {
      showErrorAlert(error.message);
    }
  };
}

export { ActionType, receiveUsersActionCreator, asyncRegisterUser };
