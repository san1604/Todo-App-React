import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MyComponent from './MyComponent';
import ChildComponent from './childComponent';
// import TodoApp from './TodoApp';
import SimpleDialog from './SimpleDialog';
import MyFunctionalComponent from './MyFunctionalComponent';
import TodoAppNew from './ToDoApp/TodoAppNew';
import FormComponent from './FormComponent';
import Navigation from '../src/React-Router-Example/Navigation'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './React-Router-Example/Home'
import Signin from './React-Router-Example/Signin'
import Signup from './React-Router-Example/Signup'
import AboutUs from './React-Router-Example/AboutUs'
import MultiComponent from './React-Router-Example/MultiComponent';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <BrowserRouter>
  //   <Routes>
  //     <Route path="/" element={<Navigation/>}>
  //       <Route index element={<Home/>}/>
  //       <Route path="/signup" element={<Signup/>}/>
  //       <Route path="/signin" element={<Signin/>}/>
  //       <Route path="/aboutus" element={<AboutUs/>}/>        
  //     </Route>
  //   </Routes>
  // </BrowserRouter>
  // <React.StrictMode>
    
    // <MyComponent color="red" size = "33" clickEvent = { ()=> {
    //   console.log("Who Clicked my button");
    //   alert("Who Clicked my button")
    //  }}/>
    // <App/>
    // <TodoApp/>
    // <TodoAppNew/>
    <MultiComponent/>
    // <MyFunctionalComponent/>
    // <MyComponent/>
    // <SimpleDialog/>
    // <FormComponent/>
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
