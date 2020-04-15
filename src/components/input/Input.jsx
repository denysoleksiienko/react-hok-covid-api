import React from 'react';
import './Input.css';

function Input({ onChange, value }) {
  return (
    <input
      className="form-control"
      onChange={onChange}
      label="Search"
      placeholder="Search Country"
      value={value}
    />
  )
}

export default Input;
