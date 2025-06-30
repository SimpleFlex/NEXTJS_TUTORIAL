"use client";
import { useRouter } from "next/navigation";

export default function Orders() {
  const router = useRouter();
  const handleClick = () => {
    console.log("button is been clicked");
    router.push("/");
  };
  return (
    <>
      <h1>THIS IS THE ORDER PAGE </h1>
      <button onClick={handleClick}>Order here</button>
    </>
  );
}
