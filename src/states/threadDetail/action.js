import { showLoading, hideLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import { showErrorAlert, showSuccessAlert } from '../../utils/alert';

const ActionType = {
  RECEIVE_THREAD_DETAIL: 'threadDetail/RECEIVE',
  CLEAR_THREAD_DETAIL: 'threadDetail/CLEAR',
  UP_VOTE_THREAD: 'threadDetail/UP_VOTE',
  DOWN_VOTE_THREAD: 'threadDetail/DOWN_VOTE',
  NEUTRAL_VOTE_THREAD: 'threadDetail/NEUTRAL_VOTE',
  UP_VOTE_COMMENT: 'threadDetail/UP_VOTE_COMMENT',
  DOWN_VOTE_COMMENT: 'threadDetail/DOWN_VOTE_COMMENT',
  NEUTRAL_VOTE_COMMENT: 'threadDetail/NEUTRAL_VOTE_COMMENT',
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
    dispatch(clearThreadDetailActionCreator());
    dispatch(showLoading());
    try {
      const threadDetail = await api.getDetailThread(threadId);
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

function upVoteThreadCreator(userId) {
  return {
    type: ActionType.UP_VOTE_THREAD,
    payload: {
      userId,
    },
  };
}

function downVoteThreadCreator(userId) {
  return {
    type: ActionType.DOWN_VOTE_THREAD,
    payload: {
      userId,
    },
  };
}

function neutralVoteThreadCreator(userId) {
  return {
    type: ActionType.NEUTRAL_VOTE_THREAD,
    payload: {
      userId,
    },
  };
}

function upVoteCommentCreator({ commentId, userId }) {
  return {
    type: ActionType.UP_VOTE_COMMENT,
    payload: {
      commentId,
      userId,
    },
  };
}

function downVoteCommentCreator({ commentId, userId }) {
  return {
    type: ActionType.DOWN_VOTE_COMMENT,
    payload: {
      commentId,
      userId,
    },
  };
}

function neutralVoteCommentCreator({ commentId, userId }) {
  return {
    type: ActionType.NEUTRAL_VOTE_COMMENT,
    payload: {
      commentId,
      userId,
    },
  };
}

function asyncUpVoteThread() {
  return async (dispatch, getState) => {
    const { authUser, threadDetail } = getState();
    dispatch(upVoteThreadCreator(authUser.id));
    dispatch(showLoading());

    try {
      await api.postUpVoteThread(threadDetail.id);
      showSuccessAlert('UpVoted');
    } catch (error) {
      showErrorAlert(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncDownVoteThread() {
  return async (dispatch, getState) => {
    const { authUser, threadDetail } = getState();
    dispatch(downVoteThreadCreator(authUser.id));
    dispatch(showLoading());

    try {
      await api.postDownVoteThread(threadDetail.id);
      showSuccessAlert('DownVoted');
    } catch (error) {
      showErrorAlert(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncNeutralVoteThread() {
  return async (dispatch, getState) => {
    const { authUser, threadDetail } = getState();
    dispatch(neutralVoteThreadCreator(authUser.id));
    dispatch(showLoading());

    try {
      await api.postNeutralizeVoteThread(threadDetail.id);
      showSuccessAlert('Deleted vote');
    } catch (error) {
      showErrorAlert(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncUpVoteComment(commentId) {
  return async (dispatch, getState) => {
    const { authUser, threadDetail } = getState();
    dispatch(upVoteCommentCreator({ commentId, userId: authUser.id }));
    dispatch(showLoading());

    try {
      await api.postUpVoteComment({ threadId: threadDetail.id, commentId });
      showSuccessAlert('UpVoted');
    } catch (error) {
      showErrorAlert(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncDownVoteComment(commentId) {
  return async (dispatch, getState) => {
    const { authUser, threadDetail } = getState();
    dispatch(downVoteCommentCreator({ commentId, userId: authUser.id }));
    dispatch(showLoading());

    try {
      await api.postDownVoteComment({ threadId: threadDetail.id, commentId });
      showSuccessAlert('DownVoted');
    } catch (error) {
      showErrorAlert(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncNeutralVoteComment(commentId) {
  return async (dispatch, getState) => {
    const { authUser, threadDetail } = getState();
    dispatch(neutralVoteCommentCreator({ commentId, userId: authUser.id }));
    dispatch(showLoading());

    try {
      await api.postNeutralizeVoteComment({ threadId: threadDetail.id, commentId });
      showSuccessAlert('Deleted vote');
    } catch (error) {
      showErrorAlert(error.message);
    }
    dispatch(hideLoading());
  };
}

export {
  ActionType,
  asyncReceiveThreadDetail,
  clearThreadDetailActionCreator,
  asyncAddComment,
  upVoteThreadCreator,
  downVoteThreadCreator,
  neutralVoteThreadCreator,
  asyncUpVoteThread,
  asyncDownVoteThread,
  asyncNeutralVoteThread,
  upVoteCommentCreator,
  downVoteCommentCreator,
  neutralVoteCommentCreator,
  asyncUpVoteComment,
  asyncDownVoteComment,
  asyncNeutralVoteComment,
};
