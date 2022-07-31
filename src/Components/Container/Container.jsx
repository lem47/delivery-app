import React, { useState } from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { DeliveriesList } from '../DeliveriesList/DeliveriesList';
import { ModalAddForm } from '../Modal/ModalAddForm';
import { Spinner } from '../Spinner/Spinner';
import './Container.scss';

export const Container = () => {
  const [deliveries, setDelivery] = useLocalStorage([], 'deliveries');
  const [editing, setEditing] = useState(false);

  const addDelivery = (
    cityFrom,
    cityTo,
    parcelType,
    dateOfDispatch,
    parcelDescription,
  ) => {
    const newDelivery = {
      id: deliveries.length + 1,
      cityFrom,
      cityTo,
      parcelType,
      dateOfDispatch,
      parcelDescription,
    };

    setDelivery([newDelivery, ...deliveries]);
  };

  const editDelivery = (
    id,
    cityFrom,
    cityTo,
    parcelType,
    dateOfDispatch,
    parcelDescription,
  ) => {
    const editedDelivery = {
      id,
      cityFrom,
      cityTo,
      parcelType,
      dateOfDispatch,
      parcelDescription,
    };

    setDelivery(
      deliveries.map((delivery) => {
        if (delivery.id !== id) {
          return delivery;
        }

        return editedDelivery;
      }),
    );
  };

  const deleteDelivery = (id) => {
    setDelivery(
      deliveries.filter(delivery => delivery.id !== id),
    );
  };

  return (
    <div className="Container">
      {!editing && (
        <>
          <h2 className="Container__title">
            My deliveries
          </h2>
          <ModalAddForm addDelivery={addDelivery} />
        </>
      )}
      {deliveries ? (
        deliveries.map(delivery => (
          <DeliveriesList
            key={delivery.id}
            delivery={delivery}
            setEditing={setEditing}
            editDelivery={editDelivery}
            deleteDelivery={deleteDelivery}
          />
        ))
      ) : (
        <Spinner />
      )}
    </div>
  );
};
