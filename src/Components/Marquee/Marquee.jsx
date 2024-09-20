/* eslint-disable no-redeclare */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/no-distracting-elements */
import React, { useEffect, useState } from "react";
import "./Marquee.css";
import { MarqueeviewByid } from "../../Api/marquee";
import { useDispatch, useSelector } from "react-redux";
import { storeAction } from "../../Store/Store";

const Marquee = () => {
  const dispatch = useDispatch();
  const marquee = useSelector((state) => state.marquee);
  const [marqueevalue, setmarqueevalue] = useState("");
  useEffect(() => {
    Getalldata();
  }, []);
  const Getalldata = async () => {
    if (marquee.length !== 0) {
      setmarqueevalue(marquee);
      var data = await MarqueeviewByid({ id: "66ed61900f7e68e2099758f2" });
      if (data.length !== 0) {
        setmarqueevalue(data.data.marquee);
        dispatch(storeAction.marqueeHandler({ marquee: data.data.marquee }));
      }
    } else {
      var data = await MarqueeviewByid({ id: "66ed61900f7e68e2099758f2" });
      if (data.length !== 0) {
        dispatch(storeAction.marqueeHandler({ marquee: data.data.marquee }));
        setmarqueevalue(data.data.marquee);
      }
    }
  };
  return (
    <>
      <marquee
        width="100%"
        direction="left"
        height="60px"
        background-color="red"
      >
        <h1>{marqueevalue}</h1>
      </marquee>
    </>
  );
};

export default Marquee;
