import { CardCarousel } from "@/components/ui/card-carousel"
import CardFlip from "@/components/mvpblocks/cardflip";
import bag1 from "../assets/bag1.png";
import bag2 from "../assets/bag2.png";
import fil1 from "../assets/fil1.png";
import fil2 from "../assets/fil2.png";
import { motion } from "motion/react";


const Impact = () => {
  return (
        <div className="space-y-8 px-6 w-full max-w-7xl">
      {/* Heading */}
      <div className="flex flex-col justify-center items-start">

                  <h2 className="text-5xl text-[#FFC221] max-sm:text-5xl font-semibold uppercase ">
              Impact Created
            </h2>
            <div className="flex gap-4">

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="180"
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="180"
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
                    transition: { duration: 1, delay: 1.5 },
                  }}
                  d="M1.60484 8.53679C147.007 11.185 317.557 2.10532 226.566 2.10532C47.7763 2.10531 -54.1787 -1.67774 32.2393 4.75368C114.447 10.8717 214.22 10.2028 254 9.67173"
                  stroke="#FFF9E8"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>

            </div>
      </div>

      {/* Card Carousel */}
      <CardCarousel 
        autoplayDelay={2000}
        showPagination={true}
        showNavigation={true}
        >
        <CardFlip
          title="Build MVPs Fast"
          bg_image={bag1}
          color="#0022ff"
        >
          Example text Example text Example text Example text Example text Example text Example text
        </CardFlip>
        <CardFlip
          title="Build MVPs Fast"
          bg_image={bag2}
          color="#0a241f"
        >
          Example text Example text Example text Example text Example text Example text Example text
        </CardFlip>
        <CardFlip
          title="Build MVPs Fast"
          bg_image={fil1}
          color="#0022ff"
        >
          Example text Example text Example text Example text Example text Example text Example text
        </CardFlip>
        <CardFlip
          title="Build MVPs Fast"
          bg_image={fil1}
          color="#0022ff"
        >
          Example text Example text Example text Example text Example text Example text Example text
        </CardFlip>


      </CardCarousel>
    </div>
  )
}

export default Impact
