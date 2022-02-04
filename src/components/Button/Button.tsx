import React, { ButtonHTMLAttributes } from 'react';
import './button.scss';

export type ButtonType = {
  context?: string;
  color?: Color;
  // type?: 'submit' | 'button';
  onClick?: VoidFunction;
  className?: string;
};

export const Button: React.ComponentType<ButtonType & ButtonHTMLAttributes<HTMLButtonElement>> = ({
  context,
  color = 'primary',
  onClick,
  className='',
  type='button',
  disabled,
}) => {
  return (
    <button
      className={`btn btn--${color} ${className}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {context ? <span className='btn-text'>{context}</span> : ''}
    </button>
  );
};
