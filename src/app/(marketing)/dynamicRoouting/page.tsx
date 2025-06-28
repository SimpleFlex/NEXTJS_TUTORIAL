import Link from "next/link";

export default function Dashbord() {
  return (
    <div>
      <h1>product list!</h1>
      <Link href="dynamicRoouting/1">
        <h2>product 1</h2>
      </Link>
      <h2>product 2</h2>
      <h2>product 3</h2>
      <h2>product 4</h2>
    </div>
  );
}
