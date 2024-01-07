/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import useInput from '../hooks/useInput';
import { showErrorAlert } from '../utils/alert';

export default function CommentInput({ comment, authUser }) {
  const [content, , setContent] = useInput('');

  const onChangeBodyHandler = (event) => {
    setContent(event.target.innerHTML);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (content === '') {
      showErrorAlert('Comment cannot be empty');
      return;
    }
    comment(content);
    document.getElementById('content').innerHTML = '';
    setContent('');
  };

  return (
    <div>
      <h5 className="card-title fs-5">Add Comment</h5>
      {authUser ? (
        <form className="card-body" onSubmit={handleSubmit}>
          <div className="mb-3">
            <div className="form-control text-small" id="content" contentEditable style={{ minHeight: '15vh' }} onInput={onChangeBodyHandler} />
          </div>

          <div className="input-group my-2">
            <button type="submit" className="btn btn-success btn-sm rounded">
              Comment
            </button>
          </div>
        </form>
      ) : (
        <p className="text-muted fs-6">
          Please&nbsp;
          <Link to="/login" className="text-decoration-none">
            Sign In
          </Link>
          &nbsp;to comment
        </p>
      )}
    </div>
  );
}

CommentInput.propTypes = {
  comment: PropTypes.func.isRequired,
  authUser: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }),
};
