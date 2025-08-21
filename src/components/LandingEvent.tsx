"use client";

import { Tabs } from "@/components/ui/tabs";
import { eventType1 } from "@/types/eventTypes";



export function LandingEvent({events}:{events:eventType1[]}) {


  return (
    <div className="h-[50rem] md:min-h-[30rem] md:h-[40rem]  [perspective:1000px] relative  flex flex-col max-w-5xl mx-auto  w-[90%] md:w-full items-start justify-start my-16">
      <Tabs tabs={events} />
    </div>
  );
}

