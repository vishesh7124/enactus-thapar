import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { SparklesIcon } from "lucide-react"
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules"

import { Badge } from "@/components/ui/badge"

import useMediaQuery from "@/hooks/useMediaQuery";



interface CarouselProps {
  // images: { src: string; alt: string }[] | undefined
  autoplayDelay?: number
  showPagination?: boolean
  showNavigation?: boolean
  children:any
}

export const CardCarousel: React.FC<CarouselProps> = ({
  children,
  autoplayDelay = 1500,
  showPagination = true,
  showNavigation = true,
}) => {
  const css = `

  :root{
    --swiper-theme-color:oklch(0.828 0.189 84.429)
  }

  .swiper {
    width: 100%;
    padding-bottom: 50px;
  }
  

  
  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 350px;
    margin-right: 0!important;
  }

  @media screen and (max-width:480px){
    .swiper-slide {
      width: 350px;
      margin-right: 0!important;
    }
  }
  
  .swiper-slide img {
    display: block;
    width: 100%;
  }
  
  .swiper-3d .swiper-slide-shadow-left {
    background-image: none;
  }
  .swiper-3d .swiper-slide-shadow-right{
    background: none;
  }
  `

      const isMobile = useMediaQuery("(max-width: 850px)");


  return (
    <section className="w-full">
      <style>{css}</style>
      <div className="mx-auto w-full max-w-4xl rounded-[24px] border border-black/5 p-2 shadow-sm md:rounded-t-[44px]">
        <div className="relative mx-auto flex w-full flex-col rounded-[24px] border border-black/5 bg-neutral-800/5 p-2 shadow-sm md:items-start md:gap-8 md:rounded-b-[20px] md:rounded-t-[40px] md:p-2">

          <div className="flex w-full items-center justify-center gap-4">
            <div className="w-full">
              <Swiper
                spaceBetween={isMobile?0:0}
                autoplay={{
                  delay: autoplayDelay,
                  disableOnInteraction: false,
                }}
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={3}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 0,
                  depth: 100,
                  modifier: 2.5,
                }}
                pagination={showPagination}
                navigation={
                  showNavigation
                    ? {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                      }
                    : undefined
                }
                initialSlide={1}
                modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
              >
                {children.map((comp:any, index:number) => (
                  <SwiperSlide key={index}>
                    <div className="w-full flex justify-center items-center  rounded-3xl max-sm:w-44  overflow-hidden">
                      {/* <img
                        src={image.src}
                        alt={image.alt}
                        loading="lazy"
                        className="w-full h-auto rounded-xl object-cover"
                      /> */}
                      {comp}
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
