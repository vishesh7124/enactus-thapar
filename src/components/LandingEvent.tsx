"use client";

import { Tabs } from "@/components/ui/tabs";
import { eventType1 } from "@/types/eventTypes";



export function LandingEvent({events}:{events:eventType1[]}) {


  return (
    <div className="h-[40rem] md:min-h-[30rem]  [perspective:1000px] relative  flex flex-col max-w-5xl mx-auto  w-[90%] md:w-full items-start justify-start my-16">
      <Tabs tabs={events} />
    </div>
  );
}

// const DummyContent = () => {
//   return (
//     <img
//       src="https://036za50svd.ufs.sh/f/YfSInbXC1craZpkyqMByLspMeEURVoQT2KBmC7n3vFhIzOJ6"
//       alt="dummy image"
//       width="1000"
//       height="1000"
//       className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
//     />
//   );
// };
