import React from "react";
import ProductListing from "../features/product-listing";
import data from "../data/products.json";

const HomePage = () => (
  <div>
    <h2>Homepage</h2>
    <ProductListing products={data.products} />
  </div>
);

export default HomePage;
