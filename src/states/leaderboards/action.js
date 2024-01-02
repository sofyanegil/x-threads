const ActionType = {
  RECEIVE_LEDERBOARDS: 'leaderboards/RECEIVE',
};

function receiveLeaderboardsActionCreator(leaderboards) {
  return {
    type: ActionType.RECEIVE_LEDERBOARDS,
    payload: {
      leaderboards,
    },
  };
}

export { ActionType, receiveLeaderboardsActionCreator };
