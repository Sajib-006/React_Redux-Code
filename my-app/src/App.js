import React, { Component } from "react";
import DemoComponent from "./demoComponent";

class App extends Component {
  state = {
    students: [
      { name: "Rafid", age: "20", roll: "61", id: 1 },
      { name: "Apurbo", age: "25", roll: "62", id: 2 },
      { name: "Monmoy", age: "30", roll: "63", id: 3 },
    ],
  };
  render() {
    return (
      <div className='App'>
        <h1>My first React App</h1>
        <p> Hey dudes!</p>
        <DemoComponent students={this.state.students} />
      </div>
    );
  }
}

export default App;
