import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const EditDeliveryForm = ({
  delivery,
  editDelivery,
  deleteDelivery,
  setEditable,
  setEditing,
}) => {
  const [cityFrom, setCityFrom] = useState(delivery.cityFrom);
  const [cityTo, setCityTo] = useState(delivery.cityTo);
  const [parcelType, setParcelType] = useState(delivery.parcelType);
  const [dateOfDispatch, setDateOfDispatch] = useState(delivery.dateOfDispatch);
  const [
    parcelDescription,
    setParcelDescription,
  ] = useState(delivery.parcelDescription);
  const [confirmDelete, setConfirmDelete] = useState(false);

  return (
    <form
      onSubmit={() => {
        editDelivery(
          delivery.id,
          cityFrom,
          cityTo,
          parcelType,
          dateOfDispatch,
          parcelDescription,
        );
        setEditable(false);
        setEditing(false);
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
          list="cities"
          placeholder="City"
          defaultValue={cityFrom}
          onChange={(event) => {
            setCityFrom(event.target.value);
          }}
          pattern="Kyiv|Lviv|Odessa|Kharkiv|Dnipro"
          autoComplete="off"
          required
        />
        <datalist id="cities">
          <option>Kyiv</option>
          <option>Lviv</option>
          <option>Odessa</option>
          <option>Kharkiv</option>
          <option>Dnipro</option>
        </datalist>
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
          list="cities"
          placeholder="City"
          value={cityTo}
          onChange={(event) => {
            setCityTo(event.target.value);
          }}
          pattern="Kyiv|Lviv|Odessa|Kharkiv|Dnipro"
          autoComplete="off"
          required
        />
        <datalist id="cities">
          <option>Kyiv</option>
          <option>Lviv</option>
          <option>Odessa</option>
          <option>Kharkiv</option>
          <option>Dnipro</option>
        </datalist>
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
          value={dateOfDispatch}
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
          Parcel
          <br />
          description
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

      {confirmDelete ? (
        <>
          <h5
            className="mb-3"
            style={{ textAlign: 'center' }}
          >
            ARE YOU SURE?
          </h5>
          <div
            className="btn-group mb-2"
            role="group"
            style={{ width: '100%' }}
          >
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => {
                deleteDelivery(delivery.id);
                setEditable(false);
                setEditing(false);
              }}
            >
              YES
            </button>
            <button
              type="button"
              className="btn btn-success"
              onClick={() => {
                setConfirmDelete(false);
              }}
            >
              NO
            </button>
          </div>
        </>
      ) : (
        <>
          <button
            type="submit"
            className="btn btn-success mb-3"
            style={{ width: '100%' }}
          >
            SAVE
          </button>
          <button
            type="button"
            className="btn btn-outline-danger mb-2"
            style={{ width: '100%' }}
            onClick={() => {
              setConfirmDelete(true);
            }}
          >
            DELETE
          </button>
        </>
      )}
    </form>
  );
};

EditDeliveryForm.propTypes = {
  delivery: PropTypes.shape({
    id: PropTypes.number,
    cityFrom: PropTypes.string,
    cityTo: PropTypes.string,
    parcelType: PropTypes.string,
    dateOfDispatch: PropTypes.string,
    parcelDescription: PropTypes.string,
  }),
  editDelivery: PropTypes.func,
  deleteDelivery: PropTypes.func,
  setEditable: PropTypes.func,
  setEditing: PropTypes.func,
};

EditDeliveryForm.defaultProps = {
  delivery: {},
  editDelivery: () => {},
  deleteDelivery: () => {},
  setEditable: () => {},
  setEditing: () => {},
};
