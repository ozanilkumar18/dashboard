import React from 'react';
import PropTypes from 'prop-types';
import './sort.css';

const Sort = (props) => {
  const { onClick } = props;
  return (
    <div className="sortBox">
      Sort by :
      <select onChange={onClick}>
        <option value="firstname">first name</option>
        <option value="lastname">last name</option>
      </select>
    </div>
  );
};

Sort.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Sort;
