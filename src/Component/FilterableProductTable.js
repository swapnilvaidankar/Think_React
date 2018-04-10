import React, { Component } from "react";
import SearchRow from "./SearchRow";
import ProductTable from "./ProudctTable";

class FilterableProductTable extends Component {
  render() {
    return (
      <div>
        <SearchRow />
        <ProductTable products={this.props.products} />
      </div>
    );
  }
}
export default FilterableProductTable;
