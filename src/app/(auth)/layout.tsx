"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "./styles.css";
import { useState } from "react";

const navLink = [
  {
    name: "Login",
    href: "/login",
  },
  {
    name: "Register",
    href: "/register",
  },
  {
    name: "Forgot password",
    href: "/forgot-password",
  },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [check, setCheck] = useState("");
  return (
    <div>
      <input
        type="text"
        value={check}
        onChange={(e) => setCheck(e.target.value)}
      />
      {navLink.map((links) => {
        const isActive =
          pathname === links.href ||
          (pathname.startsWith(links.href) && links.href !== "/");
        return (
          <Link
            className={isActive ? "mr-3px text-yellow" : "text-blue-500"}
            href={links.href}
            key={links.name}
          >
            {links.name}
          </Link>
        );
      })}
      <body>{children}</body>
    </div>
  );
}
