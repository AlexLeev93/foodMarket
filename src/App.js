import React from 'react';
import styled from 'styled-components';
import Finder from './components/Finder/Finder';
import Header from './components/Header/Header';
import Contacts from './components/Contacts/Contacts';
import MainPage from './pages/MainPage';
import { BrowserRouter, Route } from 'react-router-dom';
import FoodConstructor from './pages/FoodConstructor';
import AllRecipes from './pages/AllRecipes';
import Shop from './pages/Shop';
import Sets from './pages/Sets';
import Basket from './pages/Basket';

const AppWrapper = styled.div`
  padding: 0 15px;
`


function App() {
  return (
    <div>
    <Header name='FoodStore' />
    <AppWrapper>
      <Finder/>
      <BrowserRouter>
        <Route exact path='/' component={() => <MainPage/>}/>
        <Route path='/constructor' component={() => <FoodConstructor/>}/>
        <Route path={'/allrecipes'} component={AllRecipes}/>
        <Route path={'/shop'} component={Shop}/>
        <Route path={'/sets'} component={Sets}/>
        <Route path={'/basket'} component={Basket}/>
      </BrowserRouter>
    </AppWrapper>
    <Contacts/>
    </div>
  );
}

export default App;
