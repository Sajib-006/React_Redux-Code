import React, { Component } from "react";

class DemoComponent extends Component {
  render() {
    //console.log(this.props);
    //destructuring this.props in a object
    //const { name, age, roll } = this.props;
    //as a list
    const { students } = this.props;
    const studentList = students.map((student) => {
      return (
        <div key={student.id}>
          <p> hi</p>
          <div> Name: {student.name} </div>
          <div> Age: {student.age}</div>
          <div> Roll: {student.roll}</div>
        </div>
      );
    });
    return <div>{studentList}</div>;
  }
}

export default DemoComponent;
