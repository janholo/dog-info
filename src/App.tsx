import React, { useEffect } from 'react';
import { Home } from './features/home/Home';
import { Navbar } from './features/navbar/Navbar';
import { BreedDetail } from './features/breed-detail/BreedDetail'
import { Breeds } from './features/breeds/Breeds'
import { NotFound } from './features/NotFound'
import './App.scss';
import { Route, Switch } from 'react-router-dom';
import { useHistory } from "react-router-dom";

function App() {
  const { listen } = useHistory();

  useEffect(
    () =>
      listen(() => {
        const el = document.activeElement as HTMLElement;

        el?.classList?.contains("navbar-item") && el.blur();
      }),
    [listen]
  );

  return (
    <>
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/breeds" component={Breeds} />
        <Route path="/breeds/:breed" component={BreedDetail} />
        <Route path="/subbreeds/:breed/:subbreed" component={BreedDetail} />
        <Route path="*" component={NotFound} />
      </Switch>
    </>
  );
}

export default App;
