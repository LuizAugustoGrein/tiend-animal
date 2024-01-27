import React from 'react';

import './TextInput.css';

const TextInput = ({ label, id, value, setValue, correct }) => {
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <label htmlFor={id} className="text-input-label">{label} <span className='required-input-label'>*</span></label>
      <input
        className={`text-input
        ${!correct ? 'error-input' : ''}
        `}
        type="text"
        id={id}
        value={value}
        onChange={handleChange}
        placeholder={label}
      />
    </div>
  );
};

export default TextInput;