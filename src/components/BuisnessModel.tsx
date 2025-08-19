import { motion } from "motion/react";

export default function BusinessModel({businessItems}:{businessItems:object}) {


  return (
    <div className="ml-0 w-full max-w-7xl">
      <div className="flex flex-col justify-center items-start max-sm:items-center">

                  <h2 className="text-5xl text-[#FFC221] max-sm:text-4xl font-semibold uppercase ">
              Business Model
            </h2>
            <div className="flex gap-4">

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="210"
                height="11"
                viewBox="0 0 255 11"
                fill="none"
                className="max-md:w-40 max-sm:w-32"
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

    <section className="px-6 py-12 max-w-7xl flex justify-center ">
      {/* Heading */}

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-16">
        {businessItems.map((item,index) => (
          <div
            key={index}
            className="rounded-2xl overflow-hidden max-w-96 bg-[#363636]/50"
          >
            {/* Image section */}
            <div className="h-16 flex items-center justify-center p-4 ">
              <div className="w-16 h-16 flex items-center justify-center">
                <img
                  src={item.img}
                  alt={`business-${item.id}`}
                  className="object-contain w-full h-full"
                />
              </div>
            </div>

            {/* Content section */}
            <div className="p-6 text-white">
              <p className="text-sm leading-relaxed text-center">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
    </div>

  );
}
