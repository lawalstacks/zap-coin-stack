import { About } from "../about";
import { Tokenomics } from "../tokenomics";

export const About_token = () => {
  return (
    <>
      <div id="About" className="-mt-2 relative pt-[5rem] pb-[10rem]  about_token">
        <About />
        <Tokenomics />
      </div>
    </>
  );
};
