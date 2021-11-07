import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadOrders } from '../redux/kds/kds';

const Orders = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadOrders());
  }, []);

  return (
    <div>Orders Panel</div>
  );
};

export default Orders;
