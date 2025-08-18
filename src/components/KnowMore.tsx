import { NavLink } from "react-router";
import { motion } from "motion/react";
import { useState } from "react";
import { cn } from "@/lib/utils";



const KnowMore = ({path,className,bgClass}:{path:string,className?:string,bgClass?:string}) => {
    const [buttonAnimation, setButtonAnimation] = useState(false);

  return (
    <NavLink to={path} className={cn("mt-6 inline-block relative w-fit cursor-pointer",className)}>
        
    <motion.div
      className={cn("absolute inset-0 z-[4] w-fit rounded-full bg-yellow-400",bgClass)}
      initial={{ width: "30%" }}
      animate={{ width: buttonAnimation?"100%":"30%" }}
      transition={{
        duration: 0.5,
        ease: "easeInOut"
      }}
      
  // onMouseEnter={() => setButtonAnimation(true)}
  // onMouseLeave={() => setButtonAnimation(false)}
      />
  

      <motion.div
        className="arrow relative z-[5] flex items-center w-fit rounded-full  "
        onMouseEnter={() => setButtonAnimation(true)}
        onMouseLeave={() => setButtonAnimation(false)}

      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="38"
          height="38"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#000000"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={cn("feather feather-arrow-right bg-[#FFC221] rounded-full p-2 ",bgClass)}
        >
          <motion.line
            initial={{ opacity: 0, pathLength: 0 }}
            animate={
              buttonAnimation
                ? {
                    opacity: 1,
                    pathLength: 1,
                    transition: { duration: 0.5, delay: 0.2 },
                  }
                : {
                    opacity: 0,
                    pathLength: 0,
                    transition: { duration: 0.5 },
                  }
            }
            x1="5"
            y1="12"
            x2="19"
            y2="12"
          ></motion.line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
        <motion.p className="arrow-text p-2" animate={{color:buttonAnimation?"black":"white"}} transition={{duration:2,delay:0.5}} >Know More</motion.p>
      </motion.div>
    </NavLink>
  )
}

export default KnowMore