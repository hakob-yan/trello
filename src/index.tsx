import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './styles/index.scss';
import App from './App/App';
import { listReducer } from './Redux/listReducer';

const store = createStore(listReducer);
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
