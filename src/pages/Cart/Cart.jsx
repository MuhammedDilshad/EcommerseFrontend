import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CartBody from "../../components/CartBody/CartBody";
import { useParams } from "react-router-dom";

function Cart() {
  const { id } = useParams();
  return (
    <div>
      <Header />
      <CartBody id={id} />
      <Footer />
    </div>
  );
}

export default Cart;
