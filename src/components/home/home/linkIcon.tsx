
import { useRouter } from "next/navigation";
import React from "react";
import { NavButton } from "./navButton";

export const LinkIcon = () => {
  const router = useRouter();
  return (
    <>
    <div className="flex justify-center gap-4 relative z-20  -mt-5">
      <div className="relative h-20 w-48">
      <img src={`/other/ZAP LOGO BOX.png`} className="absolute h-28 w-full"/>
      
      <img src={`/other/85.png`} className=" absolute h-28  -left-10 z-30 bottom-0"/>
      <img src={`/other/ZAP NAME.png`} className=" z-30 absolute right-6 bottom-0"/>
    
      </div>
         <div className="font-[Jaro] flex -mt-5 items-center">
          <NavButton label="ABOUT"/>
          <NavButton label="HOW TO BUY" />
          <NavButton label="TOKENOMICS" />
          <NavButton label="ROADMAP" />
          <NavButton label="FAQs" />
  </div>
    <div className="flex -mt-3">
      <img
        src="/icon/ICONS.png"
        className="cursor-pointer h-24 hover:scale-105"
        onClick={() => router.push("https://web.telegram.org")}
      />
      <img
        src="/icon/ICONSt.png"
        className=" cursor-pointer h-24 hover:scale-105 " 
        onClick={() => router.push("https://web.telegram.org")}
      />
     
      <img
        src="/icon/icons2.png"
        className="h-28 cursor-pointer hover:scale-105"
    
      />
    
      </div>
      </div>
  
    </>
  );
};
