import { showLoading, hideLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import { showErrorAlert, showSuccessAlert } from '../../utils/alert';

const ActionType = {
  RECEIVE_THREAD_DETAIL: 'threadDetail/RECEIVE',
  CLEAR_THREAD_DETAIL: 'threadDetail/CLEAR',
};

function receiveThreadDetailActionCreator(threadDetail) {
  return {
    type: ActionType.RECEIVE_THREAD_DETAIL,
    payload: {
      threadDetail,
    },
  };
}

function clearThreadDetailActionCreator() {
  return {
    type: ActionType.CLEAR_THREAD_DETAIL,
  };
}

function asyncReceiveThreadDetail(threadId) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const threadDetail = await api.getThreadDetail(threadId);
      dispatch(receiveThreadDetailActionCreator(threadDetail));
    } catch (error) {
      showErrorAlert(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncAddComment({ content, threadId }) {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      await api.postComment({ content, threadId });
      dispatch(asyncReceiveThreadDetail(threadId));
      showSuccessAlert('Comment added');
    } catch (error) {
      showErrorAlert(error.message);
    }
    dispatch(hideLoading());
  };
}

export {
  ActionType, asyncReceiveThreadDetail, clearThreadDetailActionCreator, asyncAddComment,
};
