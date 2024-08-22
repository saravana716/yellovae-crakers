import { Category } from "../axios/index";

export const allCategory = async (data) => {
  var allCategory = await Category.get(`/alldata`, data)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err.response;
    });
  return allCategory;
};
