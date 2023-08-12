import Container from "@/components/container";
import Link from "next/link";
import React from "react";

const DisclaimerPage = () => {
 return (
  <article className="px-x-sm tablet:px-x-md laptop:px-x-lg font-mono mb-10">
   <h2 className="text-headline-sm font-bold pt-20 md:pt-0">Disclaimer</h2>
   <section className="disclaimer mt-4">
    <p>
     Techbropedia is committed to documenting the diverse stories and
     experiences of individuals within the Nigeria tech industry. The stories and experiences shared on this platform belong to the respective individuals and do not necessarily reflect the views of Techbropedia.
    </p>
    <p>
     The contents presented on Techbropedia are <Link href='/'>sourced</Link> from various individuals and are intended solely for the purpose of documenting personal journeys, achievements, and insights within the technology field. These stories are
     meant to provide inspiration, offer different perspectives, and celebrate
     the uniqueness of each individual&apos;s path.
    </p>
    <p>
     It&apos;s important to note that the stories published here are not
     intended to be taken as authoritative or superior sources of information.
     They are personal accounts and paths of the individuals involved.
     Readers are encouraged to seek additional information and diverse
     viewpoints to form a well-rounded understanding of the topics discussed.
    </p>
    <p>
     Techbropedia is dedicated to fostering inclusivity, sharing experiences,
     and inspiring others through the power of storytelling. We appreciate your
     understanding of the nature and purpose of the content presented on this
     platform. For any inquiries or concerns, please contact us at <a href="mailto:techbropedia@gmail.com" className="text-secondary-main hover:underline">techbropedia@gmail.com</a>.
    </p>
   </section>
  </article>
 );
};

export default DisclaimerPage;
