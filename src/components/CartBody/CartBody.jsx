import React, { useState } from "react";
import { productDetails } from "../../Assist/Assist";
import "./CartBody.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "25%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "auto",
  height: "auto",
  bgcolor: "#D6763C",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const CartBody = (props) => {
  const [count, setCount] = useState(1);
  const [open, setOpen] = React.useState(false);

  const data = productDetails.find((id) => id === id);
  const val = parseInt(data.Price);
  const [price, setPrice] = useState(val);
  const quantity = parseInt(data.Quantity);

  const decrimentCount = (val) => {
    if (count > 1) {
      setCount((prev) => prev - 1);
      setPrice((prev) => prev - val);
    }
  };
  const incrementCount = (val) => {
    if (count < quantity) {
      setPrice(val * (count + 1));
      setCount((prev) => prev + 1);
    }
  };
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="mainItems">
      <h4 style={{ textAlign: "left" }}>HOME/SHOPPING CART</h4>
      <div className="header">
        <h4>Product</h4>
        <h4>Price</h4>
        <h4>Quantiy</h4>
        <h4>Total</h4>
      </div>
      <hr />
      <div className="product">
        <img className="productImg" src={data.ImageOne} alt="" />
        <h5>{data.Price}</h5>
        <div className="Count">
          <div
            style={{ cursor: "pointer" }}
            onClick={() => decrimentCount(val)}
          >
            -
          </div>
          <div>{count}</div>
          <div
            style={{ cursor: "pointer" }}
            onClick={() => incrementCount(val)}
          >
            +
          </div>
        </div>
        <h5>{price}</h5>
      </div>
      <hr />
      <div>
        <h1>Cart Totals</h1>
        <div className="carttotal">
          <div className="items">
            <medium>Subtotal</medium>
            <strong>${price}</strong>
          </div>
          <hr />
          <div className="items">
            <medium>Shipping Fee</medium>
            <medium>Free!!!</medium>
          </div>
          <hr />
          <div className="items">
            <strong>Total</strong>
            <strong>${price}</strong>
          </div>
          <button className="itemBt" onClick={handleOpen}>
            PROCEED TO CHECKOUT
          </button>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography> */}
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <h1 style={{ color: "#fff" }}>ORDER PLACED SUCCESFULLY</h1>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default CartBody;
