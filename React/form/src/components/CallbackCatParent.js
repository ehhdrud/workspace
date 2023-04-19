import React, { useState } from "react";
import CallbackCat from "./CallbackCat";

export default function CallbackCatParent() {
  const [height, setHeight] = useState(1);
  // node 매개변수는 전달된 ref 객체가 연결되는 DOM 엘리먼트를 의미한다.
  // node가 null이 아닌 경우에만 setHeight 함수가 실행되므로, DOM 엘리먼트가 실제로 마운트된 이후에 해당 높이 값을 가져온다.
  const callbackCatRef = (node) => {
    if (node !== null) {
      setHeight(node.getBoundingClientRect().height);
    }
  };

  return (
    <div>
      <h4> 고양이가 세상을 구한다 ️</h4>
      <div>
        {/* 원래는 ref 속성에 ref 객체를 넣었는데, ref 콜백 함수를 넣는 것으로 변경 */}
        <CallbackCat a="a" ref={callbackCatRef} />
        <h4>키: {height}</h4>
      </div>
    </div>
  );
}
