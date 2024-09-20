import React, { useEffect, useState } from "react";
import "./Category.css";
import { allCategory } from "../../Api/category";
import { useNavigate } from "react-router-dom";

const Category = () => {
  const navigate = useNavigate();
  const [categorydata, setcategorydata] = useState([]);
  useEffect(() => {
    Getcategory();
  }, []);
  const Getcategory = async () => {
    var allcategorydata = await allCategory();
    setcategorydata(allcategorydata);
  };
  const selectCategory = (id) => {
    navigate(`/products/${id}`);
  };
  return (
    <>
      {categorydata.length !== 0
        ? categorydata.map((data, index) => (
            <div
              className="Category_cart"
              key={index}
              onClick={() => {
                selectCategory(data._id);
              }}
            >
              <h1>{data.name}</h1>
              <div className="cate-images">
                <img src={data.image} alt="" />
              </div>
              <p></p>
            </div>
          ))
        : null}
    </>
  );
};

export default Category;
