import React from "react";
import "./Carts.css";
import { useDispatch, useSelector } from "react-redux";
import { storeAction } from "../../Store/Store";

const Carts = ({ item }) => {
  const dispatch = useDispatch();
  const cartdata = useSelector((state) => state.cartdata);

  const isInCart = cartdata.some((cartItem) => cartItem.id === item.id);
  const cartItem = isInCart
    ? cartdata.find((cartItem) => cartItem.id === item.id)
    : null;

  const addtocart = async (data) => {
    const newItem = {
      id: data.id,
      name: data.name,
      offer_price: data.offer_price,
      price: data.price,
      quantity: 1,
      image: data.image,
    };

    dispatch(storeAction.cartdataHandler({ cartdata: [...cartdata, newItem] }));
  };

  const removeFromCart = (productId) => {
    const updatedCartdata = cartdata.filter((item) => item.id !== productId);
    dispatch(storeAction.cartdataHandler({ cartdata: updatedCartdata }));
  };

  const decreaseQuantity = (productId) => {
    const updatedCartdata = cartdata.map((item) => {
      if (item.id === productId && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });

    dispatch(storeAction.cartdataHandler({ cartdata: updatedCartdata }));
  };

  const increaseQuantity = (productId) => {
    const updatedCartdata = cartdata.map((item) => {
      if (item.id === productId) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });

    dispatch(storeAction.cartdataHandler({ cartdata: updatedCartdata }));
  };

  return (
    <div className="Carts">
      <div className="cartstop">
        <div className="Cartinnerimg">
          <img src={item.image} alt="" />
          <h2>
            {`Save : ${Math.round(
              ((item.price - item.offer_price) / item.price) * 100
            )}%`}
          </h2>
        </div>
        <div className="Cartinnercontent">
          <h4>{item.name}</h4>
          <div className="cartcount">
            <div className="cart12">
              <span>
                <h4>Rs.{Number(item.offer_price).toLocaleString("en-IN")}</h4>{" "}
                <del>Rs.{Number(item.price).toLocaleString("en-IN")}</del>
              </span>
            </div>
            {isInCart && (
              <div className="cartqty">
                <div className="incre">
                  <p onClick={() => decreaseQuantity(item.id)}>-</p>
                  <p>{cartItem.quantity}</p>
                  <p onClick={() => increaseQuantity(item.id)}>+</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {!isInCart && (
        <button onClick={() => addtocart(item)}>Add to Cart</button>
      )}
      {isInCart && (
        <button onClick={() => removeFromCart(item.id)}>
          Remove from Cart
        </button>
      )}
    </div>
  );
};

export default Carts;
