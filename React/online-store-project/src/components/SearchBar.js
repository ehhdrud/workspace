import React from "react";

export default function SearchBar(props) {
  const { text, inStockOnly } = props.filter;

  return (
    <>
      <input placeholder="Search..." value={text} />
      <div>
        <input type="checkbox" id="stock" checked={inStockOnly} />
        <label htmlFor="stock">Only show products in stock</label>
      </div>
    </>
  );
}
