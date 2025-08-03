import React, { useState, useEffect, useRef } from 'react';
import { EventCard } from "@/components/EventCard"
import { Calendar, Clock, MapPin, Users } from 'lucide-react';
import sustainathon from "../assets/sustainathon.png";
import startup from "../assets/startup.png";
import synergy from "../assets/synergy.png";
import founders from "../assets/founders.png"
import calender from "../assets/calender.png"

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  attendees: number;
  logo:string;
  type: 'conference' | 'workshop' | 'networking' | 'keynote';
}

const EventTimeline: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const timelineRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const events: Event[] = [
    {
      id: 1,
      title: "Opening Keynote",
      date: "March 15, 2024",
      time: "9:00 AM",
      location: "Main Auditorium",
      description: "Welcome address and industry insights for the year ahead",
      attendees: 500,
      type: "keynote",
      logo:sustainathon
    },
    {
      id: 2,
      title: "AI Workshop",
      date: "March 15, 2024",
      time: "11:00 AM",
      location: "Tech Hub",
      description: "Hands-on workshop exploring the latest AI technologies and applications",
      attendees: 50,
      type: "workshop",
      logo:startup
    },
    {
      id: 3,
      title: "Networking Lunch",
      date: "March 15, 2024",
      time: "1:00 PM",
      location: "Garden Terrace",
      description: "Connect with fellow attendees over a delicious lunch",
      attendees: 300,
      type: "networking",
      logo:synergy
    },
    {
      id: 4,
      title: "Tech Conference",
      date: "March 16, 2024",
      time: "10:00 AM",
      location: "Conference Hall B",
      description: "Latest trends in technology and digital transformation",
      attendees: 200,
      type: "conference",
      logo: founders
    },

  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !timelineRef.current) return;

      const container = containerRef.current;
      const timeline = timelineRef.current;
      
      const containerRect = container.getBoundingClientRect();
      const timelineRect = timeline.getBoundingClientRect();
      
      const containerTop = containerRect.top;
      const containerHeight = containerRect.height;
      const timelineHeight = timelineRect.height;
      
      const windowHeight = window.innerHeight;
      const scrollStart = -containerTop;
      const scrollEnd = containerHeight - windowHeight;
      
      const progress = Math.max(0, Math.min(1, scrollStart / scrollEnd));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial calculation
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getEventIcon = (type: Event['type']) => {
    switch (type) {
      case 'keynote':
        return '🎤';
      case 'workshop':
        return '🛠️';
      case 'networking':
        return '🤝';
      case 'conference':
        return '🎯';
      default:
        return '📅';
    }
  };

  const getEventColor = (type: Event['type']) => {
    switch (type) {
      case 'keynote':
        return 'from-purple-500 to-pink-500';
      case 'workshop':
        return 'from-blue-500 to-cyan-500';
      case 'networking':
        return 'from-green-500 to-emerald-500';
      case 'conference':
        return 'from-orange-500 to-red-500';
      default:
        return 'from-gray-500 to-slate-500';
    }
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-br py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Event Timeline
          </h1>
          <p className="text-xl text-gray-300">
            Follow our exciting journey through the conference
          </p>
        </div> */}

        <div ref={timelineRef} className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-700 h-full">
            <div 
              className="w-full bg-gradient-to-b from-transparent via-yellow-500 to-yellow-600 transition-all duration-300 ease-out"
              style={{ height: `${scrollProgress * 100}%` }}
            >
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-yellow-400 rounded-full shadow-lg shadow-cyan-400/50 animate-pulse" />
            </div>
          </div>

          {events.map((event, index) => (
            <div key={event.id} className="relative mb-16 md:mb-24">

              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-2 z-10">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-700 flex items-center justify-center text-2xl shadow-lg`}>
                    <img src=" object-contain h-full w-full" alt="" />
                </div>
              </div>

              <div className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  {/* <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                    <div className={`flex items-center gap-3 mb-4 ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                      <Calendar className="w-5 h-5 text-purple-400" />
                      <span className="text-purple-300 font-medium">{event.date}</span>
                    </div>
                    
                    <h3 className={`text-2xl font-bold text-white mb-3 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                      {event.title}
                    </h3>
                    
                    <p className={`text-gray-300 mb-4 leading-relaxed ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                      {event.description}
                    </p>

                    <div className={`space-y-2 text-sm text-gray-400 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        <span>{event.attendees} attendees</span>
                      </div>
                    </div>
                  </div> */}
                  <EventCard/>
                </div>

                {/* Spacer for the other side */}
                <div className="hidden md:block w-2/12" />
                
                {/* Date/Time Display on opposite side */}
                <div className={`hidden md:block w-5/12 ${index % 2 === 0 ? 'pl-8' : 'pr-8'}`}>
                  <div className={`${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                    {/* <div className="text-4xl font-bold text-white mb-2">
                      {event.time}
                    </div>
                    <div className="text-lg text-purple-300">
                      {event.date}
                    </div> */}
                    <img src={event.logo} className="object-contain h-full w-full" alt="" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>


      </div>
    </div>
  );
};

export default EventTimeline;