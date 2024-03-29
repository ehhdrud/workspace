import React, { useRef, useState } from "react";
import Cat from "./Cat";

export default function CatParent() {
  const catRef = useRef(); // useRef()를 사용하여 catRef를 생성한다.

  console.log("부모 컴포넌트 CatParent");
  console.log(catRef); // current: undefined

  const ageRef = useRef(1);
  const [state, setState] = useState(1);

  console.log(ageRef.current);

  return (
    <div>
      <h4> 고양이가 세상을 구한다 ️</h4>
      <div>
        {/* 생성한 catRef를 Cat 컴포넌트의 ref 속성으로 전달한다.  */}
        {/* 아래의 Cat 컴포넌트는 함수 컴포넌트지만, 해당 컴포넌트에서 forwardRef을 사용하고 있으므로, ref 속성을 사용할 수 있다. */}
        <Cat a="a" ref={catRef} />
        <h4>나이: {ageRef.current}</h4>
        <h4>상태값: {state}</h4>
        <button
          onClick={() => {
            alert(catRef.current.height);
          }}
        >
          고양이의 크기를 알고싶어
        </button>
        <button
          onClick={() => {
            ageRef.current = ageRef.current + 1;
          }}
        >
          새해
        </button>
        <button
          onClick={() => {
            setState(state + 1);
          }}
        >
          리렌더링
        </button>
      </div>
    </div>
  );
}
