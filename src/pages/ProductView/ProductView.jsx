import React from "react";
import Header from "../../components/Header/Header";
import ProductDetails from "../../components/ProductDetails/ProductDetails";
import { useParams } from "react-router-dom";

function ProductView() {
  const { id } = useParams();
  return (
    <div>
      <Header />
      <ProductDetails id={id} />
    </div>
  );
}

export default ProductView;
