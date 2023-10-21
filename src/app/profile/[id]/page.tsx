import Container from "@/components/container";
import { unSlugify } from "@/lib/helpers";
import type { Params } from "@/types";

export default function ProfilePage({ params: { id } }: Params) {
 return (
  <div className="px-x-sm tablet:px-x-md laptop:px-x-lg">
   <h1 className="capitalize text-headline-sm">{unSlugify(id)}</h1>
   <div className="mt-4 mb-auto h-screen">
    <p>Working on this section. Please check back later.</p>
   </div>
  </div>
 );
}
