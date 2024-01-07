/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import parser from 'html-react-parser';
import { BiDownvote, BiSolidDownvote, BiUpvote, BiSolidUpvote } from 'react-icons/bi';

import { relativeFormattedDate } from '../utils/formatter';

export default function CommentItem({ id, content, createdAt, owner, upVotesBy, downVotesBy, authUser, upVote, downVote, neutralVote }) {
  const isCommentUpVoted = upVotesBy.includes(authUser?.id);
  const isCommentDownVoted = downVotesBy.includes(authUser?.id);

  const handleUpVote = () => {
    if (isCommentUpVoted) {
      neutralVote(id);
    } else {
      upVote(id);
    }
  };

  const handleDownVote = () => {
    if (isCommentDownVoted) {
      neutralVote(id);
    } else {
      downVote(id);
    }
  };

  return (
    <div className="d-flex my-3 col-12">
      <div className="chat-bubble me-2">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <div className="d-flex align-items-center">
              <img src={owner.avatar} alt={owner.name} className="rounded-circle me-2" width="40" height="40" />
              <p className="mb-0 fs-6">{owner.name}</p>
            </div>
          </div>
          <p className="mb-0 fs-6 ms-5">{relativeFormattedDate(createdAt)}</p>
        </div>
        <p className="mb-0 mt-2">{parser(content)}</p>
        <div className="d-flex gap-2 align-items-center">
          <button type="button" className={`btn btn-outline-success btn-sm rounded-pill ${isCommentUpVoted ? 'active' : ''}`} onClick={handleUpVote}>
            {isCommentUpVoted ? <BiSolidUpvote /> : <BiUpvote />}
            {` Upvote (${upVotesBy.length})`}
          </button>
          <button type="button" className={`btn btn-outline-danger btn-sm rounded-pill ${isCommentDownVoted ? 'active' : ''}`} onClick={handleDownVote}>
            {isCommentDownVoted ? <BiSolidDownvote /> : <BiDownvote />}
            {` Downvote (${downVotesBy.length})`}
          </button>
        </div>
      </div>
    </div>
  );
}

CommentItem.propTypes = {
  id: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  owner: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  }).isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
  neutralVote: PropTypes.func.isRequired,
  authUser: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }),
};
