import React, { Component } from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import Products from "./productData";
import FilterableProductTable from "./Component/FilterableProductTable";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class App extends Component {
  render() {
    return (
      <div style={styles}>
        <Hello name="CodeSandbox" />
        <h2>Start editing to see some magic happen {"\u2728"}</h2>
      </div>
    );
  }
}
class ProductRow extends Component {
  render() {
    return <div>This is ProductRow {this.props.product}</div>;
  }
}

class ProductCategoryRow extends Component {
  render() {
    return <div style={{ color: "red" }}>Category: {this.props.category}</div>;
  }
}
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
class SearchRow extends Component {
  render() {
    return (
      <form>
        <input type="search" placeholder="Search" />
        <br />
        <input type="checkbox" /> Only show product in stock
      </form>
    );
  }
}

render(
  <FilterableProductTable products={Products} />,
  document.getElementById("root")
);
