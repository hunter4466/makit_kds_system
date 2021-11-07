// ---------------- paths (Data) --------------------
const TRIGGER_PRODUCTS = 'REDUX/KDS/KDS/TRIGGER_PRODUCTS';
const UPLOAD_PRODUCTS = 'REDUX/KDS/KDS/UPLOAD_PRODUCTS';

// ---------------- Actions (Data) ------------------
const loadOrders = () => ({
  type: TRIGGER_PRODUCTS,
});
const uploadProducts = (payload) => ({
  type: UPLOAD_PRODUCTS,
  payload,
});
// ----------------- REDUCERS ------------
const kdsMainServiceReducer = (state = [], action) => {
  const parseInfoFunc = (array) => {
    const arrayToParse = [];
    array.forEach((e) => {
      e.order_detail = JSON.parse(e.order_detail);
      arrayToParse.push(e);
    });
    return arrayToParse;
  };

  switch (action.type) {
    case TRIGGER_PRODUCTS:
      return state;
    case UPLOAD_PRODUCTS:
      return parseInfoFunc(action.payload);
    default:
      return state;
  }
};

// ---------------- Middlewares and Side Effects --------------
const fetchOrdersMiddleware = (store) => (next) => (action) => {
  if (action.type === TRIGGER_PRODUCTS) {
    fetch('https://www.makitperu.com/getlastweekorders', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Access-Control-Allow-Origin': '*',
      },
      cors: 'no-cors',
    }).then((response) => response.json())
      .then((json) => store.dispatch(uploadProducts(json)));
  }
  next(action);
};
// ---------------- Exports --------------
export {
  // ------ Reducers -------
  kdsMainServiceReducer,
  // ------ Actions (Data) --------
  loadOrders,
  uploadProducts,
  // ---- Middlewares -----
  fetchOrdersMiddleware,
};
