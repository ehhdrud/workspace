import React, { useState } from "react";
import SearchBar from "./SearchBar";
import StoreTable from "./StoreTable";

export default function OnlineStore() {
  const [filter, setFilter] = useState({ text: "", inStockOnly: false });

  function updateFilter(key, value) {
    // 만약 새로운 key가 이미 존재하는 filter 객체에 존재한다면, 해당 key에 대한 값이 이전 값에서 새로운 값으로 덮어씌워진다.
    // 즉, '...filter'는 다른 key가 유지되도록 하기 위한 처리라고 볼 수 있다.
    setFilter({
      ...filter,
      [key]: value,
    });
  }

  const dataContainer = [
    {
      category: "Sporting Goods",
      price: "$49.99",
      stocked: true,
      name: "Football",
    },
    {
      category: "Sporting Goods",
      price: "$9.99",
      stocked: true,
      name: "Baseball",
    },
    {
      category: "Sporting Goods",
      price: "$29.99",
      stocked: false,
      name: "Basketball",
    },
    {
      category: "Electronics",
      price: "$99.99",
      stocked: true,
      name: "iPod Touch",
    },
    {
      category: "Electronics",
      price: "$399.99",
      stocked: false,
      name: "iPhone 5",
    },
    {
      category: "Electronics",
      price: "$199.99",
      stocked: true,
      name: "Nexus 7",
    },
  ];

  console.log(filter);

  return (
    <div>
      <SearchBar filter={filter} updateFilter={updateFilter} />
      <StoreTable products={dataContainer} filter={filter} />
    </div>
  );
}
