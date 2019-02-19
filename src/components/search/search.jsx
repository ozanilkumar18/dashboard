import React from 'react';
import PropTypes from 'prop-types';

const Search = (props) => {
  const { onClick } = props;
  return (
    <div>
      search:
      {' '}
      <input type="text" style={{ width: '50%' }} onChange={onClick} />
    </div>
  );
};

Search.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Search;
