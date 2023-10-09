type SearchInputProps = {
 setSearchQuery: (query: string) => void;
};
export default function SearchInput({ setSearchQuery }: SearchInputProps) {
 return (
  <input
   type="text"
   onChange={(e) => setSearchQuery(e.target.value)}
   className="text-body-sm text-primary-main h-14 rounded-lg p-[10px] dark:bg-white focus-visible:bg-white outline outline-2 outline-primary-main focus-visible:outline-secondary-main w-full max-w-lg"
   placeholder="Search for names, roles"
  />
 );
}
