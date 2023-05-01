import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import axios from "axios";
import useSWR from "swr";

export default function ReactPage() {
  const [number, setNumber] = useState(0);

  async function fetcher() {
    const result = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    console.log(result.data);

    return result.data;
  }

  const { data: docs, error } = useSWR("posts", fetcher);

  if (!docs) return <div>loading...</div>;
  if (error) return <div>failed to load</div>;

  return (
    <div>
      <button onClick={() => setNumber(number + 1)}>
        {/* 리렌더링해도 API 호출이 이뤄지지 않는다. */}
        리렌더링 횟수: {number}
      </button>
      {docs.map((doc) => (
        <Link
          to={`${doc.id}`}
          key={doc.id}
          style={{ display: "block", margin: "1rem 0" }}
        >
          {doc.title}
        </Link>
      ))}
      <Outlet />
    </div>
  );
}
