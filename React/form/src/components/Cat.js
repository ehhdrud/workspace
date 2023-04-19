import React, { forwardRef, useEffect } from "react";

// 자식 컴포넌트는 forwardRef()를 사용하여 ref 속성을 전달받는다.
const Cat = forwardRef((props, ref) => {
  console.log("자식 컴포넌트 Cat");
  console.log(ref); // current: undefined

  useEffect(() => {
    console.log("useEffect in Cat");
    console.log(ref); // current: img
  }, []);

  return (
    <div>
      <img
        src="https://static01.nyt.com/images/2016/03/30/universal/ko/well_cat-korean/well_cat-superJumbo-v2.jpg?quality=90&auto=webp"
        alt="cat"
        style={{ width: "150px" }}
        // 전달받은 ref 속성에 img 요소가 연결된다.
        ref={ref}
      ></img>
    </div>
  );
});

export default Cat;
