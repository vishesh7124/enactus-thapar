import bag from "../assets/bag1.png"
import { motion } from "motion/react";

export default function BusinessModel() {
  const businessItems = [
    {
      id: 1,
      img: bag,
      text: "this content is meant for business content. it explaints the contents in brief. basic understanding given.this content is meant for business content. it explaints the contents in brief. basic understanding given.this content is meant for business content. it explaints the contents in brief. basic understanding given.this content is meant for business content. it explaints the contents in brief. basic understanding given."
    },
    {
      id: 2,
      img: bag,
      text: "this content is meant for business content. it explaints the contents in brief. basic understanding given.this content is meant for business content. it explaints the contents in brief. basic understanding given.this content is meant for business content. it explaints the contents in brief. basic understanding given.this content is meant for business content. it explaints the contents in brief. basic understanding given."
    },
    {
      id: 3,
      img: bag,
      text: "this content is meant for business content. it explaints the contents in brief. basic understanding given.this content is meant for business content. it explaints the contents in brief. basic understanding given.this content is meant for business content. it explaints the contents in brief. basic understanding given.this content is meant for business content. it explaints the contents in brief. basic understanding given."
    },
    {
      id: 4,
      img: bag,
      text: "this content is meant for business content. it explaints the contents in brief. basic understanding given.this content is meant for business content. it explaints the contents in brief. basic understanding given.this content is meant for business content. it explaints the contents in brief. basic understanding given.this content is meant for business content. it explaints the contents in brief. basic understanding given."
    }
  ];

  return (
    <div className="ml-0 w-full max-w-7xl">
      <div className="flex flex-col justify-center items-start">

                  <h2 className="text-5xl text-[#FFC221] max-sm:text-5xl font-semibold uppercase ">
              Business Model
            </h2>
            <div className="flex gap-4">

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="210"
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

    <section className="px-6 py-12 max-w-7xl flex justify-center ">
      {/* Heading */}

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-16">
        {businessItems.map((item) => (
          <div
            key={item.id}
            className="rounded-2xl overflow-hidden max-w-96"
          >
            {/* Image section */}
            <div className="bg-[#FFD400]/40 flex items-center justify-center">
              <img
                src={item.img}
                alt={`business-${item.id}`}
                className="object-contain"
              />
            </div>

            {/* Content section */}
            <div className="bg-[#414141]/60 text-white p-6 text-sm leading-relaxed">
              {item.text}
            </div>
          </div>
        ))}
      </div>
    </section>
    </div>

  );
}
