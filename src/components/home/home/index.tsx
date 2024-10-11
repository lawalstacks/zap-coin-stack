"use client";
import { NavButton } from "./navButton";
import { Content } from "./content";
import { Tokenpayment } from "./tokenpayment";
import { HiddenBar } from "./hiddenBar";
import { LinkIcon } from "./linkIcon";
import { useAtom } from "jotai";
import { navHiddenAtom } from "@/store";
import { MenuIcon } from "./menuIcon";
import Form from "../../form"

const Home = () => {
  const [, setShow] = useAtom<boolean>(navHiddenAtom);
  return (
    <>
      <div id="Home" className=" h-[1000px] relative z-10 home">
        
        <img
          src="/bg/rabbit.png"
          className="lg:hidden absolute top-[900px] "
        />
       
        <div className="absolute flex flex-wrap  top-[3.5%] left-[23%] right-[10%] gap-[1.5vw] max-[1700px]:hidden  ">
          <NavButton label="Stacking" />
          <NavButton label="About" />
          <NavButton label="How To Buy" />
          <NavButton label="Tokenomics" />
          <NavButton label="Roadmap" />
          <NavButton label="FWB" />
          <NavButton label="FAQs" />
          <NavButton label="White Paper" />
        </div>
        <MenuIcon />
        <HiddenBar />
        <div className=" absolute top-7 right-14 flex gap-2 max-sm:hidden">
          <LinkIcon />
        </div>
        <div className="max-[1024px]:flex max-[1024px]:flex-col max-[1024px]:items-center max-[1024px]:gap-16 max-md:gap-4 w-full max-[1024px]:pt-28 max-md:pt-20   ">
          <Form/>
          <Content />
        </div>
      </div>
    </>
  );
};
export default Home;
