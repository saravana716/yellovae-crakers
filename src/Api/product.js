import { Product } from "../axios/index";

export const allProduct = async (data) => {
  var allProduct = await Product.get(`/alldata`, data)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err.response;
    });
  return allProduct;
};
