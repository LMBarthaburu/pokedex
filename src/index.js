import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { PokemonApp } from './Pokemon';
import { store } from './Store/Store';
import { Provider } from 'react-redux';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={ store }>
      <PokemonApp/>
    </Provider>
  </React.StrictMode>
);

