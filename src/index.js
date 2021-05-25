import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from './redux/state';

// данные 28
// эти данные ушли в отдельный файл в src/redux/state.js
// let posts = [
//   {id: 1, message: 'I am first'},
//   {id: 2, message: 'hello'},
// ]

// let dialogs = [
//   {id: 1, name: 'NATAWA'},
//   {id: 2, name: 'DAWA'},
//   {id: 3, name: 'PAWA'},
//   {id: 4, name: 'Viktor'},
//   {id: 5, name: 'BAC9'},
// ]

// let messages = [
//   {id: 1, message: 'Hi'},
//   {id: 2, message: 'how do you do?'},
//   {id: 3, message: 'Yo'},
//   {id: 5, message: 'Yo'},
//   {id: 4, message: 'Yo'},
// ]


ReactDOM.render(
  <React.StrictMode>
    {/* ети данные были с данные 28 */}  
    {/* <App posts = { posts } dialogs = { dialogs } messages = { messages } /> */}
    <App state = { state } />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
