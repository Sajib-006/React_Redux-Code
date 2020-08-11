import React from "react";

const DemoComponent = (props) => {
  //console.log(this.props);
  //destructuring this.props in a object
  //const { name, age, roll } = this.props;
  //as a list
  const { students } = props;
  const studentList = students.map((student) => {
    //used ternery for conditional output.
    return student.age > 24 ? (
      <div key={student.id}>
        <p> hi</p>
        <div> Name: {student.name} </div>
        <div> Age: {student.age}</div>
        <div> Roll: {student.roll}</div>
      </div>
    ) : null;
  });
  return <div>{studentList}</div>;
};

export default DemoComponent;
