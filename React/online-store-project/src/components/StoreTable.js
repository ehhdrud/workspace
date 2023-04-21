import React from "react";
import ProductsTable from "./ProductsTable";

export default function StoreTable(props) {
  // console.log(props.products);
  const { products } = props;

  // 너무 static한 방법... 확장성이 떨어짐 !
  // const sportingGoods = products.filter((p) => p.category === "Sporting Goods");
  // const electronics = products.filter((p) => p.category === "Electronics");

  const result = products.reduce((acc, cur) => {
    if (acc.hasOwnProperty(cur.category)) {
      // key(category)를 가지고 있는 케이스로, 배열에 추가만 하면 됨
      return {
        ...acc,
        [cur.category]: [...acc[cur.category], cur],
      };
    } else {
      // key를 가지고 있지 않은 케이스로, 새로운 key를 생성하고, 배열에 추가해야 함
      return {
        ...acc,
        [cur.category]: [cur],
      };
    }
  }, {});
  // console.log(result);

  const keys = Object.keys(result);
  // console.log(keys);

  return (
    <table>
      <tr>
        <td>Name</td>
        <td>Price</td>
      </tr>
      {keys.map((key, idx) => (
        <ProductsTable category={key} items={result[key]} key={idx} />
      ))}
    </table>
  );
}
