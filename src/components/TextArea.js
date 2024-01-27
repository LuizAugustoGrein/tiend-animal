import React from 'react';
import './TextInput.css';

const TextArea = ({ label, id, value, setValue, correct }) => {
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <label htmlFor={id} className="text-input-label">
        {label} <span className='required-input-label'>*</span>
      </label>
      <textarea
        className={`text-input ${!correct ? 'error-input' : ''}`}
        id={id}
        value={value}
        onChange={handleChange}
        placeholder={label}
        style={{ height: '20vh', paddingTop: '15px' }}
      />
    </div>
  );
};

export default TextArea;
