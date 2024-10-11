import { useState } from "react";

export const Item = ({ label }: { label: string }) => {
  const [show, setShow] = useState<string>("");
  const scrollToSection = (t: string) => {
    const element = document.getElementById(t);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <button onClick={() => scrollToSection(label)}>
        <div
          onMouseEnter={() => setShow(label)}
          onMouseLeave={() => setShow("")}
          className="rounded-full w-2 h-2 bg-indigo-900 relative m-2"
        >
          <div
            className={`${
              show === label
                ? "px-2 py-1 rounded-md bg-indigo-600 "
                : "w-0"
            } overflow-hidden duration-100 absolute right-3 -top-3 h-8 text-white font-semibold text-right `}
          >
            {label}
          </div>
        </div>
      </button>
    </>
  );
};
