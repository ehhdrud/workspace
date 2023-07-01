import React, { useContext } from "react";
import { UserContext } from "../store/user";

export default function BlogPage() {
  const { dispatch } = useContext(UserContext);

  return (
    <div>
      <h1>BlogPage</h1>
      <button
        onClick={() => dispatch({ type: "changeJob", text: "BE-developer" })}
      >
        {/* 버튼을 누르면 job을 변경하는 기능 추가 */}
        ChangeJob
      </button>
    </div>
  );
}
