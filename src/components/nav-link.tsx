import { ReactNode } from "react";

interface Props {
  href?: string;
  children: ReactNode;
}
export default function NavLink({ href = "", children }: Props) {
  return (
    <a
      className="underline-animation text-primary-main dark:text-white text-[20px] leading-6 tracking-[0px] font-light"
      href={href}
    >
      {children}
    </a>
  );
}
