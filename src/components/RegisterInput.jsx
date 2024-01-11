/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';
import Button from './styled/Button';

export default function RegisterInput({ register }) {
  const [name, onChangeName, setName] = useInput('');
  const [email, onChangeEmail, setEmail] = useInput('');
  const [password, onChangePassword, setPassword] = useInput('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    register({ name, email, password });
    setName('');
    setEmail('');
    setPassword('');
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
        <input type="password" className="form-control" id="password" placeholder="Password" required value={password} onChange={onChangePassword} autoComplete="off" />
        <label htmlFor="password">Password</label>
      </div>

      <div className="input-group my-2">
        <Button type="submit" variant="dark" size="sm">
          Register
        </Button>
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
