import React from 'react';
import { Home } from './features/home/Home';
import { Navbar } from './features/navbar/Navbar';
import { BreedDetail } from './features/breed-detail/BreedDetail'
import { Breeds } from './features/breeds/Breeds'
import { NotFound } from './features/NotFound'
import './App.scss';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/breeds" component={Breeds} />
        <Route path="/breeds/:breed">
          <BreedDetail></BreedDetail>
        </Route>
        <Route path="*" component={NotFound} />
      </Switch>
    </>
  );
}

export default App;
