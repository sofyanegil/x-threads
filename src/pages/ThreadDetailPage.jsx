/* eslint-disable max-len */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { asyncReceiveThreadDetail, asyncAddComment, asyncUpVoteThread, asyncDownVoteThread, asyncNeutralVoteThread, asyncUpVoteComment, asyncNeutralVoteComment, asyncDownVoteComment } from '../states/threadDetail/action';
import ThreadDetail from '../components/ThreadDetail';
import CommentInput from '../components/CommentInput';
import CommentsList from '../components/CommentsList';
import { showErrorAlert } from '../utils/alert';

export default function ThreadDetailPage() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { threadDetail = null, authUser } = useSelector((states) => states);

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(id));
  }, [id, dispatch]);

  const onAddComment = (content) => {
    dispatch(asyncAddComment({ content, threadId: id }));
  };

  const onUpVoteThread = () => {
    if (authUser) {
      return dispatch(asyncUpVoteThread());
    }
    return showErrorAlert('You must login to upvote');
  };

  const onDownVoteThread = () => {
    if (authUser) {
      return dispatch(asyncDownVoteThread());
    }
    return showErrorAlert('You must login to downvote');
  };

  const onNeutralVoteThread = () => {
    if (authUser) {
      return dispatch(asyncNeutralVoteThread());
    }
    return showErrorAlert('You must login to delete vote');
  };

  const onUpVoteComment = (commentId) => {
    if (authUser) {
      return dispatch(asyncUpVoteComment(commentId));
    }
    return showErrorAlert('You must login to upvote');
  };

  const onDownVoteComment = (commentId) => {
    if (authUser) {
      return dispatch(asyncDownVoteComment(commentId));
    }
    return showErrorAlert('You must login to downvote');
  };

  const onNeutralVoteComment = (commentId) => {
    if (authUser) {
      return dispatch(asyncNeutralVoteComment(commentId));
    }
    return showErrorAlert('You must login to delete vote');
  };

  if (!threadDetail) {
    return null;
  }

  return (
    <section className="col-12 col-md-8 mx-auto mt-2">
      <ThreadDetail {...threadDetail} authUser={authUser} upVote={onUpVoteThread} downVote={onDownVoteThread} neutralVote={onNeutralVoteThread} />
      <hr />
      <CommentInput comment={onAddComment} authUser={authUser} />
      <hr />
      <CommentsList comments={threadDetail.comments} authUser={authUser} upVote={onUpVoteComment} downVote={onDownVoteComment} neutralVote={onNeutralVoteComment} />
    </section>
  );
}
