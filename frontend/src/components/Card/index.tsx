import React from 'react';
import './styles.css';

interface CardProps {
  classes?: string,
  children: React.ReactNode
}

export default function Card({classes, children}:CardProps) {
  return (
    <div className={`card ${classes}`}>
      {children}
    </div>
  )
}