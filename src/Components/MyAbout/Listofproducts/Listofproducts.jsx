/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-redeclare */
/* eslint-disable eqeqeq */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import Marquee from "../../Marquee/Marquee";

import { allProduct } from "../../../Api/product";
import { storeAction } from "../../../Store/Store";

import "./Listofproducts.css";

const Listofproducts = () => {
  const dispatch = useDispatch();
  const { categoryId } = useParams();

  const product = useSelector((state) => state.product);
  const cartdata = useSelector((state) => state.cartdata);

  const [productdata, setProductdata] = useState([]);

  useEffect(() => {
    GetAllCategory();
  }, [categoryId]);

  const GetAllCategory = async () => {
    if (product.length !== 0) {
      let filteredProduct = categoryId
        ? product.filter(
            (item) => item.category && item.category._id == categoryId
          )
        : product;

      let finalProduct = [...filteredProduct].sort(
        (a, b) => a.category !== undefined && a.category._id - b.category._id
      );

      setProductdata(finalProduct);

      const allproduct = await allProduct();
      if (allproduct.length !== 0) {
        let filteredAll = categoryId
          ? allproduct.filter(
              (item) => item.category && item.category._id == categoryId
            )
          : allproduct;

        let sortedAll = [...filteredAll].sort(
          (a, b) => a.category !== undefined && a.category._id - b.category._id
        );

        dispatch(storeAction.productHandler({ product: sortedAll }));
        setProductdata(sortedAll);
      }
    } else {
      const allproduct = await allProduct();
      if (allproduct.length !== 0) {
        let filteredAll = categoryId
          ? allproduct.filter(
              (item) => item.category && item.category._id == categoryId
            )
          : allproduct;

        let sortedAll = [...filteredAll].sort(
          (a, b) => a.category !== undefined && a.category._id - b.category._id
        );

        dispatch(storeAction.productHandler({ product: sortedAll }));
        setProductdata(sortedAll);
      }
    }
  };

  const addToCart = (data, quantity) => {
    const updatedQuantity = Number(quantity);
    let updatedCart;

    if (updatedQuantity === 0) {
      updatedCart = cartdata.filter((item) => item._id !== data._id);
    } else {
      updatedCart = cartdata.map((item) =>
        item._id === data._id ? { ...item, quantity: updatedQuantity } : item
      );

      const isInCart = cartdata.some((item) => item._id === data._id);

      if (!isInCart) {
        const newItem = {
          _id: data._id,
          name: data.name,
          offer_price: data.offer_price,
          price: data.price,
          quantity: updatedQuantity,
          image: data.image,
        };
        updatedCart.push(newItem);
      }
    }

    dispatch(storeAction.cartdataHandler({ cartdata: updatedCart }));
  };

  const calculateTotals = () => {
    let netTotal = 0;
    let totalSavings = 0;

    cartdata.forEach((item) => {
      netTotal += item.quantity * item.offer_price;
      totalSavings += item.quantity * (item.price - item.offer_price);
    });

    const overallTotal = netTotal + totalSavings;

    return { netTotal, totalSavings, overallTotal };
  };

  const { netTotal, totalSavings, overallTotal } = calculateTotals();

  return (
    <>
      <Navbar />
      <Marquee />

      {/* 🎇 Online Order Closed Notice */}
      {/* <div className="order-closed-banner">
        <h2>🎆 Online Orders Closed for 2025 Season 🎆</h2>
        <p>
          Thank you for your overwhelming support this year! Our online ordering
          is now closed. We’ll reopen next season with exciting new collections
          and festive offers.
        </p>
      </div> */}

      <div className="tables">
        {/* Totals Section */}
        <div className="tableview">
          <div className="totaldata">
            <span>
              <h3>Net Total:</h3>
              <p>Rs.{netTotal.toLocaleString("en-IN")}</p>
            </span>
            <span>
              <h3>You Save:</h3>
              <p>Rs.{totalSavings.toLocaleString("en-IN")}</p>
            </span>
            <span>
              <h3>Overall Total:</h3>
              <p>Rs.{overallTotal.toLocaleString("en-IN")}</p>
            </span>
          </div>
        </div>

        {/* Discount Section */}
        <div className="discount-container">
          <h2>75% Discount</h2>
        </div>

        {/* Product Table */}
        <table className="product_table">
          <thead>
            <tr className="table-head-row">
              <th>Image</th>
              <th>Product Name</th>
              <th>Content</th>
              <th>Actual Price</th>
              <th>Offer Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {productdata.length !== 0 ? (
              productdata.map((data, index) => {
                const cartItem = cartdata.find((item) => item._id === data._id);
                const quantity = cartItem ? cartItem.quantity : 0;
                const totalAmount =
                  quantity !== 0
                    ? cartItem
                      ? cartItem.quantity * cartItem.offer_price
                      : data.offer_price
                    : 0;

                return (
                  <tr className="table-head-row" key={index}>
                    <td>
                      <img
                        className="ordered-img"
                        src={data.image}
                        alt={data.name}
                      />
                    </td>
                    <td>{data.name}</td>
                    <td>1 BOX</td>
                    <td>
                      <del>Rs.{Number(data.price).toLocaleString("en-IN")}</del>
                    </td>
                    <td>
                      Rs.{Number(data.offer_price).toLocaleString("en-IN")}
                    </td>
                    <td>
                      <input
                        className="number-field"
                        type="number"
                        min="0"
                        value={quantity}
                        onChange={(e) => addToCart(data, e.target.value)}
                        // disabled
                      />
                    </td>
                    <td>
                      <input
                        className="total-btn"
                        type="button"
                        value={totalAmount.toLocaleString("en-IN")}
                        // disabled
                      />
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td
                  colSpan="7"
                  style={{ textAlign: "center", padding: "20px" }}
                >
                  No products available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <Footer />
    </>
  );
};

export default Listofproducts;
