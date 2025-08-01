import React from "react";


const BgWrapper: React.FC<{
    children?: React.ReactNode;
}> = ({children}) => {
  return (
    <div className="relative min-h-screen w-screen">
      <div className="fixed inset-0 -z-30 bg-[radial-gradient(125%_125%_at_50%_10%,#000_50%,#d2a829_100%)]" />
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:100px_100px]" />

      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default BgWrapper;
