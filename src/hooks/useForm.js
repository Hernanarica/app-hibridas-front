import { useState } from 'react';

function useForm(initialState = {}) {
  const [ formData, setForm ] = useState(initialState);

  const handleInputChange = ({ target }) => {
    setForm({
      ...formData,
      [ target.name ]: target.value,
    });
  };

  const reset = () => {
    setForm(initialState);
  };

  return { formData, handleInputChange, reset }
}

export default useForm;
