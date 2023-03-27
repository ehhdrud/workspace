import React from "react";
import myFace from "../image/myFace.jpg";

export default function Seodongkyeong(props) {
  return (
    <>
      {props.withImg && <img src={myFace} alt="myFace" height="200" />}
      <div>
        <span>{props.firstName}</span>
        {props.lastName}
      </div>
    </>
  );
}
