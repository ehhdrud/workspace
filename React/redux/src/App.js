import { useSelector, useDispatch } from "react-redux";
import { fetchUserThunk } from "./modules/account/account";
/*
import { fetchUser } from "../src/modules/account/api";
import {
  fetchUserRequest,
  fetchUserSuccess,
  fetchUserFailure,
} from "./modules/account/account";
*/

function App() {
  const account = useSelector((state) => state.account);
  const { loading, name, email } = account;
  const dispatch = useDispatch();

  /*
  // 미들웨어를 사용하지 않음
  const handleClick = async () => {
    dispatch(fetchUserRequest());
    try {
      const res = await fetchUser();
      dispatch(fetchUserSuccess({ name: res.name, email: res.email }));
    } catch {
      dispatch(fetchUserFailure());
    }
  };
  */

  // redux-thunk 미들웨어를 사용한 비동기 처리
  function handleClick() {
    dispatch(fetchUserThunk());
  }

  return (
    <div className="App">
      <button onClick={handleClick}>User 정보 가져오기</button>
      {loading ? (
        <p>loading...</p>
      ) : name && email ? (
        <>
          <p>이름 : {name}</p>
          <p>이메일 : {email}</p>
        </>
      ) : null}
    </div>
  );
}

export default App;
