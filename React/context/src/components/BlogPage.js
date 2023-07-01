import React, { useContext } from "react";
import { UserContext } from "../store/user";

export default function BlogPage() {
  const userInfo = useContext(UserContext);
  console.log(userInfo);
  // name: "seodongkeyong", job: "FE-developer", changeJob: updatedJob => setJob(updatedJob)

  return (
    <div>
      <h1>BlogPage</h1>
    </div>
  );
}
