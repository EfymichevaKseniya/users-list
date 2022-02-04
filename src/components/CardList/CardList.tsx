import React from 'react';
import { SortArray } from '../../utils';
import { Card, CardType } from '../Card/Card';
import './cardList.scss';

export type CardListType = {
  cards: CardType[];
  filter?: string;
}

export const CardList: React.ComponentType<CardListType> = ({
  cards,
  filter,
}) => {
  // console.log(filter)
  if (filter === 'city') {
    cards.sort((a: CardType, b: CardType) => a.address!.city.localeCompare(b.address!.city))
  } else  if (filter === 'company') {
    cards.sort((a: CardType, b: CardType) => a.company!.name.localeCompare(b.company!.name))
  }

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
