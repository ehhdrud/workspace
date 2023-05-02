import React, { useContext } from "react";
import { UserContext } from "../store/user";

export default function BlogPage() {
  const userInfo = useContext(UserContext);
  console.log(userInfo);

  return (
    <div>
      <h1>BlogPage</h1>
    </div>
  );
}
