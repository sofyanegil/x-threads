import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegFaceSadTear } from 'react-icons/fa6';

export default function NotFoundPage() {
  return (
    <div className="container d-flex flex-column align-items-center py-5 text-center">
      <h1 className="display-5">404 Not Found</h1>
      <FaRegFaceSadTear className="img-fluid" style={{ width: '150px' }} />
      <p className="fs-5 my-3">Oops! The page you are looking for might be in another castle.</p>
      <p className="text-small">Go back home and try again.</p>
      <Link to="/" className="btn btn-dark btn-sm">
        Go Home
      </Link>
    </div>
  );
}
