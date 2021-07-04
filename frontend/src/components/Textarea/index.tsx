import React, { TextareaHTMLAttributes } from 'react';

import './styles.css';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string,
  label: string
}

export default function Textarea({ name, label, ...rest }: TextareaProps) {
  return (
    <div className="input-group">
      <label htmlFor={name}>{label}</label>
      <textarea id={name} {...rest}> </textarea>
    </div>
  )
}