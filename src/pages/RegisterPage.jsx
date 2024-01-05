import React from 'react';
import { useDispatch } from 'react-redux';
import { asyncRegisterUser } from '../states/users/action';
import RegisterInput from '../components/RegisterInput';

export default function RegisterPage() {
  const dispatch = useDispatch();

  const onRegister = ({ name, email, password }) => {
    dispatch(asyncRegisterUser({ name, email, password }));
  };

  return (
    <section className="row justify-content-center">
      <div className="col-12 col-md-6 p-4">
        <h1 className="text-center my-2 my-md-5 fs-3">Sign Up for all answer!</h1>
        <RegisterInput register={onRegister} />
      </div>
    </section>
  );
}
