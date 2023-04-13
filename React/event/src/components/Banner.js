import React from "react";

const Banner = () => {
  const getCoupon = () => {};
  const closeBanner = () => {};

  return (
    <div
      style={{
        backgroundColor: "orange",
        fontWeight: "bold",
        height: "50px",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      }}
      onClick={getCoupon}
    >
      이 곳을 클릭해서 쿠폰을 받아가세요.
      <button onClick={closeBanner}>닫기</button>
    </div>
  );
};

export default Banner;
