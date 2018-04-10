import React, { Component } from "react";

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
export default SearchRow;
