import React from 'react';
import LoadingBar from 'react-redux-loading-bar';

export default function Loading() {
  return (
    <LoadingBar
      className="bg-warning"
      style={{
        height: '3px',
        position: 'absolute',
        top: '0',
        zIndex: '9999',
      }}
    />
  );
}
