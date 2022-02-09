import React from 'react';
import './sidebar.scss';
import { Button } from '../Button/Button';

export type FilterType = {
  onClick?: (data: string) => void;
}

export const Sidebar: React.ComponentType<FilterType> = ({
  onClick = () => {},
}) => {
  return (
    <div className='sidebar'>
      <h3 className='sidebar__title'>Сортировка</h3>
        <Button
          context='по городу'
          color='normal'
          onClick={() => onClick('city')}
        />
        <Button
          context='по компании'
          color='normal'
          onClick={() => onClick('company')}
        />
    </div>
  )
}
