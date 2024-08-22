import { Marquee } from "../axios";


export const MarqueeviewByid = async (data) => {
  var MarqueeviewByid = await Marquee.post(`/viewByid`, data)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err.response;
    });
  return MarqueeviewByid;
};

