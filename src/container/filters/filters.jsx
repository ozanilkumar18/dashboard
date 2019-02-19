import React, {
  Component,
} from 'react';
import {
  connect,
} from 'react-redux';
import PropTypes from 'prop-types';
import Search from '../../components/search/search';
import Sort from '../../components/sort/sort';
import './filters.css';
import * as actions from '../../actions/actions';

class Filter extends Component {
  sortHandler = (event) => {
    const {
      sortEmployees,
    } = this.props;
    sortEmployees(event.target.value);
  };

  filterHandler = (event) => {
    const { filterEmployees } = this.props;
    filterEmployees(event.target.value);
  };

  render() {
    return (
      <div className="filterBox">
        <h3>Our Employees</h3>
        <div className="filterInnerBox">
          <Sort onClick={this.sortHandler} />
          <Search onClick={this.filterHandler} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  sortEmployees: value => dispatch(actions.sortEmployees(value)),
  filterEmployees: value => dispatch(actions.filterEmployees(value)),
});

Filter.propTypes = {
  sortEmployees: PropTypes.func.isRequired,
  filterEmployees: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Filter);
