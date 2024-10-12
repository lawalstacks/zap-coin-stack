export const Roadmap = () => {
  return (
    <>
    <div>
      <img src={`/`}/>
      </div>
      <div
        className="relative pt-[5rem] pb-[10rem] z-20"
        //style={{
          //backgroundImage: "url(/bg/roadmap.jpg)",
          //backgroundSize: "cover",
          //backgroundPosition: "top",
       // }}
      >
        <div
          id="Roadmap"
          className="flex flex-col items-start text-[20px] max-[450px]:pt-[12rem] max-[640px]:w-[90vw] max-[640px]:mx-auto max-[640px]:gap-[1rem] max-[640px]:pt-[13rem] sm:w-[80vw] sm:mx-auto xl:w-[60vw] 2xl:w-[50vw]  text-[#073736] sm:pt-[10rem] sm:gap-[1rem] sm:leading-[1.5rem] md:pt-[10rem] lg:pt-[16rem] lg:gap-[3rem] 2xl:pt-[20rem] "
        >
          <div
            className="max-[640px]:w-full max-[640px]:pb-[1rem] max-[640px]:pt-[2rem] max-[640px]:px-[1.5rem] sm:w-full sm:pb-[1rem] sm:pt-[3rem] sm:px-[1.5rem] relative"
            style={{
              backgroundColor: "#6eeeff",
              borderColor: "black",
              borderWidth: "0.5rem",
              borderRadius: "2rem",
            }}
          >
            <img
              src="/roadmap/dress1.png "
              className="absolute max-[450px]:w-[60%] max-[450px]:left-[-4%] max-[450px]:top-[-8%] max-[640px]:w-[50%] max-[640px]:left-[-4%] max-[640px]:top-[-14%] sm:w-[50%] sm:left-[-4%] sm:top-[-14%] md:w-[35%] md:left-[-3%]"
            ></img>
            <img
              src="/roadmap/dress3.png "
              className="absolute max-[450px]:w-[40%] max-[450px]:right-[-7%] max-[450px]:bottom-[-10%] max-[640px]:w-[40%] max-[640px]:right-[-7%] max-[640px]:bottom-[-14%] sm:w-[40%] sm:right-[-7%] sm:bottom-[-14%] md:w-[30%] md:right-[-5%]"
            ></img>
            <h1 className=" font-bold text-[24px] leading-[40px] ">
              Step 1 - Launching ZAP
            </h1>
            <p className="font-semibold ">
              The time has come for ZAPPY to introduce a new era of speed and
              utility in meme coins. By leveraging our innovative cross-chain
              bridge technology, ZAP is ready to accelerate the crypto
              experience. He’s now ready to release his rewards.
            </p>
          </div>
          <div
            className="max-[640px]:w-full max-[640px]:py-[1rem] max-[640px]:px-[1.5rem] relative sm:w-full sm:py-[1rem] sm:px-[1.5rem] lg:w-[50vw] xl:w-[40vw] 2xl:w-[25vw]"
            style={{
              backgroundColor: "#6eeeff",
              borderColor: "black",
              borderWidth: "0.5rem",
              borderRadius: "2rem",
            }}
          >
            <img
              src="/roadmap/dress4.png "
              className="absolute max-[450px]:w-[35%] max-[450px]:right-[-7%] max-[450px]:bottom-[-18%] max-[640px]:w-[25%] max-[640px]:right-[-5%] max-[640px]:bottom-[-18%] sm:w-[25%] sm:right-[-5%] sm:bottom-[-18%] md:bottom-[-25%] md:w-[17%] md:right-[-3%] lg:w-[30%] lg:right-[-5%] lg:bottom-[-34%] 2xl:w-[50%] 2xl:right-[-9%] 2xl:bottom-[-50%]"
            ></img>
            <h1 className=" font-bold text-[24px] leading-[40px] ">
              Step 2 - Presale and Expansion
            </h1>
            <p className=" font-semibold ">
              During the presale, we're offering the opportunity to become an
              early holder of $ZAP. Join us to enjoy benefits like fee-free
              transfers and passive income from transaction fees.
            </p>
          </div>
          <div
            className="max-[640px]:w-full max-[640px]:py-[1rem] max-[640px]:px-[1.5rem] relative sm:w-full sm:py-[1rem] sm:px-[1.5rem] lg:w-[40vw] xl:w-[30vw] 2xl:w-[20vw]"
            style={{
              backgroundColor: "#6eeeff",
              borderColor: "black",
              borderWidth: "0.5rem",
              borderRadius: "2rem",
            }}
          >
            <img
              src="/roadmap/dress2.png "
              className="absolute  max-[450px]:w-[55%] max-[450px]:left-[-7%] max-[450px]:top-[-9%] max-[640px]:w-[35%] max-[640px]:left-[-5%] max-[640px]:top-[-6%] sm:w-[35%] sm:left-[-5%] sm:top-[-6%] md:w-[25%] md:top-[-15%] lg:w-[50%] xl:w-[60%] xl:left-[-11%] xl:top-[-9%] 2xl:w-[80%]"
            ></img>
            <img
              src="/roadmap/dress5.png "
              className="absolute w-[0] lg:w-[50%] lg:right-[-100%] lg:bottom-[30%] xl:w-[60%] xl:right-[-120%] 2xl:w-[90%] 2xl:right-[-160%] "
            ></img>
            <h1 className=" font-bold text-[24px] leading-[40px] ">
              Step 3 - Ecosystem Growth
            </h1>
            <p className=" font-semibold">
              After the presale, we'll launch our multi-chain wallet, blockchain
              explorer, and AI-powered trading tools, creating a significant
              impact in the crypto world. ZAPPY is rewarding the community with
              endless possibilities and innovative tools to maximize your crypto
              journey.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
