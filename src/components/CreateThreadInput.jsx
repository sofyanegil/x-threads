/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';
import { showErrorAlert } from '../utils/alert';
import Button from './styled/Button';

export default function CreateThreadInput({ createThread }) {
  const [title, onChangeTitle] = useInput('');
  const [category, onChangeCategory] = useInput('');
  const [body, , setBody] = useInput('');

  const onChangeBodyHandler = (event) => {
    setBody(event.target.innerHTML);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (title === '' || category === '' || body === '') {
      showErrorAlert('Please fill in all fields');
      return;
    }
    createThread({ title, category, body });
  };

  return (
    <form className="card-body" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <input type="text" className="form-control text-small" id="title" placeholder="Title" value={title} onChange={onChangeTitle} required />
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <input type="text" className="form-control text-small" id="category" placeholder="Category" value={category} onChange={onChangeCategory} required />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Body
        </label>
        <div className="form-control text-small" id="body" contentEditable style={{ minHeight: '25vh' }} onInput={onChangeBodyHandler} placeholder="Body" aria-label="body" />
      </div>

      <div className="input-group my-2">
        <Button type="submit" variant="success" size="sm">
          Create
        </Button>
      </div>
    </form>
  );
}

CreateThreadInput.propTypes = {
  createThread: PropTypes.func.isRequired,
};
