import React from 'react';
import PropTypes from 'prop-types';
import ThreadItem from './ThreadItem';
import Title from './styled/Title';

export default function ThreadsList({ threads }) {
  return (
    <div className="card">
      <Title variant="title" className="text-center card-header">
        Threads
      </Title>
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
        avatar: PropTypes.string.isRequired,
      }).isRequired,
    })
  ).isRequired,
};
