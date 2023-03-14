import { Bars2Icon, XMarkIcon } from "@heroicons/react/20/solid";

interface Props {
  isOpen?: boolean;
  onClick: () => void;
}
export default function MenuButton({ isOpen = false, onClick }: Props) {
  return (
    <button className="p-0 block tablet:hidden z-10">
      {isOpen ? (
        <XMarkIcon className="w-6" onClick={onClick} />
      ) : (
        <Bars2Icon className="w-6" onClick={onClick} />
      )}
    </button>
  );
}
