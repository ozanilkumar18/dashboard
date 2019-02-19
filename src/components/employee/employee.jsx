import React from 'react';
import PropTypes from 'prop-types';
import './employee.css';

const Employee = (props) => {
  const {
    image,
    firstName,
    lastName,
    description,
    style,
    onClick,
  } = props;
  return (
    <div className="employeeBox" aria-hidden="true" role="button" style={style} onClick={onClick}>
      <div className="dataBox">
        <img src={image} alt={firstName} />
        <div>
          <p>
            <strong>
              {firstName}
              {' '}
              {lastName}
            </strong>
          </p>
          <p>
            {description}
            {' '}
more ...
          </p>
        </div>
      </div>
    </div>
  );
};

Employee.propTypes = {
  image: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  style: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Employee;
