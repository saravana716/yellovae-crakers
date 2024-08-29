import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@mui/material";
import { MdDeleteOutline } from "react-icons/md";
import "./Producttable.css";
import { useDispatch, useSelector } from "react-redux";
import { storeAction } from "../../Store/Store";

const ProductTable = () => {
  const dispatch = useDispatch();
  const cartdata = useSelector((state) => state.cartdata);

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
  const removeFromCart = (productId) => {
    const updatedCartdata = cartdata.filter((item) => item.id !== productId);
    dispatch(storeAction.cartdataHandler({ cartdata: updatedCartdata }));
  };
  return (
    <>
      <div className="tablestate">
        <div className="tablestate1">
          <h1>My Cart</h1>
          <p>Minimumorder value is &#8377; 2000</p>
        </div>
        <h5>Showing of {cartdata.length} carted items</h5>
      </div>
      <TableContainer
        component={Paper}
        style={{ backgroundColor: "#F4F4F4AD", marginBottom: "30px"}}
      >
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Image</TableCell>
              <TableCell>Product</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Total</TableCell>
              <TableCell>Remove</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cartdata.length !== 0
              ? cartdata.map((data, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <div className="timage">
                        <img src={data.image} alt="" />
                      </div>
                    </TableCell>
                    <TableCell>{data.name}</TableCell>
                    <TableCell style={{ color: "red" }}>
                      &#8377; {data.offer_price}
                    </TableCell>
                    <TableCell>
                      <div className="cartqty1">
                        <div className="incre1">
                          <p onClick={() => decreaseQuantity(data.id)}>-</p>
                          <p>{data.quantity}</p>
                          <p onClick={() => increaseQuantity(data.id)}>+</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell style={{ color: "red" }}>
                      &#8377;{" "}
                      {(
                        Number(data.quantity) * Number(data.offer_price)
                      ).toLocaleString("en-IN")}
                    </TableCell>
                    <TableCell>
                      <MdDeleteOutline
                        className="remove"
                        onClick={() => {
                          removeFromCart(data.id);
                        }}
                      />
                    </TableCell>
                  </TableRow>
                ))
              : null}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ProductTable;
