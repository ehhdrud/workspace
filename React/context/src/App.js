import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import TechPage from "./components/TechPage";
import BlogPage from "./components/BlogPage";
import JavascriptPage from "./components/JavascriptPage";
import ReactPage from "./components/ReactPage";
import ReactDocPage from "./components/ReactDocPage";
import Logo from "./components/Logo";
import UserStore from "./store/user";

function App() {
  // root url : main page component
  // tech url : tech page component
  // blog url : blog page component

  return (
    <UserStore>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Logo />}>
            <Route path={"/"} element={<MainPage />} />
            <Route path={"tech"} element={<TechPage />}>
              <Route path="javascript" element={<JavascriptPage />} />
              <Route path="react" element={<ReactPage />}>
                {/* 세미콜론(:)은 이 경로 매개변수를 정의하는 문법으로, 이를 통해 URL 경로에 동적인 값을 전달할 수 있다. */}
                {/* 중첩된 라우트가 있는 페이지는 부모 경로의 컴포넌트와 결합되어 하나의 페이지에 렌더링된다. */}
                {/* 이를 원하지 않는다면 중첩 라우트를 사용하지 않고, 형제 컴포넌트로 작성하면 된다. */}
                {/* 이 때 path는 "react/:docId"로 수정해주어야 한다. */}
                <Route path=":docId" element={<ReactDocPage />} />
              </Route>
            </Route>
            <Route path={"blog"} element={<BlogPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UserStore>
  );
}

export default App;
