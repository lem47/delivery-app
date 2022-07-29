import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddDeliveryForm = ({ addDelivery }) => {
  const [cityFrom, setCityFrom] = useState('');
  const [cityTo, setCityTo] = useState('');
  const [parcelType, setParcelType] = useState('');
  const [dateOfDispatch, setDateOfDispatch] = useState('');
  const [parcelDescription, setParcelDescription] = useState('');

  return (
    <form
      onSubmit={() => {
        addDelivery(
          cityFrom,
          cityTo,
          parcelType,
          dateOfDispatch,
          parcelDescription,
        );
        setCityFrom('');
        setCityTo('');
        setParcelType('');
        setDateOfDispatch('');
        setParcelDescription('');
      }}
    >
      <div className="mb-3">
        <label
          htmlFor="cityFrom"
          className="form-label"
        >
          Deliver from...
        </label>
        <input
          type="text"
          className="form-control"
          id="cityFrom"
          placeholder="City"
          defaultValue={cityFrom}
          onChange={(event) => {
            setCityFrom(event.target.value);
          }}
          required
        />
      </div>

      <div className="mb-3">
        <label
          htmlFor="cityTo"
          className="form-label"
        >
          Deliver to...
        </label>
        <input
          type="text"
          className="form-control"
          id="cityTo"
          placeholder="City"
          value={cityTo}
          onChange={(event) => {
            setCityTo(event.target.value);
          }}
          required
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="dateOfDispatch"
          className="form-label"
        >
          Choose date of dispatch
        </label>
        <input
          type="date"
          className="form-control"
          id="dateOfDispatch"
          min="2022-08-01"
          max="2022-12-31"
          onChange={(event) => {
            setDateOfDispatch(event.target.value);
          }}
          required
        />
      </div>

      <div className="input-group mb-4">
        <label
          className="input-group-text"
          htmlFor="inputGroupSelect01"
        >
          Parcel type
        </label>
        <select
          className="form-select"
          id="inputGroupSelect01"
          value={parcelType}
          onChange={(event) => {
            setParcelType(event.target.value);
          }}
          required
        >
          <option value="" disabled>Choose...</option>
          <option value="Gadgets">Gadgets</option>
          <option value="Drinks">Drinks</option>
          <option value="Clothes">Clothes</option>
          <option value="Medicines">Medicines</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div className="input-group mb-4">
        <span className="input-group-text">
          Parcel description
        </span>
        <textarea
          className="form-control"
          aria-label="With textarea"
          value={parcelDescription}
          onChange={(event) => {
            setParcelDescription(event.target.value);
          }}
          required
        />
      </div>

      <button
        type="submit"
        className="btn btn-outline-success"
        style={{ width: '100%' }}
      >
        Apply
      </button>
    </form>
  );
};

AddDeliveryForm.propTypes = {
  addDelivery: PropTypes.func,
};

AddDeliveryForm.defaultProps = {
  addDelivery: () => {},
};
