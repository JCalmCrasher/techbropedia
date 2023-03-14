import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import NavLink from "../nav-link";

interface Props {
  isOpen?: boolean;
}
export default function Sidebar({ isOpen = false }: Props) {
  const [isTransitioning, setIsTransitioning] = useState(false);
  useEffect(() => {
    if (isOpen) {
      setIsTransitioning(true);
    }

    return () => setIsTransitioning(false);
  }, [isOpen]);

  return (
    <>
      {isOpen &&
        createPortal(
          <div
            className={`w-full h-screen fixed top-0 left-0 right-0 p-x-sm block tablet:hidden bg-white dark:bg-primary-100 transition-transform duration-500 ease-in-out 
            ${
              isTransitioning
                ? "translate-x-0"
                : "translate-x-[-100%]"
            }
            `}
          >
            <nav className="flex flex-col gap-5 mt-20">
              <NavLink href="/#about">About</NavLink>
              <NavLink href="/#techbros_techsis">Tech Bro</NavLink>
            </nav>
          </div>,
          document.body
        )}
    </>
  );
}
