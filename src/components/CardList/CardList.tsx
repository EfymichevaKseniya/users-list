import React from 'react';
import { Card, CardType } from '../Card/Card';
import './cardList.scss';

export type CardListType = {
  cards: CardType[];
}

export const CardList: React.ComponentType<CardListType> = ({
  cards,
}) => {

  return (
    <ul className='card__list'>
      {
        cards.map((item: CardType) => {
          return (
            <Card {...item} key={item.id} />
          )
        })
      }
    </ul>
  );
};
