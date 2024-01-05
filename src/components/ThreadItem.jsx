import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import parser from 'html-react-parser';
import { relativeFormattedDate, truncateString } from '../utils/formatter';

export default function ThreadItem({ id, title, body, category, totalComments, user, createdAt }) {
  return (
    <div className="card mb-3 shadow-sm" key={id}>
      <div className="card-header">
        <div className="d-flex gap-2 align-items-center">
          <img src={user.avatar} alt={user.avatar} width={30} className="img-thumbnail" />
          <p className="card-subtitle text-muted text-small">{`${user.name} | ${relativeFormattedDate(createdAt)}`}</p>
          <span className="badge bg-dark rounded-pill fw-light">{category}</span>
        </div>
      </div>
      <div className="card-body">
        <Link to={`/threads/${id}`} className="card-link text-decoration-none">
          <p className="fw-bold link-dark">{title}</p>
        </Link>
        <div className="card-text text-small">{parser(truncateString(body, 150))}</div>
        <small className="text-muted card-text">{`${totalComments} comments`}</small>
      </div>
    </div>
  );
}

ThreadItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  totalComments: PropTypes.number.isRequired,
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  }).isRequired,
  createdAt: PropTypes.string.isRequired,
};
