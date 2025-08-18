import bag from "../assets/bag1.png"

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
     <h2 className="text-7xl text-[#FFD400] mb-10 text-left">
        BUSINESS MODEL
    </h2>

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
