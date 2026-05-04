import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MyComponent from './MyComponent';
import ChildComponent from './childComponent';
import TodoApp from './TodoApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    
    // <MyComponent color="red" size = "33" clickEvent = { ()=> {
    //   console.log("Who Clicked my button");
    //   alert("Who Clicked my button")
    //  }}/>
    // <App/>
    <TodoApp/>
  // </React.StrictMode>
);
{/* <App color="red" size = "33" clickEvent = { ()=> {
      console.log("Who Clicked my button");
      alert("Who Clicked my button")
     }} /> */}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
