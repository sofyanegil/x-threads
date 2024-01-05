import React from 'react';
import { useDispatch } from 'react-redux';
import { asyncSetAuthUser } from '../states/authUser/action';
import LoginInput from '../components/LoginInput';

export default function LoginPage() {
  const dispatch = useDispatch();

  const onLogin = ({ email, password }) => {
    dispatch(asyncSetAuthUser({ email, password }));
  };

  return (
    <section className="row justify-content-center">
      <div className="col-12 col-md-6 p-4">
        <h1 className="text-center my-3 my-md-5 fs-3">Sign In for all question!</h1>
        <LoginInput login={onLogin} />
      </div>
    </section>
  );
}
