import React from 'react';
import PropTypes from 'prop-types';
import Title from './styled/Title';

export default function LeaderboardsList({ leaderboards }) {
  return (
    <div className="card">
      <Title variant="subtitle" className="text-center card-header">
        Leaderboards
      </Title>
      <ul className="list-group list-group-flush">
        {leaderboards.map((leaderboard) => (
          <li key={leaderboard.user.id} className="list-group-item d-flex justify-content-between align-items-center">
            <img src={leaderboard.user.avatar} alt={leaderboard.user.name} className="rounded-circle" style={{ width: '30px' }} />
            {leaderboard.user.name}
            <span className="badge bg-primary rounded-pill">{leaderboard.score}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

LeaderboardsList.propTypes = {
  leaderboards: PropTypes.arrayOf(
    PropTypes.shape({
      user: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
      }),
      score: PropTypes.number.isRequired,
    })
  ).isRequired,
};
