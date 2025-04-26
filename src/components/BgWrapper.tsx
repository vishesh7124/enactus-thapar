import React from "react";


const BgWrapper: React.FC<{
    children?: React.ReactNode;
}> = ({children}) => {
  return (
    <div className="fixed overflow-y-scroll inset-0 -z-20 h-full w-screen [background:radial-gradient(125%_125%_at_50%_10%,#000_50%,#d2a829_100%)] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:100px_100px]">
      <div className=" fixed overflow-y-scroll overflow-x-hidden  inset-0 -z-10 min-h-screen w-screen   bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:100px_100px]">
        {children}
      </div>
    </div>
  );
};

export default BgWrapper;
