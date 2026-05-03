import React from "react";
import App from "../App";

function StudentList(props) {
  const students = [
    {
      id: 0,
      Name: "Amal Perera",
      age: 21,
      course: "Information Technology",
      isActive: Boolean,
    },
    {
      id: 1,
      Name: "Dilani Ranasinghe ",
      age: 21,
      course: "Information Technology",
      isActive: Boolean,
    },
    {
      id: 2,
      Name: "Kasum Fernardo",
      age: 21,
      course: "Engineering Technology",
      isActive: Boolean,
    },
    {
      id: 3,
      Name: "Nimesha Silva",
      age: 21,
      course: "Biology Engineering Technology",
      isActive: Boolean,
    },
    {
      id: 4,
      Name: "Sanduni Jayawarthana",
      age: 21,
      course: "Information Technology",
      isActive: Boolean,
    },
  ];
  const list = students.map((StudentList) => (
    <StudentList
      key={StudentList.id}
      name={StudentList.Name}
      age={StudentList.age}
      course={StudentList.course}
      isActive={StudentList.isActive}
    />
  ));
  return <>{list}</>;
}

export default StudentList;
