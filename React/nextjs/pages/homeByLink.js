import Link from "next/link";

function Home() {
  return (
    <ul>
      <li>
        {/* href 속성을 이용해 페이지 전환 */}
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/my/account">My Account</Link>
      </li>
      <li>
        <Link href="/my/info">My Info</Link>
      </li>
    </ul>
  );
}

export default Home;
