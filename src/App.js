// import logo from './logo.svg';
// import './App.css';
import React from 'react';
// import MyComponent from './MyComponent';
import ChildComponent from './childComponent';
// function App(props) {

//   console.log("props ", props);
//   console.log("Color ", props.color);
//   console.log("Size ", props.size);
//   console.log("ClickEvent ", props.clickEvent);
  
//   // return React.createElement(
//   //   "div",
//   //   null,
//   //   React.createElement("p", null,"This is a simple list"),
//   //   React.createElement("ul", null, ),
//   //   React.createElement("li", null,"This is list item 1"),
//   //   React.createElement("li", null,"This is list item2")
//   // );
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p style={{color: props.color}} onClick={props.clickEvent} >
//           Edit <code>src/App.js</code> and save to reload. Hi Sandeep
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   )
// }

class App extends React.Component
{
  state = 
  {
    childComponent: <ChildComponent/>

  }
  unmountTheChild()
  {
    this.setState({childComponent: "Hello"})
  }

  render()
  {
    return <div>
      <label>This is my Child Component: {this.state.childComponent}</label>
      <button onClick={() => this.unmountTheChild()} >Unmount Child</button>
    </div>
  }
}

export default App;
