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
    if (filter !== '') {
      window.location.search = window.location.search.replace(window.location.search, `filter=${filter}`);
    }
  }

  return (
    <div className='page'>
      <Sidebar {...filter} onClick={handleClick} />
      {children}
    </div>
  )
}
