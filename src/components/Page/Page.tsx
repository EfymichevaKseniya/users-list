import React, { useState } from 'react';
import { Sidebar } from '../Sidebar/Sidebar';
import FilterContext from '../../filterContext';
import './page.scss';

export type PageProps = { 
  children: React.ReactNode;
}

export const Page: React.FC<PageProps> = ({children}) => {
  const [filter, setFilter] = useState('');

  const handleClick = (filter: string) => {
    setFilter(filter);
  }

  return (
  <main className='page'>
    <FilterContext.Provider value={{filter: filter, setFilterContext: () => handleClick}}>
        <Sidebar {...filter} onClick={handleClick} />
        {children} 
    </FilterContext.Provider>
  </main>
  )
}
