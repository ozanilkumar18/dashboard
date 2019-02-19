import React from 'react';
import PropTypes from 'prop-types';
import './modal.css';

const Modal = (props) => {
  const {
    onClose, image, description, firstName, lastName, jobTitle, age, joinedDate,
  } = props;
  return (
    <div className="modalWindow">
      <div onClick={onClose} className="close" aria-hidden="true">
        &times;
      </div>
      <div className="border">
        <div className="row1">
          <img src={image} alt={firstName} />
          <div>
            <h3>
              {firstName}
              {' '}
              {lastName}
            </h3>
          </div>
        </div>
        <div className="modalInner">
          <div className="modalInner1">
            <h5>{jobTitle}</h5>
            <h5>{age}</h5>
            <h5>{joinedDate}</h5>
          </div>
          <div className="description">{description}</div>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  jobTitle: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  joinedDate: PropTypes.string.isRequired,
};

export default Modal;
