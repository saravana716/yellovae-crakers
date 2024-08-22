// store.js
import { configureStore, createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";

// Define your slice
const StoreSlice = createSlice({
  name: "HireIn5",
  initialState: {
    cartdata: [],
    userdata: null,
    step: 1,
    paymentid: null,
    orderid: null,
    product: [],
    category: [],
    marquee: "",
  },
  reducers: {
    cartdataHandler(state, payload) {
      state.cartdata = payload.payload.cartdata;
    },
    userdataHandler(state, payload) {
      state.userdata = payload.payload.userdata;
    },
    stepHandler(state, payload) {
      state.step = payload.payload.step;
    },
    paymentidHandler(state, payload) {
      state.paymentid = payload.payload.paymentid;
    },
    orderidHandler(state, payload) {
      state.orderid = payload.payload.orderid;
    },
    productHandler(state, payload) {
      state.product = payload.payload.product;
    },
    categoryHandler(state, payload) {
      state.category = payload.payload.category;
    },
    marqueeHandler(state, payload) {
      state.marquee = payload.payload.marquee;
    },
  },
});

// Create a persisted reducer
const persistConfig = {
  key: "root",
  storage,
  whitelist: [
    "cartdata",
    "userdata",
    "paymentid",
    "orderid",
    "category",
    "product",
    "marquee",
  ],
};

const persistedReducer = persistReducer(persistConfig, StoreSlice.reducer);
const Store = configureStore({
  reducer: persistedReducer,
});
export const storeAction = StoreSlice.actions;

const persistor = persistStore(Store);

export { Store, persistor };
