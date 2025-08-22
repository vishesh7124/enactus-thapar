import { IconMenu } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { NavLink, useLocation } from "react-router";
import enactusLogo from "../assets/enactus.webp";
import { motion } from "motion/react";

const Navbar = () => {
  const navItems: string[] = [
    "Home",
    // "About Us",
    "Projects",
    "Team",
    "Events",
    // "Blog",
  ];
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const location = useLocation();
  const isMobile = window.matchMedia("(max-width: 520px)").matches


  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <motion.div className="fixed z-20 text-white top-8 flex w-full justify-center items-center">
      <motion.div
        style={{ backdropFilter: "blur(10px)" }}
        initial={{ width: "100%", borderRadius: 0 }}
        animate={{
          width: !isMobile?"70%":"80%",
          borderRadius: "2rem",
          transition: { type: "spring", duration: 2, bounce: 0.5 },
        }}
        className={`  bg-[#30303074]  rounded-4xl  p-[0.8rem]  max-sm:${
          menuOpen
            ? "flex w-full flex-col gap-6 justify-end items-center"
            : ""
        } `}
      >
        <div className="flex  justify-between sm:flex sm:justify-between items-center">
            <div className="flex items-start justify-center gap-1" >
                <img className=" w-10 object-contain " src={enactusLogo} />
                <div className=" relative flex flex-col items-end gap-0">
                    <p className="font-semibold font-sans" >enactus</p>
                    <p className=" absolute text-[0.6rem] top-5 " >Thapar</p>

                </div>

            </div>

          <div className="links flex justify-between items-center max-[960px]:hidden font-text-secondary  gap-8">
            {navItems.map((item, index) => (
              <NavLink
                key={index}
                to={item!=="Home"?`/${item.replace(/\s+/g, "").toLowerCase()}${item==="Events"? "/aarambh":""}`:"/"}
                className={({ isActive }) =>
                    isActive ? "text-[#FFC221]" : "text-white hover:text-[#FFC221] "
                  }              >
                {item}
              </NavLink>
            ))}
            <button className=" w-20 relative inline-flex h-12 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_6s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#000_0%,#604f23e7_50%,#fff_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-[#FFC221] px-3 py-1 text-sm font-medium text-zinc-950 backdrop-blur-3xl">
                <NavLink to="/atrangi">Shop</NavLink>
              </span>
            </button>
          </div>
          <div
            className="hamburger-menu min-[960px]:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <X className="h-4 w-4" />
            ) : (
              <IconMenu className="h-4 w-4" />
            )}
          </div>
        </div>
        {menuOpen && (
          <div className="links flex flex-col justify-center items-center gap-5 max-sm:pt-12 font-text-secondary min-[960px]:hidden ">
            {navItems.map((item, index) => (
              <NavLink
                key={index}
                to={item!=="Home"?`/${item.replace(/\s+/g, "").toLowerCase()}${item==="Events"? "/aarambh":""}`:"/"}
                className={({ isActive }) =>
                    isActive ? "text-[#FFC221]" : "text-white hover:text-[#FFC221] "
                  }                  >
                {item}
              </NavLink>
            ))}
            <button className=" w-20 relative inline-flex h-12 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_6s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#000_0%,#604f23e7_50%,#fff_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-[#FFC221] px-3 py-1 text-sm font-medium text-zinc-950 backdrop-blur-3xl">
                <NavLink to="/atrangi">Shop</NavLink>
              </span>
            </button>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default Navbar;
