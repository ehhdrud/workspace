import React, { useState } from "react";

export default function Counter() {
  // let count = 0;
  const [count, setCount] = useState(0);
  return (
    <div>
      {/* <button onClick={() => (count += 1)}>+1</button> */}
      <button onClick={() => setCount(count + 1)}>+1</button>
      <br />
      Counter: {count}
    </div>
  );
}
