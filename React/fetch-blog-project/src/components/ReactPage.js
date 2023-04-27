import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

export default function ReactPage() {
  // api call -> react에 해당하는 글의 목록을 응답 받음.
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      console.log(res);
      const result = await res.json();
      console.log(result);

      // setDocs(result); // return을 해줘야하는 상황에는 부적합

      return result;
    }

    // fetchData(); // return을 해줘야하는 상황에는 부적합

    fetchData().then((res) => {
      setDocs(res);
    });
  }, []);

  return (
    <div>
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
