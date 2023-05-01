import React from "react";
import { useNavigate, Outlet } from "react-router-dom";

export default function Logo() {
  const navigate = useNavigate();

  return (
    <>
      <h5 onClick={() => navigate("/")}>logo</h5>
      <Outlet />
    </>
  );
}
