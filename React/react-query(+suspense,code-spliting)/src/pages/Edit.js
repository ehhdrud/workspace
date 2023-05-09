import React, { useState, lazy, Suspense } from "react";
import { useQueries, useMutation, useQueryClient } from "react-query";
import { getUser, getPosts, updateNickname } from "../mocks/api";

/*
// import() 함수 사용법
import add from "./math";
console.log(add(1, 2));
//export default로 내보내고 import() 함수로 가져올 때, module.add가 아니라, module.default로 가져와야 함!
import("./math").then((math) => console.log(math.default(1, 2)));
*/

const Post = lazy(() => import("./Posts"));

export default function Edit() {
  const [inputValue, setInputValue] = useState("");
  const queryClient = useQueryClient();

  /*
  // useQuery는 기본적으로 병렬적으로 동작하지만 프로파일링 결과 병렬적으로 동작하지 않음을 확인...
  // Suspense Mode로 사용하면 useQuery는 병렬적으로 동작하지 않기 때문...
  // 이럴 땐 useQuery말고 useQueries를 통해 병렬 처리를 구현 !
  const { data: user } = useQuery("@getUser", getUser, {
    staleTime: Infinity,
  });

  const { data: posts } = useQuery("@getPosts", getPosts, {
    staleTime: Infinity,
  });
  */

  const results = useQueries([
    { queryKey: ["@getUser"], queryFn: getUser, staleTime: Infinity },
    { queryKey: ["@getPosts"], queryFn: getPosts, staleTime: Infinity },
  ]);

  const user = results[0].data;
  const posts = results[1].data;

  const mutation = useMutation(updateNickname, {
    onSuccess: () => {
      queryClient.invalidateQueries("@getUser");
    },
  });

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(inputValue);
  };

  // if (isLoading) return <span>Loading...</span>;

  return (
    <>
      <h1>Edit</h1>
      <h3>현재 닉네임: {user?.nickName}</h3>
      <form onSubmit={handleSubmit}>
        <label>
          변경할 닉네임:
          <input type="text" value={inputValue} onChange={handleChange} />
        </label>
      </form>
      <ul>
        {posts?.map((post) => (
          <li>{post.title}</li>
        ))}
      </ul>
      <ul>
        <Suspense fallback={<div>Loading...</div>}>
          {posts?.map((post) => (
            <Post title={post.title} />
          ))}
        </Suspense>
      </ul>
    </>
  );
}
