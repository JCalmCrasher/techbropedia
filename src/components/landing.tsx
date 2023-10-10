"use client";

import Container from "@/components/container";
import Image from "@/components/image";
// import SearchInput from "@/components/search-input";
import { classNames, slugify } from "@/lib/helpers";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dialog, Tab, Transition } from "@headlessui/react";
import { ArrowDownIcon } from "@heroicons/react/20/solid";
import { Metadata } from "next";
import { Fragment, useEffect, useRef, useState } from "react";
import { useMediaQuery, useReadLocalStorage } from "usehooks-ts";
import { v4 as key } from "uuid";
import colors from "../theme";
import { ProfileCard } from "./card/ProfileCard";
import SearchInput from "./search-input";

type UserProfile = {
 content: string | undefined;
 data: {
  brief: string;
  funStuff: string;
  website: string | undefined;
  name: string;
  linkedin: string | undefined;
  twitter: string | undefined;
  github: string | undefined;
  dp: string;
  occupation: string[];
  contributions?: string[];
 };
};

export const metadata: Metadata = {
 // metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
 title: "Techbropedia",
 description: "Wikipedia for Techbros & Techsis in Nigeria"
};

const workInProgress = "Working on this section, check back for updates!";

export default function Landing(props: { contents: any }) {
 const { contents: profiles }: { contents: UserProfile[] } = props;
 const [selectedProfile, setSelectedProfile] = useState<UserProfile>({
  content: "",
  data: {
   brief: "",
   funStuff: "",
   name: "",
   linkedin: "",
   twitter: "",
   github: "",
   website: "",
   dp: "",
   occupation: []
  }
 });

 const [searchQuery, setSearchQuery] = useState("");
 const [filteredProfiles, setFilteredProfiles] = useState(profiles);

 const isDarkMode = useReadLocalStorage("darkTheme");

 const isSmScreen = useMediaQuery("(max-device-width: 767px)");
 const isMdScreen = useMediaQuery("(max-device-width: 810px)");

 const [src, setSrc] = useState("");

 useEffect(() => {
  if (isSmScreen) setSrc("/techbro-techsis-sm.svg");
  else setSrc("/techbro-techsis-md.svg");
 }, [isMdScreen, isSmScreen]);

 let [isOpen, setIsOpen] = useState(false);

 function closeModal() {
  setIsOpen(false);
 }

 function openModal() {
  setIsOpen(true);
 }

 const tabs = ["About", "Contributions", "Fun Stuff", "Gallery"];
 const contributions = selectedProfile.data?.contributions || [];

 useEffect(() => {
  const filtered = profiles.filter((profile) =>
   profile.data?.name?.toLowerCase().includes(searchQuery.toLowerCase())
  );
  setFilteredProfiles(filtered);
 }, [searchQuery, profiles]);

 const aboutSectionRef = useRef<HTMLElement | null>(null);

 const handleScrollToAbout = () => {
  aboutSectionRef?.current?.scrollIntoView({ behavior: "smooth" });
 };

 return (
  <>
   <section className="fh flex flex-col py-20 laptop:py-0 2xl:py-20">
    <div className="mx-[8vw]">
     <div className="flex items-center flex-col min-h-[483px] laptop:flex-row gap-12 laptop:gap-0 laptop:justify-between oudtline 2xl:max-w-7xl 2xl:mx-auto">
      <div className="flex flex-col gap-3">
       <h1 className="text-headline-sm tablet:text-headline-md laptop:text-headline-lg font-bold tablet:max-w-full laptop:max-w-[500px]">
        The <span>Wikipedia</span> for Techbros & Techsis in Nigeria
       </h1>
       <p className="text-caption">Know your techbros and techsis</p>
      </div>

      <div className="mx-auto laptop:mx-0">
       <Image
        src={src}
        alt="memojis of techbros & techsis smiling"
        width={354}
        height={354}
        style={{ width: "auto" }}
       />
      </div>
     </div>
    </div>

    <div className="hidden laptop:block my-auto">
     <button
      className="animate-bounce flex items-center justify-center bg-secondary-main mx-auto rounded-full w-[44px] h-[44px]"
      onClick={handleScrollToAbout}
     >
      <ArrowDownIcon className="w-5 text-primary-main" />
     </button>
    </div>
   </section>
   <section
    id="about"
    ref={aboutSectionRef}
    className="fh py-20 bg-no-repeat"
    style={{
     background: `url(${isDarkMode ? "/dark-bg.png" : "/light-bg.png"})`,
     //  backgroundPositionX: "center",
     //  backgroundPositionY: "-100px",
     //  backgroundPosition: "center 100px",
     backgroundColor: isDarkMode ? colors.primary.main : "#e4e4e4"
    }}
   >
    <Container>
     <div>
      <h2 className="text-headline-sm tablet:text-headline-lg font-bold">
       About Techbropedia
      </h2>
      <div className="flex flex-col gap-4 mt-4 max-w-4xl">
       <p className="text-body-lg">
        The idea behind Techbropedia is to create a platform dedicated to
        documenting the stories of individuals in the Nigeria tech industry. The
        goal is to highlight the diverse backgrounds and experiences of people
        working in technology, from their education and early career choices to
        their current projects and contributions to the field.
       </p>

       <p className="text-body-lg">
        By sharing these stories, we hope to inspire others to pursue careers in
        tech and to showcase the many different paths that can lead to success
        in this dynamic and ever-changing industry.{" "}
       </p>
      </div>
     </div>
    </Container>
   </section>
   <section
    id="techbros_techsis"
    className="fh py-20"
    style={{
     backgroundColor: isDarkMode ? colors.primary.main : colors.aqua
    }}
   >
    <Container>
     <div className="flex justify-between flex-col md:flex-row">
      <h2 className="text-headline-sm sm:text-headline-md">
       Techbros & Techsis
      </h2>

      <SearchInput setSearchQuery={setSearchQuery} />
     </div>
     {/* <div className="flex flex-col tablet:flex-row gap-5">
      <div className="flex items-center gap-3">
       <label htmlFor="filter" className="whitespace-nowrap">
        Filter by
       </label>
       <select
        name="filter_option"
        id="options"
        className="h-[56px] p-[10px] bg-white text-primary-main dark:text-primary-main rounded-lg border-2 focus:border-secondary-main"
       >
        <option value="male">sex</option>
        <option value="female">Job role</option>
       </select>
      </div>
     </div> */}

     <div className="mt-10">
      <div className="grid gap-x-4 grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-y-6">
       {filteredProfiles?.length > 0
        ? filteredProfiles?.map((profile) => (
           <ProfileCard
            key={key()}
            name={profile.data?.name}
            role={profile.data?.occupation[0] || "N/A"}
            about={profile.data.brief}
            linkedin={profile.data.linkedin}
            twitter={profile.data.twitter}
            website={profile.data.website}
            github={profile.data.github}
            image={profile.data.dp}
            onInfo={() => {
             setSelectedProfile(profile);
             openModal();
            }}
           />
          ))
        : "No profile match this query"}
      </div>
     </div>
    </Container>
   </section>
   <>
    <Transition appear show={isOpen} as={Fragment}>
     <Dialog as="div" className="relative z-10" onClose={closeModal}>
      <div className="fixed inset-0 bg-black/60" aria-hidden="true" />
      <div className="fixed inset-0 overflow-y-auto">
       <div className="flex min-h-full items-center justify-center p-4 text-center">
        <Transition.Child
         as={Fragment}
         enter="ease-out duration-300"
         enterFrom="opacity-0 scale-95"
         enterTo="opacity-100 scale-100"
         leave="ease-in duration-200"
         leaveFrom="opacity-100 scale-100"
         leaveTo="opacity-0 scale-95"
        >
         <Dialog.Panel className="w-full max-w-3xl transform overflow-hidden rounded-2xl bg-white dark:bg-primary-200 dark:text-white p-6 text-left align-middle shadow-xl transition-all">
          <Dialog.Title
           as="h3"
           className="flex justify-between text-lg font-medium leading-6 text-gray-900"
          >
           {selectedProfile.data.name}
           <FontAwesomeIcon
            className="text-secondary-100 hover:text-secondary-main cursor-pointer"
            icon={faClose}
            onClick={closeModal}
           />
          </Dialog.Title>
          <div className="mt-10 flex flex-col gap-2">
           <div className="flex items-end gap-4 mb-4">
            <Image
             className="profile-image"
             src={selectedProfile.data.dp}
             width={144}
             height={100}
             alt={selectedProfile.data.name}
             style={{
              borderRadius: "50%"
             }}
            />
            <div className="flex flex-col">
             <span>{(selectedProfile?.data?.occupation || []).join(", ")}</span>
            </div>
           </div>
           <Tab.Group>
            <Tab.List className="flex items-start space-x-1 rounded-xl bg-blue-900/20 p-1 overflow-x-auto w-full">
             {tabs.map((tab) => (
              <Tab
               key={slugify(tab || "")}
               className={({ selected }) =>
                classNames(
                 "w-full rounded-lg px-3 md:px-0 py-3 text-[14px] md:text-body-lg whitespace-nowrap",
                 "ring-aqua ring-opacity-60 ring-offset-1 focus:outline-none focus:ring-1",
                 selected
                  ? "bg-secondary-200 shadow text-white"
                  : "hover:text-secondary-200"
                )
               }
              >
               {tab}
              </Tab>
             ))}
            </Tab.List>
            <Tab.Panels>
             <Tab.Panel
              className="panel leading-7"
              dangerouslySetInnerHTML={{
               __html: selectedProfile?.content || workInProgress
              }}
             />
             <Tab.Panel className="panel">
              {(contributions?.length > 0 && (
               <ul className="list-decimal ml-4">
                {contributions.map((c, i) => (
                 <li
                  className="leading-7"
                  key={i}
                  dangerouslySetInnerHTML={{ __html: c }}
                 />
                ))}
               </ul>
              )) ||
               workInProgress}
             </Tab.Panel>

             <Tab.Panel
              dangerouslySetInnerHTML={{
               __html: selectedProfile?.data.funStuff || workInProgress
              }}
             />
             <Tab.Panel>
              Working on this section, check back for updates!
             </Tab.Panel>
            </Tab.Panels>
           </Tab.Group>
          </div>
         </Dialog.Panel>
        </Transition.Child>
       </div>
      </div>
     </Dialog>
    </Transition>
   </>
  </>
 );
}
