/* eslint-disable react/require-default-props */
/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from './styled/Button';

export default function Navbar({ authUser, signOut }) {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div className="container">
        <Link className="navbar-brand text-warning" to="/">
          <img src="/vite.svg" alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
          X-Threads
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0" />
          <div className="d-flex">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-3">
              {authUser ? (
                <>
                  <li className="nav-item d-flex">
                    <img src={authUser.avatar} alt={authUser.name} width={35} />
                    <span className=" nav-link text-warning">{authUser.name}</span>
                  </li>
                  <li className="nav-item p-2">
                    <Button type="submit" variant="danger" size="sm" onClick={signOut}>
                      Sign out
                    </Button>
                  </li>
                </>
              ) : (
                <li className="nav-item">
                  <Link to="/login" className="text-decoration-none">
                    <Button variant="warning" size="sm">
                      Sign In
                    </Button>
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  authUser: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
  signOut: PropTypes.func.isRequired,
};
