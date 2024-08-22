/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-redeclare */
/* eslint-disable eqeqeq */
import React, { useEffect, useState } from "react";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import "./Listofproducts.css";
import Marquee from "../../Marquee/Marquee";
import Carts from "../../../Reusable/Carts/Carts";
import { allCategory } from "../../../Api/category";
import { allProduct } from "../../../Api/product";
import { useDispatch, useSelector } from "react-redux";
import { storeAction } from "../../../Store/Store";

const Listofproducts = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  const category = useSelector((state) => state.category);
  const [allcategorydata, setallcategorydata] = useState([]);
  const [allproductdata, setallproductdata] = useState([]);
  const [productdata, setproductdata] = useState([]);
  const [categoryid, setcategoryid] = useState(null);
  const [type, settype] = useState(null);
  useEffect(() => {
    GetallCategory();
  }, []);
  const GetallCategory = async () => {
    if (category.length !== 0) {
      setallcategorydata(category);
      var allcategory = await allCategory();
      if (allcategory.length !== 0) {
        setallcategorydata(allcategory);
        dispatch(storeAction.categoryHandler({ category: allcategory }));
      }
    } else {
      var allcategory = await allCategory();
      if (allcategory.length !== 0) {
        setallcategorydata(allcategory);
        dispatch(storeAction.categoryHandler({ category: allcategory }));
      }
    }
    if (product.length !== 0) {
      // Create a shallow copy of the product array and then sort it
      var finalproduct = [...product].sort(
        (a, b) => a.category.id - b.category.id
      );
      console.log(finalproduct, "finalproduct");

      // Update state with the sorted product array
      setallproductdata(finalproduct);
      setproductdata(finalproduct);

      // Fetch all products
      var allproduct = await allProduct();
      if (allproduct.length !== 0) {
        // Create a shallow copy of the allproduct array and then sort it
        var sortedAllProduct = [...allproduct].sort(
          (a, b) => a.category.id - b.category.id
        );
        dispatch(storeAction.productHandler({ product: sortedAllProduct }));
        setallproductdata(sortedAllProduct);
        setproductdata(sortedAllProduct);
      }
    } else {
      // Fetch all products
      var allproduct = await allProduct();
      if (allproduct.length !== 0) {
        // Create a shallow copy of the allproduct array and then sort it
        var sortedAllProduct = [...allproduct].sort(
          (a, b) => a.category.id - b.category.id
        );
        dispatch(storeAction.productHandler({ product: sortedAllProduct }));
        setallproductdata(sortedAllProduct);
        setproductdata(sortedAllProduct);
      }
    }
  };
  const selectcate = async (id) => {
    var filterdata = await allproductdata.filter((data) => {
      return data.category.id == id;
    });
    setproductdata(filterdata);
    setcategoryid(id);
  };
  const changetype = async (type) => {
    setproductdata([]);
    settype(type);
    if (type == "Price High to Low") {
      var sortdata = await allproductdata.sort((a, b) => {
        return b.offer_price - a.offer_price;
      });
      setTimeout(() => {
        setproductdata(sortdata);
      }, 1);
    } else if (type == "Price Low to High") {
      var sortdata1 = await allproductdata.sort((a, b) => {
        return a.offer_price - b.offer_price;
      });
      setTimeout(() => {
        setproductdata(sortdata1);
      }, 1);
    }
  };
  return (
    <>
      <Navbar />
      <Marquee />
      <div className="List1">
        <div className="List2">
          <div className="List3">
            <div className="Search">
              <div className="filteroption">
                <div className="filtersort">
                  <h2>Product Categories</h2>
                  <p
                    className="headingclear"
                    onClick={() => {
                      setproductdata(allproductdata);
                      setcategoryid(null);
                    }}
                  >
                    Clear
                  </p>
                </div>
                <div className="filteroption1">
                  {allcategorydata.length !== 0
                    ? allcategorydata.map((data, index) => (
                        <span
                          key={index}
                          onClick={() => {
                            selectcate(data.id);
                            settype("");
                          }}
                        >
                          {data.name}
                          <input
                            type="radio"
                            id={data.name}
                            name={data.name}
                            value={data.name}
                            checked={categoryid == data.id}
                          />
                        </span>
                      ))
                    : null}
                </div>
              </div>
              <div className="filteroption">
                <div className="filtersort">
                  <h2>Sort By</h2>
                  <p
                    className="headingclear"
                    onClick={() => {
                      setproductdata(allproductdata);
                      settype("");
                    }}
                  >
                    Clear
                  </p>
                </div>
                <div className="filteroption1">
                  <span
                    onClick={() => {
                      changetype("Price High to Low");
                      selectcate(null);
                    }}
                  >
                    Price High to Low
                    <input
                      type="radio"
                      name="crakers"
                      checked={type == "Price High to Low"}
                    />
                  </span>
                  <span
                    onClick={() => {
                      changetype("Price Low to High");
                      selectcate(null);
                    }}
                  >
                    Price Low to High
                    <input
                      type="radio"
                      name="crakers"
                      checked={type == "Price Low to High"}
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="List4">
            <h1>List of Products</h1>
            <div className="Listpro">
              <p>
                Enter the quantity of your required crackers and complete your
                booking.
              </p>
              <h4>
                Showing Total {productdata.length}
                {productdata.length == 1 ? " Product" : " Products"}
              </h4>
            </div>
            <div className="listcarts123">
              {productdata.length !== 0
                ? productdata.map((item, index) => (
                    <Carts key={index} item={item} />
                  ))
                : null}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Listofproducts;
