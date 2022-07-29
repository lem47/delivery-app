import React from 'react';
import PropTypes from 'prop-types';

export const DeliveriesList = ({ delivery }) => (
  <div className="list-group" style={{ width: '80%' }}>
    <div className="list-group-item list-group-item-action">
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-3">
          {`ROUTE: ${delivery.cityFrom} - ${delivery.cityTo}`}
        </h5>
        <small className="text-muted">
          EDIT
        </small>
      </div>
      <p className="mb-2">
        {`PARCEL TYPE: ${delivery.parcelType}`}
      </p>
      <p className="mb-">
        {`PARCEL DESCRIPTION: ${delivery.parcelDescription}`}
      </p>
      <small className="text-muted">
        {`DATE OF DISPATCH: ${delivery.dateOfDispatch}`}
      </small>
    </div>
  </div>
);

DeliveriesList.propTypes = {
  delivery: PropTypes.shape({
    id: PropTypes.number,
    cityFrom: PropTypes.string,
    cityTo: PropTypes.string,
    parcelType: PropTypes.string,
    dateOfDispatch: PropTypes.string,
    parcelDescription: PropTypes.string,
  }),
};

DeliveriesList.defaultProps = {
  delivery: {},
};
