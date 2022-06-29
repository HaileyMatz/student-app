import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import './Student.css';

const Student = (prop) => {
  const [isPresent, setIsPresent] = useState(false);
  const toggleIfPresent = () => {
    setIsPresent(!isPresent);
  };
  const nameColor = isPresent ? 'green' : 'red';
  return (
    <div>
      <ul>
        <li className={nameColor}>Nickname: {prop.name}</li>
        <li>Email: {prop.email}</li>
      </ul>
      <button onClick={toggleIfPresent}>
        Toggle if {prop.name} is present
      </button>
    </div>
  );
};
Student.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
export default Student;
