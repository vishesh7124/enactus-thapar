import React from "react";

type BannerProps = {
  title: string;
  children: React.ReactNode;
};

import {motion} from "motion/react"

const Banner: React.FC<BannerProps> = ({ title, children }) => {
  return (
    <div className=" bg-[#363636]/50 rounded-[50px] flex flex-col justify-center p-8 gap-8 max-sm:gap-10 lg:min-w-2/3">
                          <div>
            <h2 className="text-4xl font-semibold font-poppins text-[#FFC221] max-sm:text-5xl ">
              {title}
            </h2>
            <div className="flex gap-4">

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="160"
                height="11"
                viewBox="0 0 255 11"
                fill="none"
                className="max-md:w-40"
              >
                <motion.path
                  initial={{ opacity: 0, pathLength: 0 }}
                  whileInView={{
                    opacity: 1,
                    pathLength: 1,
                    transition: { duration: 1, delay: 0.5 },
                  }}
                  d="M1.60484 8.53679C147.007 11.185 317.557 2.10532 226.566 2.10532C47.7763 2.10531 -54.1787 -1.67774 32.2393 4.75368C114.447 10.8717 214.22 10.2028 254 9.67173"
                  stroke="#FFF9E8"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
  

            </div>
          </div> 
      <div className="grid grid-flow-row grid-rows-1   lg:grid-flow-col lg:grid-rows-2 lg:gap-12 lg:text-xl font-satoshi">
        {children}
      </div>
    </div>
  );
};

export default Banner;
