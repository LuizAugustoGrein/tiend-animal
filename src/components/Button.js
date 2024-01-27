import React from 'react';

import './Button.css';

const Button = ({ label, action, enabled }) => {
    return (
        <button 
        disabled={!enabled}
        className={`button
        ${!enabled ? 'disabled-btn' : ''}
        `} onClick={() => action()}>
            {label}
        </button>
    );
};

export default Button;