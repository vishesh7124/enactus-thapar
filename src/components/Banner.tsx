import React from "react";

type BannerProps = {
  title: string;
  children: React.ReactNode;
};

const Banner: React.FC<BannerProps> = ({ title, children }) => {
  return (
    <div className="max-w-[90%]  sm:max-w-7xl sm:w-[1380px] min-h-[445px] h-auto bg-[#363636]/50 rounded-[50px] flex flex-col justify-center py-4 px-8">
      <h1 className="text-[#FFD400] text-4xl sm:text-5xl mb-12">{title}</h1>    
      <div className="grid grid-flow-row grid-rows-1 gap-6 ml-4 lg:grid-flow-col lg:grid-rows-2 lg:gap-12 lg:text-2xl">
        {children}
      </div>
    </div>
  );
};

export default Banner;
