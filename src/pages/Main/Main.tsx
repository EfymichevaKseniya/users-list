import React, { useEffect, useState } from 'react';
import { CardList } from '../../components/CardList/CardList';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import './main.scss';

const url = 'https://jsonplaceholder.typicode.com/users';

export const Main: React.FC = () => {
  const [cards, setCards] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    (async () => {
      let response = await fetch(url);
      let result = await response.json();
      setCards(result);
    })()
  }, [])
  

  const handleClick = (filter: string) => {
    setFilter(filter);
  }
  // console.log(filter)

  return (
    <>
      <Sidebar sort={filter} onClick={handleClick} />
      <section className='cards'>
        <h3 className='cards__title'>Список пользователей</h3>
        <CardList filter={filter} cards={cards} />
        <p className='cards__count'>Найдено {cards.length} пользователей</p>
      </section>
    </>
  )
}
