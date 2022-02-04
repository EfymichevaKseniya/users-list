import React, { HTMLInputTypeAttribute } from 'react';
import './inputDefault.scss';

export type InputType = {
  id: string;
  content: string;
  type?: HTMLInputTypeAttribute;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  error?: string;
  touched?: boolean;
  readOnly?: boolean;
};

export const Input: React.ComponentType<InputType> = ({
  id = '',
  content,
  type = 'text',
  value = '',
  onChange,
  error = '',
  touched = false,
  readOnly,
}) => {
  return (
    <>
      <div className='input'>
        <input
          className={`
                input__text 
                ${touched && error ? 'input--error' : ''}
              `}
          type={type}
          id={id}
          name={id}
          value={value}
          onChange={onChange}
          readOnly={readOnly}
        />
        <label htmlFor={id} className='input__label'>
          {content}
        </label>
      </div>
    </>
  );
};
