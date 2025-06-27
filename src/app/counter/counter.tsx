"use client";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>the counter</p>
      <button onClick={() => setCount(count + 1)}>start here </button>;
    </div>
  );
}
