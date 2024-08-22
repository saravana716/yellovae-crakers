import { Order } from "../axios/index";

export const createOrder = async (data) => {
  var createOrder = await Order.post(`/create`, data)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err.response;
    });
  return createOrder;
};
