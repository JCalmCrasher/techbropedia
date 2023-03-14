import { ReactNode } from "react";

export default function Container({ children }: { children: ReactNode }) {
  return <div className="mx-[8vw] 2xl:max-w-7xl 2xl:mx-auto">{children}</div>;
}
