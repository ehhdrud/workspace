import React from "react";
import * as S from "./ProductsTable.style";

export default function ProductsTable(props) {
  const { category, items, inStockOnly } = props;
  const filteredItems = inStockOnly
    ? items.filter((item) => item.stocked)
    : items;

  return (
    <table>
      <tr>
        {/* <td style={{ fontWeight: "bold" }}>{category}</td> */}
        <S.Category>{category}</S.Category>
      </tr>

      {filteredItems.map((item, idx) => (
        <tr key={idx}>
          {/* <td style={item.stocked ? { color: "black" } : { color: "red" }}>{item.name}</td> */}
          <S.ProductName stocked={item.stocked}>{item.name}</S.ProductName>
          <td>{item.price}</td>
        </tr>
      ))}
    </table>
  );
}
