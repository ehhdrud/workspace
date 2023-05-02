import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function TechPage() {
  return (
    <>
      <div>
        <h1>TechPage</h1>
        {/* Link 컴포넌트의 to 속성은 상대 경로 링크를 만들 수 있도록 지원한다 */}
        {/* 즉, /tech/react 나 /tech/javascript라고 안써줘도 되고, '../', './' 등도 사용 가능! */}
        <Link to="react">React</Link> | <Link to="javascript">Javascript</Link>
      </div>
      <Outlet />
    </>
  );
}
