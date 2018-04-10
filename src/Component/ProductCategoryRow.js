import React, { Component } from "react";

class ProductCategoryRow extends Component {
  render() {
    return <div style={{ color: "red" }}>Category: {this.props.category}</div>;
  }
}

export default ProductCategoryRow;
