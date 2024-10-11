import { useAtom } from "jotai";
import { LinkIcon } from "./linkIcon";
import { NavButton } from "./navButton";
import { navHiddenAtom } from "@/store";
import React from "react";

export const HiddenBar = () => {
  const [show, setShow] = useAtom<boolean>(navHiddenAtom);
  return (
    <>
    
  
      <div
        className={`${
          show ? "w-[300px]" : "w-0"
        } duration-300 overflow-hidden fixed flex flex-col justify-center pb-10  top-0 right-0 pt-20 h-svh  z-50 min-[1700px]:hidden bg-white items-center`}
      >
        <img
          src="/icon/close.png"
          className=" absolute top-8 left-6 w-8 cursor-pointer"
          onClick={() => setShow(false)}
        />
        <div className="w-[250px] flex flex-col items-center justify-around h-full">
          <NavButton label="Stacking" />
          <NavButton label="About" />
          <NavButton label="How To Buy" />
          <NavButton label="Tokenomics" />
          <NavButton label="Roadmap" />
          <NavButton label="FWB" />
          <NavButton label="FAQs" />
          <NavButton label="White Paper" />
          <div className="flex gap-5">
            <LinkIcon />
          </div>
        </div>
      </div>
    </>
  );
};
