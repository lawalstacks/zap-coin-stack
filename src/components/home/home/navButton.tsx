import { navHiddenAtom } from "@/store";
import { useAtom } from "jotai";

interface Type {
  label: string;
}
export const NavButton: React.FC<Type> = ({ label }) => {
  const [, setShow] = useAtom<boolean>(navHiddenAtom);
  const scrollToSection = (label: string) => {
    if (label === "White Paper") {
      window.open("/white-paper.pdf");
      return;
    }
    const element = document.getElementById(label);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <button
        className={`font-[Thomas,cursive] text-[28px] max-[1700px]:text-[24px] text-black font-bold hover:text-lime-500`}
        onClick={() => {
          scrollToSection(label);
          setShow(false);
        }}
      >
        {label}
      </button>
    </>
  );
};
