import React from 'react';
import { Link } from 'react-router-dom';
import { CiLinkedin } from 'react-icons/ci';
import { FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="d-flex flex-wrap justify-content-between align-items-center my-4 border-top container">
      <div className="col-md-4 d-flex align-items-center">
        <p className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
          <svg className="bi" width="30" height="24" />
        </p>
        <span className="mb-3 mb-md-0 text-muted">
          {new Date().getFullYear()}
          {' © '}
          X-Threads
        </span>
      </div>
      <ul className="col-md-4 justify-content-end list-unstyled d-flex mr-5">
        <Link to="https://www.linkedin.com/in/sofyanegi" target="_blank" className="ms-3 text-decoration-none">
          <CiLinkedin />
        </Link>
        <Link to="https://www.github.com/sofyanegil/" target="_blank" className="ms-3 text-decoration-none">
          <FaGithub />
        </Link>
      </ul>
    </footer>
  );
}
