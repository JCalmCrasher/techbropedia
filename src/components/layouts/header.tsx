import theme from "@/theme";
import { useEffect, useState } from "react";
import { useLocalStorage, useMediaQuery } from "usehooks-ts";
import AppLogo from "../app-logo";
import DarkModeSwitcher from "../dark-mode-button";
import MenuButton from "../menu-button";
import NavLink from "../nav-link";
import Sidebar from "./sidebar";
// import BgImg from '../../../public/'

export default function TheHeader() {
  const isSmScreen = useMediaQuery("(max-device-width: 767px)");
  const [isDarkMode, setDarkMode] = useLocalStorage("darkTheme", false);

  useEffect(() => {
    const root = window.document.documentElement;
    isDarkMode ? root.classList.add("dark") : root.classList.remove("dark");
  }, [isDarkMode]);

  const [showSidebar, setShowSidebar] = useState(false);

  const onMenuSidebarClick = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <header>
      {/* <div className="flex items-center justify-between px-x-sm tablet:px-x-md laptop:px-x-lg py-y-sm tablet:py-y-md laptop:py-y-lg h-fit"> */}
      <div className="sm:relative z-20 w-full">
        <div className="flex items-center justify-between px-x-sm tablet:px-x-md laptop:px-x-lg py-y-sm tablet:py-y-md laptop:py-y-lg h-fit">
          <MenuButton isOpen={showSidebar} onClick={onMenuSidebarClick} />
          <AppLogo />
          <nav className="flex gap-[30px] items-center">
            <div className="gap-5 hidden tablet:flex">
              <NavLink href="/#about">About</NavLink>
              <NavLink href="/#techbros_techsis">Tech Bro</NavLink>
              <NavLink href="/roadmap">Roadmap</NavLink>
            </div>

            <DarkModeSwitcher
              isDark={isDarkMode}
              onSwitch={() => setDarkMode((prevValue) => !prevValue)}
            />
          </nav>
        </div>

        <Sidebar isOpen={showSidebar} />
      </div>
    </header>
  );
}
