import api from '../../utils/api';
import { showSuccessAlert, showErrorAlert } from '../../utils/alert';

const ActionType = {
  RECEIVE_THREADS: 'threads/RECEIVE',
  CREATE_THREAD: 'threads/CREATE',
  FILTER_THREADS: 'threads/FILTER',
};

function receiveThreadsActionCreator(threads) {
  return {
    type: ActionType.RECEIVE_THREADS,
    payload: {
      threads,
    },
  };
}

function createThreadActionCreator(thread) {
  return {
    type: ActionType.CREATE_THREAD,
    payload: {
      thread,
    },
  };
}

function asyncAddThread({ title, body, category }) {
  return async (dispatch) => {
    try {
      const thread = await api.postThread({ title, body, category });
      dispatch(createThreadActionCreator(thread));
      showSuccessAlert('Create thread success');
    } catch (error) {
      showErrorAlert(error.message);
    }
  };
}

export {
  ActionType, receiveThreadsActionCreator, createThreadActionCreator, asyncAddThread,
};
