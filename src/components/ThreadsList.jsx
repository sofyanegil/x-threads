import React from 'react';
import PropTypes from 'prop-types';
import ThreadItem from './ThreadItem';

export default function ThreadsList({ threads }) {
  return (
    <div className="card">
      <div className="card-header">
        <h1 className="text-center fs-3">Threads</h1>
      </div>
      <div className="card-body">
        {threads.map((thread) => (
          <ThreadItem key={thread.id} {...thread} />
        ))}
      </div>
    </div>
  );
}

ThreadsList.propTypes = {
  threads: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
      totalComments: PropTypes.number.isRequired,
      user: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
      }).isRequired,
    })
  ).isRequired,
};
