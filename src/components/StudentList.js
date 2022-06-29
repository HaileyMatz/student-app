import React from 'react';
import './StudentList.css';
import Student from './Student';

const StudentList = (props) => {
  const headingClass = 'student-list__heading';
  const listClass = 'student-list';
  const studentComponents = props.students.map((student, index) => {
    return (
      <li key={index}>
        <Student name={student.nameData} email={student.emailData} />
        <Student></Student>
      </li>
    );
  });
  return (
    <section>
      <h2 className={headingClass}>Student List</h2>
      <ul className={listClass}>{studentComponents}</ul>
    </section>
  );
};

export default StudentList;
