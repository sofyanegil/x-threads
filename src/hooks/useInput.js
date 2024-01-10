import { useState } from 'react';

export default function useInput(defaultValue = '') {
  const [value, setValue] = useState(defaultValue);

  function handleChange({ target }) {
    setValue(target.value);
  }

  return [value, handleChange, setValue];
}
