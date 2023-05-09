import { useRouter } from "next/router";

function Home() {
  const router = useRouter();
  return (
    <ul>
      <li>
        {/* push 메서드를 이용해 페이지 전환 */}
        <a onClick={() => router.push("/")}>Home</a>
      </li>
      <li>
        <a onClick={() => router.push("/my/account")}>My Account</a>
      </li>
      <li>
        <a onClick={() => router.push("/my/info")}>My Info</a>
      </li>
    </ul>
  );
}

export default Home;
