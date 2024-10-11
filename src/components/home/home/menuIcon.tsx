import { navHiddenAtom } from "@/store";
import { useAtom } from "jotai";

export const MenuIcon = () => {
  const [, setShow] = useAtom<boolean>(navHiddenAtom);
  return (
    <>
      <img
        src="/icon/menu.png"
        className="absolute lg:hidden top-5 right-44 w-16 cursor-pointer min-[1700px]:hidden max-sm:right-3 "
        onClick={() => setShow(true)}
      />
    </>
  );
};
