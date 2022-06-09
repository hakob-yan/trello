import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import './index.scss';
import App from './pages/App';
import { listReducer } from './Redux/listReducer';
import { cardReducer } from './Redux/cardReducers';

const reducers = combineReducers({
  lists: listReducer,
  cards: cardReducer,
});

const store = createStore(reducers);
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
