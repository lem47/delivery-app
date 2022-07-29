import React from 'react';
import PropTypes from 'prop-types';
import { AddDeliveryForm } from '../AddDeliveryForm/AddDeliveryForm';

export const ModalAddForm = ({ addDelivery }) => (
  <>
    <button
      type="button"
      className="btn btn-outline-success"
      data-bs-toggle="modal"
      data-bs-target="#staticBackdrop"
      style={{ width: '80%' }}
    >
      ADD NEW DELIVERY
    </button>
    <div
      className="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5
              className="modal-title"
              id="staticBackdropLabel"
            >
              New delivery
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            <AddDeliveryForm addDelivery={addDelivery} />
          </div>
        </div>
      </div>
    </div>
  </>
);

ModalAddForm.propTypes = {
  addDelivery: PropTypes.func,
};

ModalAddForm.defaultProps = {
  addDelivery: () => {},
};
