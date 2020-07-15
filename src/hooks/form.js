import { useState } from 'react';
// optional to pass placeholder (not really needed)
function useFormInput(placeholder) {
  const [value, setValue] = useState('');
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return { value, onChange: handleChange, placeholder };
}
export default useFormInput;