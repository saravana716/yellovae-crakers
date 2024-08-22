/* eslint-disable no-redeclare */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import "./Ctegories.css";
import { allCategory } from "../../Api/category";
import { useDispatch, useSelector } from "react-redux";
import { storeAction } from "../../Store/Store";

const Categories = () => {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.category);
  const [categorydata, setcategorydata] = useState([]);
  useEffect(() => {
    Getallcategory();
  }, []);
  const Getallcategory = async () => {
    if (category.length !== 0) {
      setcategorydata(category);
      var allcategory = await allCategory();
      if (allcategory.length !== 0) {
        setcategorydata(allcategory.slice(0, 5));
        dispatch(
          storeAction.categoryHandler({ category: allcategory.slice(0, 5) })
        );
      }
    } else {
      var allcategory = await allCategory();
      if (allcategory.length !== 0) {
        setcategorydata(allcategory.slice(0, 5));
        dispatch(
          storeAction.categoryHandler({ category: allcategory.slice(0, 5) })
        );
      }
    }
  };
  return (
    <>
      <div className="Categories">
        <div className="categories1">
          <h1>
            Featured <span>Categories</span>
          </h1>
          <div className="Categories4">
            {categorydata.length !== 0
              ? categorydata.map((data, index) => (
                  <div className="Categories2" key={index}>
                    <div className="Categories3">
                      <img src={data.image} alt="" />
                    </div>
                    <h2>{data.name}</h2>
                  </div>
                ))
              : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
