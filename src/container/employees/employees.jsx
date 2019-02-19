import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './employees.css';
import axios from 'axios';
import { connect } from 'react-redux';
import _ from 'lodash';
import * as actions from '../../actions/actions';
import Employee from '../../components/employee/employee';
import Modal from '../../components/modal/modal';
import Filter from '../filters/filters';

class Employees extends Component {
  state = {
    selectedEmployee: {},
    isModal: false,
  };

  employeeHandler = (value) => {
    const { getEmployees } = this.props;
    const { isModal } = this.state;
    const index = _.findIndex(getEmployees, { id: value });
    this.setState({
      selectedEmployee: getEmployees[index],
      isModal: !isModal,
    });
  };

  closeModalHandler = () => {
    this.setState({ isModal: false });
  };

  componentDidMount = () => {
    const { saveCompanyDetails, saveError } = this.props;
    axios
      .get('./sample-data.json')
      .then((response) => {
        saveCompanyDetails(response.data);
      })
      .catch((error) => {
        saveError(error);
      });
  }

  render() {
    const { isModal, selectedEmployee } = this.state;
    const { filteredEmployees, getEmployees } = this.props;
    let modal = null;
    if (isModal) {
      const jd = new Date(selectedEmployee.dateJoined);
      modal = (
        <Modal
          image={selectedEmployee.avatar}
          firstName={selectedEmployee.firstName}
          lastName={selectedEmployee.lastName}
          jobTitle={selectedEmployee.jobTitle}
          age={selectedEmployee.age}
          joinedDate={jd.toLocaleDateString('en-US')}
          description={selectedEmployee.bio}
          onClose={this.closeModalHandler}
        />
      );
    }

    let employeeList = null;
    if (filteredEmployees.length > 0) {
      employeeList = filteredEmployees;
    } else {
      employeeList = getEmployees;
    }
    const employee = employeeList.map((emp) => {
      let style = {};
      if (
        selectedEmployee
        && isModal
        && emp.id === selectedEmployee.id
      ) {
        style = { background: 'pink' };
      }
      return (
        <Employee
          key={emp.firstName}
          firstName={emp.firstName}
          lastName={emp.lastName}
          description={emp.bio.substr(0, 80)}
          image={emp.avatar}
          style={style}
          onClick={() => this.employeeHandler(emp.id)}
        />
      );
    });

    return (
      <div>
        <Filter />
        <div className="employeesBox">
          {modal}
          {employee}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  getCompanyInfo: state.companyInfo,
  getEmployees: state.employees,
  getError: state.error,
  filteredEmployees: state.filteredEmployees,
});

const mapDispatchToProps = dispatch => ({
  saveCompanyDetails: response => dispatch(actions.saveCompanyDetails(response)),
  toggleModal: value => dispatch(actions.displayModal(value)),
  saveError: error => dispatch(actions.logError(error)),
});

Employees.propTypes = {
  getEmployees: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
  saveCompanyDetails: PropTypes.func.isRequired,
  saveError: PropTypes.func.isRequired,
  filteredEmployees: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Employees);
