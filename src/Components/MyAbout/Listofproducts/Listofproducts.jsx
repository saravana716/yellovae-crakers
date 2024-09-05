/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-redeclare */
/* eslint-disable eqeqeq */
import React, { useEffect, useState } from "react";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import "./Listofproducts.css";
import Marquee from "../../Marquee/Marquee";
import { allProduct } from "../../../Api/product";
import { useDispatch, useSelector } from "react-redux";
import { storeAction } from "../../../Store/Store";
import { useParams } from "react-router-dom"; // Import for accessing URL params

const Listofproducts = () => {
  const dispatch = useDispatch();
  const { categoryId } = useParams(); // Grab the categoryId from the URL
  const product = useSelector((state) => state.product);
  const cartdata = useSelector((state) => state.cartdata);
  const [productdata, setproductdata] = useState([]);

  useEffect(() => {
    GetallCategory();
  }, [categoryId]); // Re-run when categoryId changes

  const GetallCategory = async () => {
    if (product.length !== 0) {
      let filteredProduct = categoryId
        ? product.filter(
            (item) => item.category && item.category.id == categoryId
          )
        : product;
      var finalproduct = [...filteredProduct].sort(
        (a, b) => a.category !== undefined && a.category.id - b.category.id
      );
      setproductdata(finalproduct);
      var allproduct = await allProduct();
      if (allproduct.length !== 0) {
        let filteredProduct = categoryId
          ? allproduct.filter(
              (item) => item.category && item.category.id == categoryId
            )
          : allproduct;
        var sortedAllProduct = [...filteredProduct].sort(
          (a, b) => a.category !== undefined && a.category.id - b.category.id
        );
        dispatch(storeAction.productHandler({ product: sortedAllProduct }));
        setproductdata(sortedAllProduct);
      }
    } else {
      var allproduct = await allProduct();
      if (allproduct.length !== 0) {
        let filteredProduct = categoryId
          ? allproduct.filter(
              (item) => item.category && item.category.id == categoryId
            )
          : allproduct;
        var sortedAllProduct = [...filteredProduct].sort(
          (a, b) => a.category !== undefined && a.category.id - b.category.id
        );
        dispatch(storeAction.productHandler({ product: sortedAllProduct }));
        setproductdata(sortedAllProduct);
      }
    }
  };

  const addtocart = (data, quantity) => {
    const updatedQuantity = Number(quantity);
    let updatedCart;

    if (updatedQuantity === 0) {
      updatedCart = cartdata.filter((item) => item.id !== data.id);
    } else {
      updatedCart = cartdata.map((item) => {
        if (item.id === data.id) {
          return { ...item, quantity: updatedQuantity };
        }
        return item;
      });

      const isProductInCart = cartdata.some((item) => item.id === data.id);
      if (!isProductInCart) {
        const newItem = {
          id: data.id,
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

    return {
      netTotal,
      totalSavings,
      overallTotal,
    };
  };

  const { netTotal, totalSavings, overallTotal } = calculateTotals();

  return (
    <>
      <Navbar />
      <Marquee />
      <>
        <div className="tables">
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

          <table className="product_table">
            <tr className="table-head-row">
              <th className="table-head-1">Image</th>
              <th className="table-head-2">Product Name: </th>
              <th className="table-head-3">Content: </th>
              <th className="4">Actual Price </th>
              <th className="table-head-5">Price </th>
              <th className="table-head-6">Quantity </th>
              <th className="table-head-7">Total </th>
            </tr>
          </table>

          <div className="discount-container">
            <h2>Sparklers (80% Discount)</h2>
          </div>

          <table className="product_table">
            {productdata.length !== 0
              ? productdata.map((data, index) => {
                  const cartItem = cartdata.find((item) => item.id === data.id);
                  const quantity = cartItem ? cartItem.quantity : 0;

                  const totalAmount =
                    quantity !== 0
                      ? cartItem
                        ? cartItem.quantity * cartItem.offer_price
                        : data.offer_price
                      : 0;

                  return (
                    <tr className="table-head-row" key={index}>
                      <td className="table-head-1">
                        <img className="ordered-img" src={data.image} alt="" />
                      </td>
                      <td className="table-head-2">{data.name}</td>
                      <td className="table-head-3">1 PCS</td>
                      <td className="4">
                        <del>
                          Rs.{Number(data.price).toLocaleString("en-IN")}
                        </del>
                      </td>
                      <td className="table-head-5">
                        Rs.{Number(data.offer_price).toLocaleString("en-IN")}
                      </td>
                      <td className="table-head-6">
                        <input
                          className="number-field"
                          type="number"
                          value={quantity}
                          onChange={(e) => addtocart(data, e.target.value)}
                        />
                      </td>
                      <td className="table-head-7">
                        <input
                          className="total-btn"
                          type="button"
                          value={totalAmount.toLocaleString("en-IN")}
                        />
                      </td>
                    </tr>
                  );
                })
              : null}
          </table>
        </div>
      </>
      <Footer />
    </>
  );
};

export default Listofproducts;
