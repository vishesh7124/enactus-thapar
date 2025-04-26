import grpPic from "../assets/grp.webp";
import { motion } from "motion/react";
import president from "../assets/SahirKhan-removebg-preview.png"
import layer1 from "../assets/SahirKhan.jpg"
import { useState } from "react";
import { IconBrandLinkedin } from "@tabler/icons-react";
import { IconBrandInstagram } from "@tabler/icons-react";

const Team = () => {
    const [cardAnimation, setCardAnimation] = useState<boolean>(false)
  return (
    <>
      <div
        style={{ backdropFilter: "blur(10px)" }}
        className=" bg-[#30303074] gap-16  relative max-[960px]:mx-24  max-sm:mx-7  max-sm:mt-40 mx-40 my-20 mt-50  rounded-4xl text-white p-8 flex justify-center max-sm:gap-8 items-center max-[960px]:flex-col"
      >
        <div className="w-1/2 max-[960px]:w-full flex flex-col justify-center items-start  ">
          <div>
            <h2 className="text-6xl text-[#FFC221] max-sm:text-5xl font-semibold ">
              <span className="text-white">Our</span> Team
            </h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="255"
              height="11"
              viewBox="0 0 255 11"
              fill="none"
              className="max-sm:w-52"
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
          <p className="mt-6 max-sm:text-sm ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
          </p>
        </div>
        <div className="h-80  max-sm:h-64   ">
          <img
            src={grpPic}
            className=" h-full w-full border-8 border-[#FFC221] object-cover rounded-3xl"
            alt=""
          />
        </div>
      </div>

      <div className="relative z-0 w-full flex flex-col justify-center items-center gap-12 text-white">
        <div className="head">
          <div>
            <h2 className="text-6xl text-[#FFC221] max-sm:text-5xl font-semibold ">
              Executive Board
            </h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="440"
              height="12"
              viewBox="0 0 469 12"
              fill="none"
              className="max-sm:w-[22rem]"
            >
              <motion.path
                d="M3.00371 8.56722C270.82 11.1827 584.955 2.21515 417.359 2.21515C88.0468 2.21514 -99.7438 -1.52121 59.4293 4.83081C210.847 10.8733 394.619 10.2127 467.89 9.68815"
                stroke="#FFF9E8"
                stroke-width="2"
                stroke-linecap="round"
                initial={{ opacity: 0, pathLength: 0 }}
                whileInView={{
                  opacity: 1,
                  pathLength: 1,
                  transition: { duration: 1, delay: 0.5 },
                }}
              />
            </svg>
          </div>
        </div>
        <div className="flex flex-wrap px-36 max-sm:px-20 justify-center items-center gap-11 my-4 w-full" >
               {/* <div className="card h-44 w-40 bg-red-300 ">

               </div> */}
               <div className="card relative h-[15.5rem] w-48 max-sm:w-52 p-1 rounded-xl bg-white overflow-hidden  "
                onMouseEnter={()=> setCardAnimation(true)}
                onMouseLeave={()=> setCardAnimation(false)}
               >
                    <motion.div className="relative  w-full h-full rounded-xl overflow-hidden  " animate={cardAnimation?{height:"11rem"}:{height:"100%"}}>
                        <motion.img  src={layer1} animate={cardAnimation?{height:"14rem"}:{height:"100%"}}  alt="" className=" absolute inset-0  z-10 w-full h-full object-cover rounded-xl " />
                        <motion.div initial={{y:-7, x:5, opacity:0.05, borderWidth:"1.5rem "}} animate={cardAnimation?{y:0,x:0,opacity:1,borderWidth:"1.25rem",borderColor:"#FFC221"}:""}  className="absolute z-20 right-5 top-4 circle border-[1.25rem] border-[#FFC221] rounded-full h-32 w-32 "></motion.div>
                        <motion.img  src={president} animate={cardAnimation?{height:"14rem"}:{height:"100%"}}  alt="" className=" absolute inset-0 z-30 w-full h-full  object-cover rounded-xl " />
                        {/* <img src={president} alt="" className=" z-30 w-full h-full object-cover " /> */}
                    </motion.div>
                    <div className="info text-[#4A4842] flex flex-col justify-center gap-0  ">
                        <div>
                            <h2 className="text-sm " >Sahir Khan</h2>
                            <p className="text-xs" >President</p>
                        </div>
                        <div className="social flex gap-1 items-center justify-end mb-0.5">
                        <IconBrandLinkedin className="h-6 w-6"/>
                        <IconBrandInstagram className="h-6 w-6" />
                        </div>
                    </div>
               </div>
        </div>
      </div>


    </>
  );
};

export default Team;
