import React, { useState } from "react";
import { useQueries, useMutation, useQueryClient } from "react-query";
import { getUser, getPosts, updateNickname } from "../mocks/api";

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
    </>
  );
}
