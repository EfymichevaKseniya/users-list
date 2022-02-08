import React, { useState } from 'react';
import { Sidebar } from '../Sidebar/Sidebar';
import './page.scss';

export type PageProps = { 
  children?: React.ReactNode | React.ReactNode[];
  filter?: string;
}

export const Page: React.FC<PageProps> = ({children}) => {
  const [filter, setFilter] = useState('');

  const handleClick = (filter: string) => {
    setFilter(filter);
  }

  return (
    <div className='page'>
      <Sidebar {...filter} onClick={handleClick} />
      {children}
    </div>
  )
}
