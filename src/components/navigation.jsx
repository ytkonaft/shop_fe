import Link from "next/link";

const Navigation = () => (
  <div>
    <Link href="/">
      <a>home</a>
    </Link>
    <Link href="/cart">
      <a>cart</a>
    </Link>
    <Link href="/category">
      <a>category</a>
    </Link>
    <Link href="/search">
      <a>search</a>
    </Link>
    <Link href="/profile">
      <a>profile</a>
    </Link>
    <Link href="/product">
      <a>product</a>
    </Link>
  </div>
);

export default Navigation;
