/* eslint-disable eqeqeq */
import React, { useState } from "react";
import "./Paymentinfo.css";
import gpay from "../../../Assets/images/qrcode.jpg";
import { useDispatch, useSelector } from "react-redux";
import { storeAction } from "../../../Store/Store";
import { createOrder } from "../../../Api/order";
import { useNavigate } from "react-router-dom";

const Paymentinfo = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userdata = useSelector((state) => state.userdata);
  const cartdata = useSelector((state) => state.cartdata);
  const [paymentid, setpaymentid] = useState("");
  const [loading, setloading] = useState(false);
  const [paymentiderror, setpaymentiderror] = useState(false);
  const totalPrice = cartdata.reduce((total, cartItem) => {
    return total + cartItem.offer_price * cartItem.quantity;
  }, 0);

  const placeorder = async () => {
    setpaymentiderror(false);
    if (paymentid.length == 0) {
      setpaymentiderror(true);
    } else {
      setpaymentiderror(false);
      setloading(true);
      dispatch(storeAction.paymentidHandler({ paymentid: paymentid }));
      const generateInvoiceId = () => {
        const datePart = new Date()
          .toISOString()
          .slice(0, 10)
          .replace(/-/g, "");
        const randomPart = Math.floor(1000 + Math.random() * 9000).toString();
        return `${datePart}-${randomPart}`;
      };
      var obj = {
        order_id: generateInvoiceId(),
        user: JSON.stringify(userdata),
        total: totalPrice,
        product_data: JSON.stringify(cartdata),
        status: "Pending",
        payment_id: paymentid,
      };
      var createorder = await createOrder(obj);
      if (createorder.message == "SUCCESS") {
        setloading(false);
        dispatch(storeAction.orderidHandler({ orderid: createorder.data }));
        navigate("/invoice");
      } else {
        setloading(false);
      }
    }
  };
  return (
    <>
      <div className="checkOut1">
        <div className="checkOut1inner">
          <div className="checkoutinnerleft">
            <span>
              <p>2</p>
            </span>
            <h4>Payment Details</h4>
          </div>
          {/* <FaCaretDown className="downicon" /> */}
        </div>
        <div className="payment1">
          <div className="payment2">
            <div className="payment3">
              <div className="paymentdetails">
                <h2>Bank Account Details</h2>

                <div className="Acc">
                  <h3>Account Holder Name </h3>
                  <p>
                    <span>:</span>LUCKY STAR AGENCIES
                  </p>
                </div>
                <div className="Acc">
                  <h3>Account Number </h3>
                  <p>
                    <span>:</span>1261280000000920
                  </p>
                </div>

                <div className="Acc">
                  <h3>Bank </h3>
                  <p>
                    <span>:</span>The Karur Vysya Bank
                  </p>
                </div>
                <div className="Acc">
                  <h3>Branch </h3>
                  <p>
                    <span>:</span>SIVAKASI
                  </p>
                </div>
                <div className="Acc">
                  <h3>IFSC Code </h3>
                  <p>
                    <span>:</span>KVBL0001261
                  </p>
                </div>
                <div className="Acc">
                  <h3>UPI ID </h3>
                  <p>
                    <span>:</span>hhi050844@okaxis
                  </p>
                </div>
              </div>
              <div className="paymentdetails1">
                <h1>Sivakasi Yellovae Crackers</h1>
                <div className="scan">
                  <div className="scanner">
                    <img src={gpay} alt="" />
                    {/* <div className="childrengpay">
                      <img src={gpay} alt="" />
                    </div> */}
                  </div>
                  <div className="scanid">
                    <h4>Enter Your Transaction ID</h4>
                    <input
                      type="text"
                      onChange={(e) => {
                        setpaymentid(e.target.value);
                      }}
                    />
                    {paymentiderror && (
                      <p className="erromsg">Please Enter Transaction ID</p>
                    )}
                    {loading == false ? (
                      <button onClick={placeorder}>Continue</button>
                    ) : (
                      <button>Please wait...</button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Paymentinfo;
