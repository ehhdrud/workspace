import React from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { getUser } from "../mocks/api";

export default function Home() {
  const navigate = useNavigate();
  const { data: user } = useQuery("@getUser", getUser, {
    staleTime: Infinity,
  });

  // if (isLoading) return <span>Loading...</span>;

  return (
    <div>
      <h1>Hello, {user?.nickName}</h1>
      <button onClick={() => navigate("/edit")}>Go Edit Page</button>
    </div>
  );
}
