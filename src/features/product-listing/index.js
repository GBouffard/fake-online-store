import React from "react";
import ProductListItem from "./product-list-item";

const ProductListing = ({ products }) => (
  <div className="product-listing">
    {products.map(product => (
      <ProductListItem product={product} />
    ))}
  </div>
);

export default ProductListing;
