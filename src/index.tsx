import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './index.scss';
import { store } from './app/store';
import { Provider } from 'react-redux';
import { NotFound } from './features/NotFound';
import { LocalisedApp } from './features/localisation/Localisation'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route path="/en" render={() => <LocalisedApp locale="en" />} />
            <Route path="/de" render={() => <LocalisedApp locale="de" />} />
            <Route exact path="/" render={() => <Redirect to="/en" />} />
            <Route path="*" component={NotFound} />
          </Switch>
        </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
