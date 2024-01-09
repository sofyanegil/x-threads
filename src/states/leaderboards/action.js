const ActionType = {
  RECEIVE_LEADERBOARDS: 'leaderboards/RECEIVE',
};

function receiveLeaderboardsActionCreator(leaderboards) {
  return {
    type: ActionType.RECEIVE_LEADERBOARDS,
    payload: {
      leaderboards,
    },
  };
}

export { ActionType, receiveLeaderboardsActionCreator };
