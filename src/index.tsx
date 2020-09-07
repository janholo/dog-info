import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './index.scss';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl'
import { NotFound } from './features/NotFound';

const messagesInGerman = {
  breeds: "Rassen",
}

interface ILocalisedAppProps {
  locale: string
}

function LocalisedApp(props: ILocalisedAppProps) {
  let messages = undefined;
  
  if(props.locale === "de") {
    messages = messagesInGerman;
  }

  return (
    <IntlProvider messages={messages} locale={props.locale} defaultLocale="en">
      <App/>
    </IntlProvider>
  );
}

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
