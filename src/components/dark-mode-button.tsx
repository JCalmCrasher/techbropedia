import { MoonIcon, SunIcon } from "@heroicons/react/20/solid";

interface Props {
  isDark?: boolean;
  onSwitch: () => void;
}
export default function DarkModeSwitcher(props: Props) {
  return (
    <button
      className="p-0 z-10"
      onClick={props.onSwitch}
    >
      {props.isDark ? (
        <SunIcon className="h-5 w-5 dark:tablet:text-secondary-main" />
      ) : (
        <MoonIcon className="h-5 w-5 tablet:text-secondary-main" />
      )}
    </button>
  );
}
