import Image from "@/components/image";
import { slugify } from "@/lib/helpers";
import {
 faGithub,
 faLinkedin,
 faTwitter
} from "@fortawesome/free-brands-svg-icons";
import { faGlobe, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { MouseEvent } from "react";

interface ProfileCardProps {
 name: string;
 about?: string;
 github?: string;
 website?: string;
 linkedin?: string;
 twitter?: string;
 likes?: number;
 image?: string;
 role: string;
 onInfo: () => void;
}
export function ProfileCard({
 name = "",
 about = "",
 github = "",
 website = "",
 linkedin = "",
 twitter = "",
 image = "",
 likes = 0,
 role = "",
 onInfo
}: ProfileCardProps) {
 const hasAbout = about?.length > 0;

 return (
  <>
   {hasAbout ? (
    <Link
     href={name ? `/profile/${slugify(name)}` : "#"}
    >
     <div className="border-2 border-primary-main dark:border-secondary-100 p-4 rounded-lg dark:bg-primary-100 transition-colors duration-300 hover:border-secondary-100 dark:hover:border-secondary-main h-[full] sm:max-h-[430px]">
      <div className="flex flex-col tablet:flex-row justify-between items-start">
       <div className="w-[144px] h-[126px]">
        <Image
         src={image || "/profile-fallback.png"}
         width={144}
         height={126}
         alt={name}
         style={{
          width: "100%",
          height: "100%",
          objectFit: "cover"
         }}
        />
       </div>
       <div className="inline-flex items-center bg-coffee min-h-[24px] rounded py-1">
        <span className="text-caption max-w-[10rem] overscroll-auto text-aqua dark:text-white opacity-75 px-[10px]">
         {role || "n/a"}
        </span>
       </div>
      </div>
      <div className="mt-3 flex flex-col gap-4">
       <div className="flex justify-between">
        <div className="flex items-center gap-2">
         <p className="text-title-sm font-medium">{name}</p>
         <Link href="#info" onClick={onInfo}>
          <FontAwesomeIcon
           className="text-secondary-100 hover:text-secondary-main"
           icon={faInfoCircle}
           onClick={(e) => e.preventDefault()}
          />
         </Link>
        </div>
       </div>
       <div
        className="text-body-lg mt-[14px] dark:text-aqua min-h-[100px] max-h-40 overflow-y-auto"
        dangerouslySetInnerHTML={{
         __html: about
        }}
       />
       <div className="flex gap-2 justify-end">
        <a
         href={linkedin || "/"}
         target="_blank"
         rel="noreferrer"
         onClick={(e) => e.stopPropagation()}
        >
         <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
         href={twitter || "/"}
         target="_blank"
         rel="noreferrer"
         onClick={(e) => e.stopPropagation()}
        >
         <FontAwesomeIcon icon={faTwitter} />
        </a>
        {github ? (
         <a
          href={github || "/"}
          target="_blank"
          rel="noreferrer"
          onClick={(e) => e.stopPropagation()}
         >
          <FontAwesomeIcon icon={faGithub} />
         </a>
        ) : (
         <a
          href={website || twitter || "/"}
          target="_blank"
          rel="noreferrer"
          onClick={(e) => e.stopPropagation()}
         >
          <FontAwesomeIcon icon={faGlobe} />
         </a>
        )}
       </div>
      </div>
     </div>
    </Link>
   ) : (
    <div className="animate-pulse border border-primary-main dark:border-secondary-100 p-4 rounded-lg dark:bg-primary-100 transition-colors duration-300 hover:border-secondary-100 dark:hover:border-secondary-main">
     <div className="flex flex-col tablet:flex-row justify-between items-start">
      <div className="w-[144px] h-[144px] rounded-full bg-slate-700" />
      <div className="inline-flex items-center bg-coffee min-h-[24px] rounded py-1">
       <span className="text-caption w-20 overscroll-auto text-aqua dark:text-white opacity-75 px-[10px]" />
      </div>
     </div>
     <div className="mt-3 flex flex-col gap-4">
      <div className="flex justify-between">
       <div className="flex items-center gap-2">
        <p className="h-4 w-24 bg-slate-700 rounded" />
        <span className="h-4 w-4 bg-slate-700 rounded" />
       </div>
      </div>
      {Array.from({ length: 3 }).map((_, i) => (
       <div className="h-4 w-full bg-slate-700 rounded" key={i} />
      ))}
      <div className="flex gap-2 justify-end">
       {Array.from({ length: 3 }).map((_, i) => (
        <div className="h-4 w-4 bg-slate-700 rounded" key={i} />
       ))}
      </div>
     </div>
    </div>
   )}
  </>
 );
}
