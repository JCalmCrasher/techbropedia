import Link from "next/link";
import { ReactNode } from "react";

interface Props {
  href?: string;
  children: ReactNode;
}
export default function NavLink({ href = "", children }: Props) {
  return (
    <Link
      className="underline-animation text-primary-main dark:text-white leading-6 tracking-[0px] font-light"
      href={href}
    >
      {children}
    </Link>
  );
}
