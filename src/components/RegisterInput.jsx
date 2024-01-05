/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

export default function RegisterInput({ register }) {
  const [name, onChangeName] = useInput('');
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission
    register({ name, email, password });
  };

  return (
    <form className="card p-3" onSubmit={handleSubmit}>
      <div className="form-floating mb-2">
        <input type="text" className="form-control" id="name" placeholder="Name" required value={name} onChange={onChangeName} />
        <label htmlFor="name">Name</label>
      </div>

      <div className="form-floating mb-2">
        <input type="email" className="form-control" id="email" placeholder="Email" required value={email} onChange={onChangeEmail} />
        <label htmlFor="email">Email</label>
      </div>

      <div className="form-floating mb-2">
        <input type="password" className="form-control" id="password" placeholder="Password" required value={password} onChange={onChangePassword} />
        <label htmlFor="password">Password</label>
      </div>

      <div className="input-group my-2">
        <button type="submit" className="btn btn-success rounded">
          Register
        </button>
      </div>

      <p className="text-muted">
        Have an account?&nbsp;
        <Link to="/login" className="text-decoration-none">
          Login
        </Link>
      </p>
    </form>
  );
}

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};
