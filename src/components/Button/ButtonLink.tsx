import React from 'react';
import { Link } from 'react-router-dom';
import './button.scss';

export type ButtonLinkType = {
  context?: string;
  color?: Color;
  path: string;
  size?: 'normal' | 'big' | 'small';
  onClick?: VoidFunction;
};

export const ButtonLink: React.ComponentType<ButtonLinkType> = ({
  context,
  color = 'transparent',
  path = '/',
  onClick,
}) => {
  return (
    <Link
      to={`/${path}`}
      className={`btn btn--${color} btn--link`}
      onClick={onClick}
    >
      {context ? <span className='btn-text'>{context}</span> : ''}
    </Link>
  );
};
