import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { EditDeliveryForm } from '../EditDeliveryForm/EditDeliveryForm';

export const DeliveriesList = ({
  delivery,
  setEditing,
  editDelivery,
  deleteDelivery,
}) => {
  const [editable, setEditable] = useState(false);

  return (
    <div className="list-group" style={{ width: '80%' }}>
      {editable ? (
        <div
          className="list-group-item border-warning mt-4"
        >
          <EditDeliveryForm
            delivery={delivery}
            editDelivery={editDelivery}
            deleteDelivery={deleteDelivery}
            setEditable={setEditable}
            setEditing={setEditing}
          />
        </div>
      ) : (
        <>
          <div className="list-group-item list-group-item-action">
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-3">
                ROUTE:
                <br />
                {`${delivery.cityFrom} - ${delivery.cityTo}`}
              </h5>
              <button
                type="button"
                className="btn btn-outline-warning mt-2"
                style={{
                  height: 35, fontSize: 15,
                }}
                onClick={() => {
                  setEditable(true);
                  setEditing(true);
                }}
              >
                EDIT
              </button>
            </div>
            <p className="mb-1">
              {`PARCEL TYPE: ${delivery.parcelType}`}
            </p>
            <p className="mb-2">
              {`PARCEL DESCRIPTION: ${delivery.parcelDescription}`}
            </p>
            <small className="text-muted">
              {`DATE OF DISPATCH: ${delivery.dateOfDispatch}`}
            </small>
          </div>
        </>
      )}
    </div>
  );
};

DeliveriesList.propTypes = {
  delivery: PropTypes.shape({
    id: PropTypes.number,
    cityFrom: PropTypes.string,
    cityTo: PropTypes.string,
    parcelType: PropTypes.string,
    dateOfDispatch: PropTypes.string,
    parcelDescription: PropTypes.string,
  }),
  setEditing: PropTypes.func,
  editDelivery: PropTypes.func,
  deleteDelivery: PropTypes.func,
};

DeliveriesList.defaultProps = {
  delivery: {},
  setEditing: () => {},
  editDelivery: () => {},
  deleteDelivery: () => {},
};
