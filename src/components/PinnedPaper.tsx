
import React, { useState, ReactNode } from 'react';

// Type definitions
type RotationType = 'rotate-0' | 'rotate-1' | 'rotate-2' | 'rotate-3' | '-rotate-1' | '-rotate-2' | '-rotate-3';




interface PinnedPaperProps {
  children: ReactNode;
  rotation?: RotationType;
  paperColor?: string;
  className?: string;

}

const PinnedPaper: React.FC<PinnedPaperProps> = ({ 
  children, 
  rotation = 'rotate-2', 
  paperColor = 'bg-green-500',
  className = '',

}) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);



  return (
    <div 
      className={`relative  p-6 m-5 rounded-sm shadow-xl drop-shadow-lg transform transition-all duration-300 cursor-pointer font-serif text-gray-800 leading-relaxed w-fit   ${rotation} ${isHovered ? 'scale-105 shadow-2xl drop-shadow-2xl' : 'scale-100'} ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Pin shadow on wall */}
      {/* <div className="absolute -top-1.5 left-1/2 transform -translate-x-1/2 w-4 h-3 bg-green opacity-70 rounded-full blur-md z-10"></div> */}
      
      {/* Pin */}
      {/* <div className={`absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 ${pinColor} rounded-full shadow-lg drop-shadow-md border-2 border-opacity-80 z-20`}
           style={{
             background: `radial-gradient(circle at 30% 30%, green, rgba(0,0,0,0.2))`
           }}>
      </div> */}
      
      {/* Hole in paper */}
      <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-green-500 rounded-full shadow-inner z-10 ring-1 ring-gray-400 ring-opacity-50"></div>
      
      {/* Paper content */}
      <div className="relative z-0">
        {children}
      </div>
    </div>
  );
};

export default PinnedPaper