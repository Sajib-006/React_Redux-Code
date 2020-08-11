import React, { Component } from "react";
import DemoComponent from "./demoComponent";

class App extends Component {
  render() {
    return (
      <div className='App'>
        <h1>My first React App</h1>
        <p> Hey dudes!</p>
        <DemoComponent />
        <p> Hello</p>
      </div>
    );
  }
}

export default App;
