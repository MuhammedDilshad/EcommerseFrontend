import React, { useRef } from "react";
import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import Product from "../../components/Product/Product";
import IconDetails from "../../components/IconDetails/IconDetails";
import Advertmnt from "../../components/Advertmnt /Advertmnt ";
import TopSellers from "../../components/TopSellers/TopSellers";
import Footer from "../../components/Footer/Footer";

function Home() {
  const productRef = useRef(null);

  const scrollToProduct = () => {
    productRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      <Header />
      <Banner scrollToProduct={scrollToProduct} />
      <Product ref={productRef} />
      <IconDetails />
      <Advertmnt scrollToProduct={scrollToProduct} />
      <TopSellers scrollToProduct={scrollToProduct} />
      <Footer />
    </div>
  );
}

export default Home;
