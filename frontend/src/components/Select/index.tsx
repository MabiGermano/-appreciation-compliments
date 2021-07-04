import React, { SelectHTMLAttributes } from 'react';

import './styles.css';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string,
  label: string,
  options: Array<{ value: string, label: string }>
}

export default function Select({ name, label, options }: SelectProps) {
  return (
    <div className="input-group">
      <label htmlFor={name}>{label}</label>
      <select name={name} id={name}>
        <option value="" disabled hidden>Select an option...</option>
        {options.map(option => {
          return <option key={option.value} value={option.value}>{option.label}</option>
        })}
      </select>
    </div>
  )
}