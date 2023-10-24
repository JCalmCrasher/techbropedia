import Container from "@/components/container";
import Link from "next/link";
import React from "react";

const references = [
 {
  name: "Wikipedia",
  link: "https://www.wikipedia.com"
 },
 {
  name: "LinkedIn",
  link: "https://www.linkedin.com"
 },
 {
  name: "Crunchbase",
  link: "https://www.crunchbase.com"
 }
];

const DisclaimerPage = () => {
 return (
  <article className="body-layout">
   <h2 className="text-headline-sm font-bold pt-20 md:pt-0">Disclaimer</h2>
   <section className="disclaimer mt-4">
    <p>
     Techbropedia is committed to documenting the diverse stories and
     experiences of individuals within the tech space. The stories
     and experiences shared on this platform belong to the respective
     individuals and do not necessarily reflect the views of Techbropedia.
    </p>
    <p>
     The contents presented on Techbropedia are <Link href="/">sourced</Link>{" "}
     from various individuals and are intended solely for the purpose of
     documenting personal journeys, achievements, and insights within the
     technology field. These stories are meant to provide inspiration, offer
     different perspectives, and highlight the uniqueness of each
     individual&apos;s path.
    </p>
    <p>
     It&apos;s important to note that the stories published here are not
     intended to be taken as authoritative or superior sources of information. Readers are encouraged to seek additional information and diverse viewpoints to
     form a well-rounded understanding of the stories shared on this platform.
    </p>
    <p>
     Techbropedia is dedicated to fostering inclusivity, sharing experiences,
     and inspiring others through the power of storytelling. We appreciate your
     understanding of the nature and purpose of the content presented on this
     platform. For any inquiries or concerns, please contact us at{" "}
     <a
      href="mailto:techbropedia@gmail.com"
      className="text-secondary-main hover:underline"
     >
      techbropedia@gmail.com
     </a>
     .
    </p>
    <p className="italic">
     <span className="font-bold">Note: </span>Contents on this site are sourced from different sites and are not the original work of the author of this site. Some contents were also rewritten by ChatGPT.
    </p>
    <div className="mt-10">
     <h3 className="text-title-lg font-bold pt-20 md:pt-0 mb-3">References</h3>
     <ul className="list-decimal ml-8">
      {references.map((reference) => (
       <li key={reference.name}>
        <a href={reference.link} target="_blank" rel="noreferrer">
         {reference.name}
        </a>
       </li>
      ))}
     </ul>
    </div>
   </section>
  </article>
 );
};

export default DisclaimerPage;
