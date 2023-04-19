import React, { forwardRef, useState } from "react";

const CallbackCat = forwardRef((props, ref) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div>
      <img
        src="https://static01.nyt.com/images/2016/03/30/universal/ko/well_cat-korean/well_cat-superJumbo-v2.jpg?quality=90&auto=webp"
        alt="cat"
        style={{ width: "150px" }}
        ref={loaded ? ref : undefined}
        // 이미지가 로드되는 시점에 height가 일시적으로 0으로 출력되어 파생되는 문제를 해결하기 위한 onload 속성
        onLoad={() => {
          alert("onload");
          setLoaded(true);
        }}
      ></img>
    </div>
  );
});

export default CallbackCat;

/*
// 이와 같이 useCallback Hook을 사용하여 콜백 함수를 useCallback으로 감싸면 성능면에서 더 우수 !
import React, { forwardRef, useCallback, useState } from "react";

const CallbackCat = forwardRef((props, ref) => {
  const [loaded, setLoaded] = useState(false);

  const handleLoad = useCallback(() => {
    alert("onload");
    setLoaded(true);
  }, []);

  return (
    <div>
      <img
        src="https://static01.nyt.com/images/2016/03/30/universal/ko/well_cat-korean/well_cat-superJumbo-v2.jpg?quality=90&auto=webp"
        alt="cat"
        style={{ width: "150px" }}
        ref={loaded ? ref : undefined}
        onLoad={handleLoad}
      />
    </div>
  );
});

export default CallbackCat;
*/
