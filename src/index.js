import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
  {id: 1, message: 'I am first'},
  {id: 2, message: 'hello'},
]

let dialogs = [
  {id: 1, name: 'NATAWA'},
  {id: 2, name: 'DAWA'},
  {id: 3, name: 'PAWA'},
  {id: 4, name: 'Viktor'},
  {id: 5, name: 'BAC9'},
]

let messages = [
  {id: 1, message: 'Hi'},
  {id: 2, message: 'how do you do?'},
  {id: 3, message: 'Yo'},
  {id: 5, message: 'Yo'},
  {id: 4, message: 'Yo'},
]


ReactDOM.render(
  <React.StrictMode>
    <App posts = { posts } dialogs = { dialogs } messages = { messages } />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
