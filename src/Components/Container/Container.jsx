import React from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { DeliveriesList } from '../DeliveriesList/DeliveriesList';
import { ModalAddForm } from '../Modal/ModalAddForm';
import { Spinner } from '../Spinner/Spinner';
import './Container.scss';

export const Container = () => {
  const [deliveries, setDelivery] = useLocalStorage([], 'deliveries');

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

  return (
    <div className="Container">
      <h2 className="Container__title">
        My deliveries
      </h2>
      <ModalAddForm addDelivery={addDelivery} />
      {deliveries ? (
        deliveries.map(delivery => (
          <DeliveriesList
            key={delivery.id}
            delivery={delivery}
          />
        ))
      ) : (
        <Spinner />
      )}
    </div>
  );
};
