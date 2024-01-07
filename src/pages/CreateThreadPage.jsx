import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { asyncAddThread } from '../states/threads/action';
import CreateThreadInput from '../components/CreateThreadInput';

export default function CreateThreadPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onCreateThread = ({ title, body, category }) => {
    dispatch(asyncAddThread({ title, body, category }));
    navigate('/');
  };

  return (
    <section className="col-12 col-md-8 card mx-auto mt-2">
      <h1 className="text-center fs-3 card-header">Create new thread</h1>
      <CreateThreadInput createThread={onCreateThread} />
    </section>
  );
}
