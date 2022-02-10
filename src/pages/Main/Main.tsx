import React, { useEffect, useState, useContext } from 'react';
import { CardList } from '../../components/CardList/CardList';
import { Loader } from '../../components/Loader/Loader';
import { CardType } from '../../components/Card/Card';
import './main.scss';
import FilterContext from '../../filterContext';


const url = 'https://jsonplaceholder.typicode.com/users';

export const Main: React.FC = () => {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { filter } = useContext(FilterContext);

  useEffect(() => {
    (async () => {
      setIsLoading(true)
      let response = await fetch(url);
      let result = await response.json();
      setCards(result);
      setIsLoading(false)
    })()
  }, []);

  if (filter === 'city') {
    cards.sort((a: CardType, b: CardType) => a.address!.city.localeCompare(b.address!.city))
  } else  if (filter === 'company') {
    cards.sort((a: CardType, b: CardType) => a.company!.name.localeCompare(b.company!.name))
  }

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
