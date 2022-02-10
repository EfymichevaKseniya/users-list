import React from 'react';
import "./App.scss";
import { Routes, Route } from 'react-router';
import { Main } from './pages/Main/Main';
import { Profile } from './pages/Profile/Profile';
import { Container } from './components/Container/Container';
import { Page } from './components/Page/Page';

function App() {
  return (
    <div className='App'>
      <Container>
        <Page>
          <Routes>
            {/* <Route path='/' element={<Page />}> */}
              <Route index element={<Main />} />
              <Route path='form/:id' element={<Profile />} />
            {/* </Route> */}
          </Routes>
        </Page>
      </Container>
    </div>
  );
}

export default App;
