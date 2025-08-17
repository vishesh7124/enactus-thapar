import React from "react";

type BannerProps = {
  title: string;
  children: React.ReactNode;
};

const Banner: React.FC<BannerProps> = ({ title, children }) => {
  return (
    <div className="max-w-[90%] sm:w-[1380px] min-h-[445px] h-auto bg-[#363636]/50 rounded-[50px] flex flex-col justify-center py-4 px-8">
      <h1 className="text-[#FFD400] text-4xl sm:text-[45PX] font-bold mb-12">{title}</h1>    
      <div className="grid grid-flow-col grid-rows-1 sm:grid-rows-2 gap-12 sm:text-2xl ml-4">
        {children}
      </div>
    </div>
  );
};

export default Banner;
