import React, {
  Component,
} from 'react';
import PropTypes from 'prop-types';
import './Header.css';
import {
  connect,
} from 'react-redux';

const Header = (props) => {
  const {
    getCompanyInfo,
  } = props;

  return (
    <div className="header">
      <h2>{getCompanyInfo.companyName}</h2>
      <div className="tagLine">
        <h5>{getCompanyInfo.companyMotto}</h5>
        <div className="tagline2">
          <h5>
              Since
            {' '}
            {new Date(getCompanyInfo.companyEst).getFullYear()}
          </h5>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  getCompanyInfo: state.companyInfo,
  getError: state.error,
});

Header.propTypes = {
  getCompanyInfo: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default connect(
  mapStateToProps,
  null,
)(Header);
