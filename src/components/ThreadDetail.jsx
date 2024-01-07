/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import parser from 'html-react-parser';
import { BiDownvote, BiSolidDownvote, BiUpvote, BiSolidUpvote } from 'react-icons/bi';
import { relativeFormattedDate } from '../utils/formatter';

export default function ThreadDetail({ title, body, category, upVotesBy, downVotesBy, createdAt, owner, authUser, upVote, downVote, neutralVote }) {
  const isThreadUpVoted = upVotesBy.includes(authUser?.id);
  const isThreadDownVoted = downVotesBy.includes(authUser?.id);

  const handleUpVote = () => {
    if (isThreadUpVoted) {
      neutralVote();
    } else {
      upVote();
    }
  };

  const handleDownVote = () => {
    if (isThreadDownVoted) {
      neutralVote();
    } else {
      downVote();
    }
  };

  return (
    <div className="card mb-3">
      <div className="card-header">
        <div className="d-flex gap-2 align-items-center">
          <img src={owner.avatar} alt={owner.avatar} width={30} className="img-thumbnail" />
          <p className="card-subtitle text-muted text-small">{`${owner.name} | ${relativeFormattedDate(createdAt)}`}</p>
          <span className="badge bg-dark rounded-pill fw-light ms-auto">{category}</span>
        </div>
      </div>
      <div className="card-body">
        <h1 className="card-title fs-5">{title}</h1>
        <div className="card-text fs-6">{parser(body)}</div>
      </div>
      <div className="card-footer">
        <div className="d-flex gap-2 align-items-center">
          <button type="button" className={`btn btn-outline-success btn-sm rounded-pill ${isThreadUpVoted ? 'active' : ''}`} onClick={handleUpVote}>
            {isThreadUpVoted ? <BiSolidUpvote /> : <BiUpvote />}
            {` Upvote (${upVotesBy.length})`}
          </button>
          <button type="button" className={`btn btn-outline-danger btn-sm rounded-pill ${isThreadDownVoted ? 'active' : ''}`} onClick={handleDownVote}>
            {isThreadDownVoted ? <BiSolidDownvote /> : <BiDownvote />}
            {` Downvote (${downVotesBy.length})`}
          </button>
        </div>
      </div>
    </div>
  );
}

ThreadDetail.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  owner: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  }).isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  authUser: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }),
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
  neutralVote: PropTypes.func.isRequired,
};
