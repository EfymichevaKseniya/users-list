import React, { useEffect, useState } from 'react';
import { CardList } from '../../components/CardList/CardList';
import { Loader } from '../../components/Loader/Loader';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import './main.scss';


const url = 'https://jsonplaceholder.typicode.com/users';

export const Main: React.FC = (filter) => {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true)
      let response = await fetch(url);
      let result = await response.json();
      setCards(result);
      setIsLoading(false)
    })()
  }, [])

  console.log(filter)

  return (
    <>
      {/* <Sidebar sort={filter} onClick={handleClick} /> */}
      {isLoading ? <Loader />
      :
        <section className='cards'>
          <h3 className='cards__title'>Список пользователей</h3>
          <CardList {...filter} cards={cards} />
          <p className='cards__count'>Найдено {cards.length} пользователей</p>
        </section>
      }
    </>
  )
}
