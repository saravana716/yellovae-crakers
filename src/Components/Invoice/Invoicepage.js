import React, { useRef } from "react";
import "./invoice.css";
import LogoImg from "../../Assets/tr.png";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { IoMdMailUnread } from "react-icons/io";
import { FiDownload } from "react-icons/fi";
import { IoArrowBackOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import moment from "moment/moment";
import { storeAction } from "../../Store/Store";
import { useNavigate } from "react-router-dom";

const Invoicepage = () => {
  const invoiceRef = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartdata = useSelector((state) => state.cartdata);
  const orderid = useSelector((state) => state.orderid);
  const userdata = useSelector((state) => state.userdata);

  const totalPrice = cartdata.reduce((total, cartItem) => {
    return total + cartItem.offer_price * cartItem.quantity;
  }, 0);

  const discountPrice = cartdata.reduce((total, cartItem) => {
    return total + cartItem.price * cartItem.quantity;
  }, 0);
  const downloadPdf = () => {
    const input = invoiceRef.current;
    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save(`${orderid.order_id}_invoice.pdf`);
    });
  };
  const backbtn = () => {
    dispatch(storeAction.cartdataHandler({ cartdata: [] }));
    dispatch(storeAction.userdataHandler({ userdata: null }));
    dispatch(storeAction.stepHandler({ step: 1 }));
    dispatch(storeAction.paymentidHandler({ paymentid: null }));
    dispatch(storeAction.orderidHandler({ orderid: null }));
    navigate("/");
  };
  return (
    <div>
      <div className="ThankingContainer">
        <h1 className="Header">Order Placed Successfully</h1>
        <div className="Buttongrp">
          <button className="DwldButton" onClick={downloadPdf}>
            Download Invoice <FiDownload className="DwldIc" />
          </button>
          <button className="backButton" onClick={backbtn}>
            <IoArrowBackOutline className="DwldIc" /> Back to Home
          </button>
        </div>
      </div>
      <div className="InvoiceDecreaseWidthContainer" ref={invoiceRef}>
        <div className="InvoiceHeaderContainer">
          <div className="LogoSideContainer">
            <img
              className="InvoiceLogo"
              src={LogoImg}
              alt="Logo"
              style={{ width: "150px", backgroundColor: "black" }}
            />
            <h2>INVOICE TO</h2>
          </div>
          <div className="InvoiceSideContainer">
            <h1 className="Invoice">INVOICE</h1>
            <div className="InvoiceDetails">
              <p className="Para">Invoice No :</p>
              <p className="Para">{orderid.order_id}</p>
            </div>

            <div className="InvoiceDetails">
              <p className="Para">Invoice Date :</p>
              <p className="Para">{moment().format("MMM Do, YYYY")}</p>
            </div>
          </div>
        </div>
        <table className="SingleTable MarginTop">
          <tbody>
            <tr>
              <td className="TdHead Para">Name :</td>
              <td className="td para">{userdata.name}</td>
            </tr>
          </tbody>
        </table>
        <table className="SingleTable">
          <tbody>
            <tr>
              <td className="TdHead Para">Phone :</td>
              <td className="td para">{userdata.phone}</td>
            </tr>
          </tbody>
        </table>
        {/* <table className="SingleTable">
          <tbody>
            <tr>
              <td className="TdHead Para">Email :</td>
              <td className="td para">{userdata.email}</td>
            </tr>
          </tbody>
        </table> */}
        <table className="SingleTable">
          <tbody>
            <tr>
              <td className="TdHead Para">Address :</td>
              <td className="td para">
                {userdata.address}, {userdata.address1}
              </td>
            </tr>
          </tbody>
        </table>
        <table className="MainTable">
          <thead>
            <tr className="MainTableHeaderRow">
              <th>DESCRIPTION</th>
              <th>PRICE</th>
              <th>OFFER PRICE</th>
              <th>QTY</th>
              <th>SUBTOTAL</th>
            </tr>
          </thead>
          <tbody>
            {cartdata.length !== 0
              ? cartdata.map((data, index) => (
                  <tr className="MainTableRow" key={index}>
                    <td>{data.name}</td>
                    <td>
                      <del>
                        {" "}
                        &#8377; {Number(data.price).toLocaleString("en-IN")}
                      </del>
                    </td>
                    <td>
                      &#8377; {Number(data.offer_price).toLocaleString("en-IN")}
                    </td>
                    <td>{data.quantity}</td>

                    <td>
                      &#8377;{" "}
                      {(
                        Number(data.quantity) * Number(data.offer_price)
                      ).toLocaleString("en-IN")}
                    </td>
                  </tr>
                ))
              : null}
          </tbody>
        </table>
        <div className="FooterSection">
          <div className="TermsAndConditionContainer">
            <h3>THANK YOU FOR YOUR BUSINESS</h3>
            <div className="SocialDetails TopSpace">
              <FaPhoneSquareAlt className="SocialIcons" />
              <p>7904202470, 7904084530</p>
            </div>
            <div className="SocialDetails">
              <IoMdMailUnread className="SocialIcons" />
              <p>geethasri408@gmail.com</p>
            </div>
          </div>
          <div className="TotalSection">
            <div className="TotalContainers">
              <h4>Subtotal :</h4>
              <p>&#8377; {Number(discountPrice).toLocaleString("en-IN")}</p>
            </div>
            <div className="TotalContainers">
              <h4>Discount :</h4>
              <p>
                - &#8377;{" "}
                {Number(discountPrice - totalPrice).toLocaleString("en-IN")}
              </p>
            </div>
            <div className="TotalBtn">
              <h4>Total :</h4>
              <p>&#8377; {Number(totalPrice).toLocaleString("en-IN")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invoicepage;
