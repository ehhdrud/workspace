import { useRouter } from "next/router";

function Home() {
  const router = useRouter();
  return (
    <ul>
      <li>
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
