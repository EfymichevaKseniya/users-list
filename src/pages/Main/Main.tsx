import React, { useEffect, useState } from 'react';
import { CardList } from '../../components/CardList/CardList';
import { Loader } from '../../components/Loader/Loader';
import { CardType } from '../../components/Card/Card';
import { SortArray } from '../../utils';
import './main.scss';


const url = 'https://jsonplaceholder.typicode.com/users';

export const Main: React.FC = () => {
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
  }, []);

  const filter = window.location.search.split('=').slice(-1)[0];

  console.log(filter)
  if (filter === 'city') {
    cards.sort((a: CardType, b: CardType) => a.address!.city.localeCompare(b.address!.city))
  } else  if (filter === 'company') {
    cards.sort((a: CardType, b: CardType) => a.company!.name.localeCompare(b.company!.name))
  }

  // cards.sort((a: CardType, b: CardType) => SortArray(a, b, filter) as any)

  return (
    <>
      {isLoading ? <Loader />
      :
        <section className='cards'>
          <h3 className='cards__title'>Список пользователей</h3>
          <CardList cards={cards} />
          <p className='cards__count'>Найдено {cards.length} пользователей</p>
        </section>
      }
    </>
  )
}
