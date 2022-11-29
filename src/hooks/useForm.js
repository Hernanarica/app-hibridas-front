import { useState } from 'react';

function useForm(initialState = {}) {
  const [ formData, setForm ] = useState(initialState);

  const handleInputchange = ({ target }) => {
    setForm({
      ...formData,
      [ target.name ]: target.value,
    });
  };

  const reset = () => {
    setForm(initialState);
  };

  return { formData, handleInputchange, reset }
}

export default useForm;
