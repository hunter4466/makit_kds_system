import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadOrders } from '../redux/kds/kds';

const Orders = () => {
  const dispatch = useDispatch();
  const infoContent = useSelector((state) => state.kdsMainServiceReducer);
  let count = 0;
  const fetchFunc = () => {
    if (count === 120) {
      window.location.reload(false);
    }
    count += 1;
    dispatch(loadOrders());
    setTimeout(() => {
      fetchFunc();
    }, 5000);
  };
  useEffect(() => {
    fetchFunc();
  }, []);

  const evaluator = (type, quant) => {
    if (type === 'makis') {
      const flt = parseFloat(quant);
      return flt / 2;
    }
    return quant;
  };

  return (
    <div className="orders_general_container">
      {infoContent.map((e) => (
        <div className="order_main_container" key={e.idordenes}>
          <div className="order_sub_main_container">
            <div>{e.fecha_orden}</div>
            <h1 className="customer_name">{e.order_detail.customername}</h1>
            {e.order_detail.ordercontent.map((a) => (
              <div className="order_content_container" key={a.code}>
                <h1 className="order_product_header">{a.header}</h1>
                {a.content.map((b) => (
                  <div className="order_sub_product_container" key={b.header}>
                    <h1 className="order_sub_product_header">{b.header}</h1>
                    {b.content.map((c) => (
                      <div className="order_sub_sub_product_container" key={c.name}>
                        {c.quantity > 0 ? (
                          <h2 className="order_sub_sub_product_content">
                            {c.name}
                            {' x '}
                            {evaluator(b.header, c.quantity)}
                          </h2>
                        ) : ''}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Orders;
