import React from "react";
import ProductListItem from "./product-list-item";

const ProductListing = ({ products }) => (
  <div>
    {products.map(product => (
      <ProductListItem product={product} />
    ))}
  </div>
);

export default ProductListing;
