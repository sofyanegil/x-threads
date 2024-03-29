/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import CommentItem from './CommentItem';
import Title from './styled/Title';

export default function CommentsList({ comments, authUser, upVote, downVote, neutralVote }) {
  return (
    <div>
      <Title variant="subsubtitle">
        {'Comments '}
        {`(${comments.length})`}
      </Title>
      {comments.map((comment) => (
        <CommentItem key={comment.id} {...comment} authUser={authUser} upVote={upVote} downVote={downVote} neutralVote={neutralVote} />
      ))}
    </div>
  );
}

CommentsList.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
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
    })
  ).isRequired,
  authUser: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }),
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
  neutralVote: PropTypes.func.isRequired,
};
