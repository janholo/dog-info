import React from 'react';
import { Counter } from './features/counter/Counter';
import { Navbar } from './features/navbar/Navbar';
import './App.scss';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <section className="section">
        <div className="container">
          <h1 className="title">
            Hello World
          </h1>
          <p className="subtitle">
            My first website with <strong>Bulma</strong>!
          </p>
          <Counter></Counter>
          <p>https://age-of-empires-2-api.herokuapp.com/docs/</p>
        </div>
      </section>
    </>
  );
}

export default App;
