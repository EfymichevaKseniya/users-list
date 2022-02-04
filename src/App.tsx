import React, { useContext, useEffect, useState , createContext } from 'react';
import "./App.scss";
import { Routes, Route } from 'react-router';
import { Main } from './pages/Main/Main';
import { Profile } from './pages/Profile/Profile';
import { CardType } from './components/Card/Card';
import { CardListType } from './components/CardList/CardList';

const url = 'https://jsonplaceholder.typicode.com/users';

const contextDefaultValues: CardListType = {
  cards: [],
};

export const Context = React.createContext<CardListType>(contextDefaultValues);

function App() {
  const [cards, setCards] = useState<CardType[]>(contextDefaultValues.cards);

  useEffect(() => {
    (async () => {
      let response = await fetch(url);
      let result = await response.json();
      setCards(result);
    })()
  }, [])

  return (
    <div className='App'>
      <div className='container'>
        <div className='page'>
        <Context.Provider value={{cards}}>
            <Routes>
              <Route path='/' element={<Main />} />
              <Route path='/form/:id' element={<Profile />} />
            </Routes>
          </Context.Provider>
        </div>
      </div>
    </div>
  );
}

export default App;
