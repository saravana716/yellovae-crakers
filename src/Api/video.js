import { Video } from "../axios/index";

export const allVideo = async (data) => {
  var allVideo = await Video.get(`/alldata`, data)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err.response;
    });
  return allVideo;
};
