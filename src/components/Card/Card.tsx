import React from 'react';
import { ButtonLink } from '../Button/ButtonLink';
import './card.scss';

export type CardType = {
  name?: string;
  address?: {
    city: string;
    geo: {lat: string, lng: string};
    street: string
    suite: string
    zipcode: string
  };
  company?: {
    bs: string;
    catchPhrase: string;
    name: string;
  };
  id: Id;
  phone?: string;
  website?: string;
  email?: string;
  username?: string;
};

export const Card: React.ComponentType<CardType> = ({
  id = '',
  name = '',
  address = {
    city: '',
    geo: {lat: '', lng: ''},
    street:  '',
    suite : '',
    zipcode: '',
  },
  company = {
    bs: '',
    catchPhrase: '',
    name: '',
  },
  ...other
}) => {
  return (
    <li className='card__item'>
        <div className="card__item-info">
          <p className="card__item-name">ФИО: <span className='card__item-txt'>{name}</span></p>
          <p className="card__item-city">Город: <span className='card__item-txt'>{address?.city}</span></p>
          <p className="card__item-company">Компания: <span className='card__item-txt'>{company?.name}</span></p>
        </div>
        <ButtonLink
          context='Подробнее'
          color='transparent'
          path={`form/:${id}`}
        />
    </li>
  );
};
