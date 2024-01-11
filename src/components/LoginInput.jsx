/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';
import Button from './styled/Button';

export default function LoginInput({ login }) {
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');

  const handleSubmit = (event) => {
    event.preventDefault();
    login({ email, password });
  };

  return (
    <form className="card p-3" onSubmit={handleSubmit}>
      <div className="form-floating mb-2">
        <input type="email" className="form-control" id="email" placeholder="Email" required value={email} onChange={onChangeEmail} />
        <label htmlFor="email">Email</label>
      </div>

      <div className="form-floating mb-2">
        <input type="password" className="form-control" id="password" placeholder="Password" required value={password} onChange={onChangePassword} autoComplete="off" />
        <label htmlFor="password">Password</label>
      </div>

      <div className="input-group my-2">
        <Button type="submit" size="sm">
          Login
        </Button>
      </div>

      <p className="text-muted">
        Don&apos;t have an account?&nbsp;
        <Link to="/register" className="text-decoration-none">
          Register
        </Link>
      </p>
    </form>
  );
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};
