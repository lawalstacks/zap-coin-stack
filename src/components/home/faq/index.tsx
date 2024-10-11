"use client";
import { useState } from "react";
import { Content } from "./content";

export const Faq = () => {
  const [show, setShow] = useState<string>("faq1");
  return (
    <>
      <div
        id="FAQs"
        className="faq relative  -mt-10 pt-[200px] pb-[200px] lg:pl-[20%] overflow-hidden max-lg:flex justify-center items-center"
      >       
        <div className=" relative w-[600px] max-lg:w-[500px] max-sm:w-[400px] max-[500px]:w-full max-w-[95%]">
          <Content show={show} setShow={setShow} />
          <img
            src="/bg/faq_dress/faq_dress1-1.png"
            className="absolute -left-[110px] top-[20px] w-[120px] "
          />
          <img
            src="/bg/faq_dress/faq_dress1-2.png"
            className="absolute -left-[111.6px] bottom-[0px] w-[200px] "
          />
          <img
            src="/bg/faq_dress/faq_dress2-1.png"
            className="absolute -right-[89px] top-[0px] w-[90px] "
          />
          {(show === "faq1" || show === "faq3") && (
            <img
              src="/bg/faq_dress/faq_dress2-2.png"
              className="absolute -right-[114px] bottom-[110px] w-[120px] "
            />
          )}
          <img
            src="/bg/faq_dress/faq_dress2-3.png"
            className="absolute -right-[108px] -bottom-[25px] w-[200px] "
          />
        </div>
      </div>
    </>
  );
};
