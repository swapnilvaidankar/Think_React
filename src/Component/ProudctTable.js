import React, { Component } from "react";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

class ProductTable extends Component {
  render() {
    const rows = [];
    let lastCategory = null;

    this.props.products.forEach(product => {
      if (product.category !== lastCategory) {
        console.log(
          "Product.Category ----->  " +
            product.category +
            " lastCategory: " +
            lastCategory
        );
        rows.push(
          <ProductCategoryRow
            category={product.category}
            key={product.category}
          />
        );
        lastCategory = product.category;
      }
      console.log("Product -----> " + product.category);
      rows.push(<ProductRow product={product.name} />);
    });

    return (
      <div>
        <h1>This is Product Row</h1>
        {rows}
      </div>
    );
  }
}
export default ProductTable;
