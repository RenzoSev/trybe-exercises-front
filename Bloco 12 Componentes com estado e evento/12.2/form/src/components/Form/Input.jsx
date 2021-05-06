import React from 'react';

function Input (props) {
    const {name, type, value } = props.input
  
    return (
      <label>
        {value}
        <input 
        type={type}
        name={name}
        onChange={props.onChange}
        value={value}
        required
        />
        <span>{props.error}</span>
      </label>
    )
}

export default Input;
