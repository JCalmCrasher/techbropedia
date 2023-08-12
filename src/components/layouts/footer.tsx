import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AppLogo from "../app-logo";
import NavLink from "../nav-link";

export default function TheFooter() {
 return (
  <footer className="bg-[#e4e4e4] dark:bg-primary-100 bg-scroll">
   <div className="px-x-sm tablet:px-x-md laptop:px-x-lg py-y-sm tablet:py-y-md laptop:py-y-lg">
    <div className="flex items-center justify-between h-fit">
     <AppLogo />
     <div className="flex gap-2">
      <span>&copy; 2023</span>
      <a
       href="https://github.com/JCalmCrasher/techbropedia/blob/main/CONTRIBUTING.md"
       target="_blank"
       rel="noreferrer"
      >
       <FontAwesomeIcon icon={faGithub} />
      </a>
     </div>
    </div>
    <ul className="mt-4 text-body-sm">
     <li>
      <NavLink href="/#about">About</NavLink>
     </li>
     <li>
      <NavLink href="/disclaimer">Disclaimer</NavLink>
     </li>
    </ul>
   </div>
  </footer>
 );
}
