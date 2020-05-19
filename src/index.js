import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import {createStore, combineReducers} from 'redux'
import store from './Store'
import {Provider} from 'react-redux' 

const reducer = combineReducers({todos: todosReducer, count: countReducer})
const store = createStore(reducer)
console.log(store.getState())

function todosReducer(state=[], action) {
  switch(action.type) {
    case "ADD_TODO": 
      return [...state, action.payload]
    default: 
      return state
  }
}

function countReducer(state=0, action) {
  switch(action.type) {
    case "INCREMENT":
      return state + 1 
    default: 
      return state
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}> 
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
