
import { useState } from "react";
interface Type {
  show: string;
  setShow: (e: string) => void;
}
export const Content: React.FC<Type> = ({ show, setShow }) => {
  return (
    <>
      <div className="relative z-20 flex flex-col gap-[30px]">
        <div
          className={`${
            show === "faq1" ? "h-fit" : "h-fit"
          } duration-500 overflow-hidden border-[6px] border-black rounded-[23px] p-[27px] max-[500px]:px-[10px] bg-[#F3C035] z-10 `}
        >
          <button
            className={`${
              show === "faq1" ? "text-[24px]" : "text-[20px]"
            } font-bold cursor-pointer`}
            onClick={() => setShow("faq1")}
          >
            What is ZAP?
          </button>
          {show === "faq1" && (
            <ul className="text-[20px] font-semibold">
              ZAP is more than just a meme coin—it's a powerful ecosystem built
              for:
              <br />
              <br />
              <li>
                • Instant and fee-free bridging between multiple blockchains
              </li>
              <li>• Lowest transaction fees</li>
              <li>• Lightning-fast transactions</li>
              <li>• High volume capacity—outpacing the competition</li>
              <li>
                • Dedicated blockchain explorer to see all transactions on the
                ZAP network
              </li>
            </ul>
          )}
        </div>
        <div
          className={`${
            show === "faq2" ? "h-fit" : "h-fit"
          } duration-500 overflow-hidden border-[6px] border-black rounded-[23px] p-[27px] max-[500px]:px-[10px] bg-[#F3C035] z-10 `}
        >
          <button
            className={`${
              show === "faq2" ? "text-[24px]" : "text-[20px]"
            } font-bold cursor-pointer`}
            onClick={() => setShow("faq2")}
          >
            When Can I Claim My Tokens?
          </button>
          {show === "faq2" && (
            <ul className="text-[20px] font-semibold">
              Tokens purchased during the presale will be claimable once the
              presale has finished. At that stage, reconnect the wallet you used
              to buy (such as MetaMask or Trust Wallet) and click "Claim." You
              can then start enjoying the benefits of holding $ZAP.
            </ul>
          )}
        </div>
        <div
          className={`${
            show === "faq3" ? "h-fit" : "h-fit"
          } duration-500 overflow-hidden border-[6px] border-black rounded-[23px] p-[27px] max-[500px]:px-[10px] bg-[#F3C035] z-10 `}
        >
          <button
            className={`${
              show === "faq3" ? "text-[24px]" : "text-[20px]"
            } font-bold cursor-pointer`}
            onClick={() => setShow("faq3")}
          >
            What Makes ZAP's Cross-Chain Technology Better?
          </button>
          {show === "faq3" && (
            <ul className="text-[20px] font-semibold">
              Our unique cross-chain bridge allows for:
              <br />
              <br />
              <li>
                • Faster Speed: Transactions are processed quickly across
                different blockchains, enhancing your crypto experience.
              </li>
              <li>
                • Lower Fees: For holders of 0.1% of the total supply, transfers
                are fee-free within our bridge system.
              </li>
              <li>-Higher Volume Capacity</li>
              <li>
                • Ease of Use: Our integration with platforms like Telegram and
                our user-friendly wallet make cross-chain transactions
                accessible to everyone.
              </li>
            </ul>
          )}
        </div>
        <div
          className={`${
            show === "faq4" ? "h-fit" : "h-fit"
          } duration-500 overflow-hidden border-[6px] border-black rounded-[23px] p-[27px] max-[500px]:px-[10px] bg-[#F3C035] z-10`}
        >
          <button
            className={`${
              show === "faq4" ? "text-[24px]" : "text-[20px]"
            } font-bold cursor-pointer`}
            onClick={() => setShow("faq4")}
          >
            When Will ZAP's Ecosystem Be Released?
          </button>
          {show === "faq4" && (
            <ul className="text-[20px] font-semibold">
              Our multi-chain wallet, blockchain explorer, and other ecosystem
              features will be released after the presale ends. That's when the
              real fun begins!
            </ul>
          )}
        </div>
      </div>
    </>
  );
};
