import md from "markdown-it";
import Image from "@/components/image";
import { slugify } from "@/lib/helpers";
import {
  faGithub,
  faLinkedin,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";
import { faGlobe, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HeartIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

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
  role = "Software Engineer",
  onInfo
}: ProfileCardProps) {
  return (
    <Link href={`#${slugify(name)}`}>
      <div className="border-2 border-primary-main dark:border-secondary-100 p-4 rounded-lg dark:bg-primary-100 transition-colors duration-300 hover:border-secondary-100 dark:hover:border-secondary-main">
        <div className="flex flex-col tablet:flex-row justify-between items-start">
          <div className="w-[144px] h-[126px]">
            <Image
              src={image || ""}
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
          <div className="inline-flex items-center bg-coffee h-[24px] rounded">
            <span className="text-caption text-aqua dark:text-white opacity-75 px-[10px]">
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

            <button
              className="flex items-center gap-2"
              onClick={(e) => e.preventDefault()}
            >
              {likes > 0 && <span className="text-body-small">{likes}</span>}
              <HeartIcon className="w-6" />
            </button>
          </div>
          <div
            className="text-body-lg mt-[14px] dark:text-aqua min-h-[100px] max-h-40 overflow-y-auto"
            dangerouslySetInnerHTML={{
              __html: about.length > 0 ? md().render(about) : "Nothing here yet"
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
  );
}
