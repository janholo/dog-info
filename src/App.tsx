import React, { useEffect } from 'react';
import { Home } from './features/home/Home';
import { Navbar } from './features/navbar/Navbar';
import { BreedDetail } from './features/breed-detail/BreedDetail'
import { Breeds } from './features/breeds/Breeds'
import { NotFound } from './features/NotFound'
import './App.scss';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { useHistory } from "react-router-dom";

function App() {
  const { listen } = useHistory();
  let { path } = useRouteMatch();

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
        <Route exact path={`${path}/`} component={Home} />
        <Route exact path={`${path}/breeds`} component={Breeds} />
        <Route path={`${path}/breeds/:breed`} component={BreedDetail} />
        <Route path={`${path}/subbreeds/:breed/:subbreed`} component={BreedDetail} />
        <Route path="*" component={NotFound} />
      </Switch>
    </>
  );
}

export default App;
