"use client"
import { motion, useInView } from "motion/react"
import type React from "react"
import { useRef } from "react"



export const RoundTimeline = ({ data, colors }: { data: string[], colors:{primary:string,secondary:string} }) => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <div ref={ref} className="w-full">
      {/* Timeline Line and Nodes */}
      <div className="relative mb-8">
        {/* Background Line */}
        <div className="absolute top-6 left-6 right-6 h-0.5 bg-slate-600 w-[70%]"></div>

        {/* Animated Progress Line */}
        <motion.div
          className={`absolute top-6 left-6 h-0.5 bg-gradient-to-r from-[${colors.primary}] to-[${colors.secondary}]`}
          initial={{ width: 0 }}
          animate={isInView ? { width: "70%" } : { width: 0 }}
          transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
        />

        {/* Timeline Nodes */}
        <div className="flex justify-between items-center relative w-9/12">
          {data.map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
            >
              {/* Node Circle */}
              <motion.div
                className={`w-12 h-12 rounded-full bg-gradient-to-r from-[${colors.primary}] to-[${colors.secondary}] flex items-center justify-center relative z-10`}
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.4, delay: 1 + index * 0.2 }}
              >
                {/* <div className="w-6 h-6 rounded-full bg-white"></div> */}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Timeline Cards */}
      <div className={`grid grid-cols-1 md:grid-cols-${data.length} gap-6`}>
        {data.map((item, index) => (
          <motion.div
            key={index}
            className={`bg-[${colors.primary}] rounded-lg border border-[${colors.secondary}] overflow-hidden`}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 1.2 + index * 0.2 }}
          >
            {/* Card Header */}
              <h3 className={`text-xl font-bold text-[#3E3C33] font-seriguel m-2`}>{`ROUND ${index+1}`}</h3>
            {/* <div className="bg-gradient-to-r from-orange-400/10 to-yellow-400/10 p-4 border-b border-orange-400/20">
            </div> */}

            {/* Card Content */}
            <div className="text-[#3E3C33] font-poppins m-3 ">{item}</div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
