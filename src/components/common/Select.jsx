import React from 'react';

const Select = ({ options, value, onChange, className = '' }) => {
  return (
    <select
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
      className={`px-4 py-2 border rounded-md bg-white
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
        ${className}`}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;