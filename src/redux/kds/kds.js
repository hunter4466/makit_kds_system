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
  switch (action.type) {
    case TRIGGER_PRODUCTS:
      return state;
    case UPLOAD_PRODUCTS:
      return action.payload;
    default:
      return state;
  }
};

// ---------------- Middlewares and Side Effects --------------
const fetchOrdersMiddleware = () => (next) => (action) => {
  if (action.type === TRIGGER_PRODUCTS) {
    const myHeaders = new Headers();
    myHeaders.append('Cookie', 'sid=s%3Aho9ke1YMr9GSnUyJdD1ixSrhXxK1HfCj.DQCnOuVkblXY4uLmmVzwS%2FRww23%2FLP0cAN4Gix8oi6I');

    const requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
    };

    fetch('https://www.makitperu.com/getlastweekorders', requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log('error', error));
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
