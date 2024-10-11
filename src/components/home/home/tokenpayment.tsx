export const Tokenpayment = () => {
  return (
    <>
     <div className="min-[1024px]:absolute relative md:scale-125  w-[32rem] 2xl:w-[35rem] top-[20%] bg-[#F3C035] ">
        {/*<div className="lg:absolute relative min-[522px]:w-[32rem] min-[522px]:scale-100 md:scale-125 lg:scale-100 2xl:w-[35rem] top-[20%] converttobackground" > */}
        
        
        <div className="absolute flex justify-between max-[522px]:left-[25%] w-[41%] top-[16%] left-[30%] text-[1rem] 2xl:w-[41%] 2xl:top-[16%] 2xl:left-[30%] 2xl:text-[1rem]">
          <span className="myriadpro">Days</span>
          <span className="myriadpro">Hours</span>
          <span className="myriadpro">Minutes</span>
          <span className="myriadpro">Seconds</span>
        </div>
        <div className="absolute flex justify-between w-[35%] top-[19.5%] left-[31%] text-[1.3rem] 2xl:w-[35%] 2xl:top-[19.5%] 2xl:left-[31%] 2xl:text-[1.3rem]">
          <label className="myriadpro">00</label>
          <label className="myriadpro">00</label>
          <label className="myriadpro">00</label>
          <label className="myriadpro">00</label>
        </div>
        <span className="absolute myriadpro_regular text-white top-[25.3%] text-[0.7rem] left-[39%] 2xl:top-[25.5%] 2xl:text-[0.7rem]  2xl:left-[40%]">
          Until next Price increase
        </span>
        <div className="absolute top-[38%] left-[35.5%] text-[0.85rem] 2xl:top-[38%] 2xl:left-[36.5%] 2xl:text-[0.85rem]">
          <span className="myriadpro">Your purchased $ZAP = </span>
          <span className="myriadpro">0</span>
        </div>
        <div className="absolute top-[42%] left-[35.5%] text-[0.85rem] 2xl:top-[41%] 2xl:left-[36.5%] 2xl:text-[0.85rem]">
          <span className="myriadpro">Your stakeable $ZAP = </span>
          <span className="myriadpro">0</span>
        </div>
        <div className="absolute top-[45.5%] left-[41%] text-[0.7rem] 2xl:top-[45.5%] 2xl:left-[41%] 2xl:text-[0.8rem]">
          <span className="myriadpro">1 $ZAP = </span>
          <span className="myriadpro">$0.0098</span>
        </div>
        <div className="absolute flex justify-between w-[30%] top-[52%] left-[35%] 2xl:w-[30%] 2xl:top-[52%] 2xl:left-[35%]">
          <img
            className="cursor-pointer rounded-[3rem] w-[47%] 2xl:w-[47%] hover:shadow-3xl"
            src="button/ETH.png"
          ></img>
          <img
            className="cursor-pointer rounded-[3rem] w-[47%] 2xl:w-[47%] hover:shadow-3xl"
            src="button/USDT.png"
          ></img>
        </div>
        <div className="absolute max-[522px]:w-[65%] top-[62%] left-[26.5%] text-[0.8rem] 2xl:top-[62%] 2xl:left-[26.5%] 2xl:text-[0.9rem]">
          <span className="myriadpro max-[522px]:mr-[15%] mr-[4.5rem] 2xl:mr-[5rem]">
            Pay with ETH
          </span>
          <span className="myriadpro">$ZAP You receive</span>
        </div>
        <div className="absolute flex justify-between w-[52%] top-[66%] left-[24%] 2xl:w-[52%] 2xl:top-[66%] 2xl:left-[24%] 2xl:text-[3rem]">
          <img src="button/input1.png" className="w-[45%]"></img>
          <img src="button/input2.png" className="w-[45%]"></img>
        </div>
        <div className="absolute flex justify-between w-[46%] max-[522px]:top-[65.5%] top-[66.4%] left-[27%] 2xl:w-[46%] 2xl:top-[66.25%] 2xl:left-[27%]">
          <input
            type="number"
            placeholder="0"
            className="myriadpro outline-none bg-transparent border-0 text-[1.1rem] w-[30%] 2xl:text-[1.2rem] p-0 2xl:w-[30%]"
          ></input>
          <input
            type="number"
            value={`0`}
            readOnly
            className=" outline-none bg-transparent border-0 myriadpro p-0 text-[1.1rem] w-[38%] 2xl:text-[1.2rem] 2xl:w-[38%]"
          ></input>
        </div>
        <div className="absolute flex justify-between max-[522px]:text-[0.6rem] w-[52%] top-[74%] left-[24%] text-[0.76rem] 2xl:w-[52%] 2xl:top-[74%] 2xl:left-[24%] 2xl:text-[0.8rem]">
          <div className="myriadpro relative rounded-[1rem] w-[45%]">
            <img src="button/button1.png"></img>
            <span className="absolute cursor-pointer hover:bg-[#1a82ab] top-[9%] left-[2%] px-[14%] py-[2.7%] 2xl:top-[10%] 2xl:left-[2%] 2xl:px-[15%] 2xl:py-[3%]  rounded-[2rem]">
              Connect Wallet
            </span>
          </div>
          <div className="myriadpro relative rounded-[1rem] w-[45%]">
            <img src="button/button1.png"></img>
            <span className="absolute top-[9%] left-[2%] px-[7.7%] py-[2.6%] 2xl:top-[10%] 2xl:left-[2%] rounded-[2rem] 2xl:px-[9.5%] 2xl:py-[3%] cursor-pointer hover:bg-[#1a82ab]">
              Don't Have Wallet
            </span>
          </div>
        </div>
      </div>
      
    </>
  );
};
