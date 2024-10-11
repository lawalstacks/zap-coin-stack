"use client";
import { Item } from "./item";

export const Tokenomics = () => {
  return (
    <>
      <div className="mt-[300px] max-sm:mt-[250px] relative mx-[5%] max-w-[90%]  w-[1200px] border-[4.5px] rounded-3xl  border-black  py-16 bg-[#eebb31] px-10 max-sm:px-2">
        <div id="Tokenomics" className="-mt-40 absolute"></div>
        <img
          src="/bg/token_dress/token_dress1.png"
          className="w-[400px] absolute -top-[85px] -left-[20px] h-[150px]"
        />
        <img
          src="/bg/token_dress/token_dress2.png"
          className="w-[250px] absolute -right-[13px] -top-[28px] max-sm:hidden"
        />
        <img
          src="/bg/token_dress/token_dress3.png"
          className="w-[350px] absolute -bottom-[25px] -right-[5px] h-[120px]"
        />
        <h1
          className=" text-[34px] max-sm:text-[24px] font-bold pr-[110px] max-sm:pr-0"
          style={{
            // WebkitTextStroke: "2px white",
            textShadow:
              "1.2px 1.2px 0 white, -1.2px -1.2px 0 white, -1.2px 1.2px 0 white, 1.2px -1.2px 0 white",
          }}
        >
          The engine that makes the $ZAP ecosystem run.
        </h1>
        <div className="flex  gap-6  overflow-x-auto  my-5">
          <Item
            title={"Presale 50%"}
            content={
              "50% of the total supply is available during the presale for early supporters who want to be part of ZAP's journey from the start."
            }
            className={""}
          />
          <Item
            title={"Marketing and Development: 50%"}
            content={
              "The remaining 50% is allocated for marketing efforts and ongoing development to continuously grow the project."
            }
            className={""}
          />
          <Item
            title={"Transaction Fees "}
            content={
              "A 5% buy and sell fee is applied to all transactions, which is reinvested into marketing and development to ensure continuous growth and innovation."
            }
            className={""}
          />
        </div>
        <div className="flex gap-8 max-[800px]:flex-col items-end">
          <div className="">
            <p className=" text-[26px] font-semibold max-sm:text-[22px]">
              Total Token Supply: 100%
            </p>
            <p className=" right-[300px] text-[20px] max-sm:text-[18px] font-semibold pl-3 font-[Thomas,cursive]">
              Then ZAPPY built his own solution: a state-of-the-art cross-chain
              technology that rewards users with freedom and speed.
            </p>
          </div>
          <button
            onClick={() => window.open("/white-paper.pdf")}
            className="text-[#073736] text-[16px] font-semibold hover:-translate-y-[2px] w-[300px] text-right z-10 underline underline-offset-2"
          >
            Read $ZAP Whitepaper
          </button>
        </div>
      </div>
    </>
  );
};
