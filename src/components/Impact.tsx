import { CardCarousel } from "@/components/ui/card-carousel"
import CardFlip from "@/components/mvpblocks/cardflip";
import bag1 from "../assets/bag1.png";
import bag2 from "../assets/bag2.png";
import fil1 from "../assets/fil1.png";
import fil2 from "../assets/fil2.png";

  const images = [
    { src: bag1, alt: "Image 1" },
    { src: bag2, alt: "Image 2" },
    { src: fil1, alt: "Image 3" },
    { src: fil2, alt: "Image 3" },
  ]

const Impact = () => {
  return (
        <div className="space-y-8 px-6 w-full max-w-7xl">
      {/* Heading */}
      <h1 className="text-[#FFC221] text-6xl">IMPACT</h1>

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
          bg_image={bag2}
          color="#0022ff"
        >
          Example text Example text Example text Example text Example text Example text Example text
        </CardFlip>
        <CardFlip
          title="Build MVPs Fast"
          bg_image={bag1}
          color="#0022ff"
        >
          Example text Example text Example text Example text Example text Example text Example text
        </CardFlip>
        <CardFlip
          title="Build MVPs Fast"
          bg_image={fil2}
          color="#0022ff"
        >
          Example text Example text Example text Example text Example text Example text Example text
        </CardFlip>
      </CardCarousel>
    </div>
  )
}

export default Impact
