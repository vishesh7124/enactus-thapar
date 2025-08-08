import {motion} from "motion/react"
import { useState } from "react";
import { ProfileType } from "@/types/profileType";
import { Link } from "react-router";

interface Props {
    member: ProfileType
}

const ProfileCard = ({member}:Props) => {
    const [cardAnimation, setCardAnimation] = useState<boolean>(false);
    
  return (
    <div
    className="card relative h-[15.5rem] w-48 max-sm:w-52 p-1 rounded-[1rem] bg-[#FFF9E8] overflow-hidden  "
    onMouseEnter={() => setCardAnimation(true)}
    onMouseLeave={() => setCardAnimation(false)}
  >
    <motion.div
      className="relative  w-full h-full rounded-xl overflow-hidden  "
      animate={cardAnimation ? { height: "11rem", transition:{ type:"spring", duration:1} } : { height: "100%", transition:{type:"spring", duration:1} }}
    >
      <motion.img
        src={member.bgLayer}
        animate={
          cardAnimation ? { height: "14rem", transition:{type:"spring", duration:1} } : { height: "100%", transition:{type:"spring", duration:1} }
        }
        alt=""
        className=" absolute inset-0  z-10 w-full h-full object-cover rounded-xl "
      />
      <motion.div
        initial={{ y: -7, x: 5, opacity: 0.05, borderWidth: "1.5rem " }}
        animate={
          cardAnimation
            ? {
                y: 0,
                x: 0,
                opacity: 1,
                borderWidth: "1.25rem",
                borderColor: "#FFC221",
                transition:{type:"spring", duration:0.5}
                
              }
            : { y: -7, x: 5, opacity: 0.05, borderWidth: "1.5rem ", transition:{type:"spring", duration:0.5} }
        }
        className="absolute z-20 right-5 top-4 circle border-[1.25rem] border-[#FFC221] rounded-full h-32 w-32 "
      ></motion.div>
      <motion.img
        src={member.img}
        animate={
          cardAnimation ? { height: "14rem", transition:{type:"spring", duration:1, bounce:0} } : { height: "100%", transition:{type:"spring", duration:1} }
        }
        alt=""
        className=" absolute inset-0 z-30 w-full h-full  object-cover rounded-xl "
      />
      {/* <img src={president} alt="" className=" z-30 w-full h-full object-cover " /> */}
    </motion.div>
    <div className="info text-[#4A4842] flex flex-col justify-center gap-0  ">
      <div>
        <h2 className="text-sm ">{member.name}</h2>
        <p className="text-xs">{member.position}</p>
      </div>
      <motion.div className="social flex gap-1 items-center justify-end mb-0.5  "  animate={!cardAnimation ?{y:-50, opacity:0}:{y:0, opacity:1, transition:{type:"spring",delay:0.1, duration:1}}} >
        <Link to={`${member.linkedin}`} >
            <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5rem"
            height="1.5rem"
            viewBox="0 0 32 32"
            fill="none"
            className="text-[#A29D8D]  cursor-pointer"
            >
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16ZM9.53028 11.8066C10.67 11.8066 11.5939 10.8351 11.5939 9.63666C11.5939 8.4382 10.67 7.46667 9.53028 7.46667C8.39058 7.46667 7.46667 8.4382 7.46667 9.63666C7.46667 10.8351 8.39058 11.8066 9.53028 11.8066ZM11.3708 12.921H7.68976V24.5333H11.3708V12.921ZM17.0597 24.5333H13.3787V12.921H17.0597V14.4704C17.5272 13.7136 18.4738 12.6864 20.2946 12.6864C22.7486 12.6864 24.5333 14.3285 24.5333 17.9061V24.5333H20.8523V18.3753C20.8523 16.7918 20.3503 15.7361 19.0118 15.7361C17.9357 15.7361 17.2521 16.5615 17.0597 17.5199V24.5333Z"
                className=" fill-[#A29D8D] hover:fill-[#087BB9]"
            />
            </svg>
        
        </Link>
        {member.instagram &&
        
        <Link to={`/${member.instagram}`}>
            <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5rem"
            height="1.5rem"
            viewBox="0 0 32 32"
            fill="none"
            className="text-[#A29D8D] cursor-pointer"
            >
            <defs>
                <linearGradient
                id="instagram-gradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
                >
                <stop offset="0%" stop-color="#8A2387" />
                <stop offset="50%" stop-color="#E94057" />
                <stop offset="100%" stop-color="#F27121" />
                </linearGradient>
            </defs>
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16ZM11.618 16C11.618 13.5799 13.5799 11.618 16 11.618C18.4201 11.618 20.382 13.5799 20.382 16C20.382 18.4201 18.4201 20.382 16 20.382C13.5799 20.382 11.618 18.4201 11.618 16ZM16 18.8445C14.4291 18.8445 13.1555 17.571 13.1555 16C13.1555 14.4291 14.4291 13.1556 16 13.1556C17.5709 13.1556 18.8444 14.4291 18.8444 16C18.8444 17.571 17.5709 18.8445 16 18.8445ZM21.5791 11.4449C21.5791 12.0104 21.1207 12.4689 20.5551 12.4689C19.9896 12.4689 19.5311 12.0104 19.5311 11.4449C19.5311 10.8794 19.9896 10.4209 20.5551 10.4209C21.1207 10.4209 21.5791 10.8794 21.5791 11.4449ZM12.4817 7.51802C13.3919 7.47649 13.6825 7.46667 16 7.46667C18.3175 7.46667 18.6081 7.47649 19.5183 7.51802C20.4266 7.55948 21.0468 7.70371 21.5897 7.91467C22.1508 8.13275 22.6267 8.42453 23.1011 8.89892C23.5755 9.37332 23.8673 9.8492 24.0853 10.4103C24.2963 10.9532 24.4405 11.5734 24.482 12.4818C24.5235 13.3919 24.5333 13.6825 24.5333 16C24.5333 18.3175 24.5235 18.6081 24.482 19.5183C24.4405 20.4266 24.2963 21.0469 24.0853 21.5897C23.8673 22.1508 23.5755 22.6267 23.1011 23.1011C22.6267 23.5755 22.1508 23.8673 21.5897 24.0854C21.0468 24.2963 20.4266 24.4406 19.5183 24.482C18.6081 24.5235 18.3175 24.5333 16 24.5333C13.6825 24.5333 13.3919 24.5235 12.4817 24.482C11.5734 24.4406 10.9531 24.2963 10.4103 24.0854C9.84917 23.8673 9.37328 23.5755 8.89889 23.1011C8.4245 22.6267 8.13271 22.1508 7.91464 21.5897C7.70368 21.0469 7.55945 20.4266 7.51798 19.5183C7.47646 18.6081 7.46667 18.3175 7.46667 16C7.46667 13.6825 7.47646 13.3919 7.51798 12.4818C7.55945 11.5734 7.70368 10.9532 7.91464 10.4103C8.13271 9.8492 8.4245 9.37332 8.89889 8.89892C9.37328 8.42453 9.84917 8.13275 10.4103 7.91467C10.9531 7.70371 11.5734 7.55948 12.4817 7.51802ZM16 9.00424C18.2785 9.00424 18.5484 9.01291 19.4482 9.05396C20.2802 9.09193 20.732 9.23095 21.0327 9.34778C21.431 9.50258 21.7153 9.68752 22.0139 9.98612C22.3125 10.2847 22.4974 10.569 22.6522 10.9673C22.7691 11.268 22.9081 11.7198 22.946 12.5518C22.9871 13.4516 22.9958 13.7215 22.9958 16C22.9958 18.2785 22.9871 18.5484 22.946 19.4482C22.9081 20.2802 22.7691 20.732 22.6522 21.0328C22.4974 21.431 22.3125 21.7153 22.0139 22.0139C21.7153 22.3125 21.431 22.4975 21.0327 22.6522C20.732 22.7691 20.2802 22.9081 19.4482 22.9461C18.5485 22.9871 18.2786 22.9958 16 22.9958C13.7213 22.9958 13.4515 22.9871 12.5518 22.9461C11.7198 22.9081 11.268 22.7691 10.9673 22.6522C10.569 22.4975 10.2847 22.3125 9.98608 22.0139C9.68749 21.7153 9.50254 21.431 9.34778 21.0328C9.23091 20.732 9.0919 20.2802 9.05393 19.4482C9.01287 18.5484 9.0042 18.2785 9.0042 16C9.0042 13.7215 9.01287 13.4516 9.05393 12.5518C9.0919 11.7198 9.23091 11.268 9.34778 10.9673C9.50254 10.569 9.68749 10.2847 9.98608 9.98612C10.2847 9.68752 10.569 9.50258 10.9673 9.34778C11.268 9.23095 11.7198 9.09193 12.5518 9.05396C13.4516 9.01291 13.7215 9.00424 16 9.00424Z"
                className=" fill-[#A29D8D] hover:fill-[url(#instagram-gradient)]"
            />
            </svg>
        
        </Link>
        }
      </motion.div>
    </div>
  </div>
  )
}

export default ProfileCard