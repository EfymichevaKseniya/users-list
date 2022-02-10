import React, { useEffect, useState } from 'react';
import { Button } from '../../components/Button/Button';
import { CardType } from '../../components/Card/Card';
import './profile.scss';
import { FormProfile } from '../../components/Form.tsx/Form';

const url = 'https://jsonplaceholder.typicode.com/users';

export const Profile: React.FC = () => {
  const id = window.location.pathname.split(':').slice(-1)[0];
  
  const [readOnly, setReadOnly] = useState(true);
  const [card, setCard] = useState<CardType>({id: ''});

  useEffect(() => {
    (async () => {
      let response = await fetch(url);
      let result = (await response.json()).find((item: CardType) => item.id === +id)!;
      setCard(result);
    })()
  }, [id])

  const handleClick = () => {
    setReadOnly(!readOnly);
  }

  return (
    <>
      {/* <Sidebar /> */}
      <section className="profile">
        <div className="profile__top">
          <h3 className="profile__top-title">Профиль пользователя</h3>
          <Button 
            context='Редактировать'
            color='normal'
            onClick={handleClick}
          />
        </div>
        <FormProfile card={card} readOnly={readOnly} />
      </section>
    </>
  )
}
