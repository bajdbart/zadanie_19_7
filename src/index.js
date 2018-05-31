import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import rootReducer from './reducers/reducer';
import { addComment } from './actions/action';

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );

  store.dispatch(addComment('pierwszy komentarz'));
  store.dispatch(addComment('drugi komentarz'));