import React, { Component } from "react";

class AddStudent extends Component {
  state = {
    name: null,
    age: null,
    roll: null,
  };
  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };
  render() {
    return (
      <div>
        <form>
          <label htmlFor='name'> Name:</label>
          <input type='text' id='name' onChange={this.handleChange} />
          <label htmlFor='name'> Age:</label>
          <input type='text' id='age' onChange={this.handleChange} />
          <label htmlFor='name'> Roll:</label>
          <input type='text' id='roll' onChange={this.handleChange} />
          <button> Submit</button>
        </form>
      </div>
    );
  }
}
