import Banner from "./Banner"
import img1 from "../assets/ps/Credit card rejection or blocked transaction.svg"
import img2 from "../assets/ps/Bright ideas connected to financial results, Entrepreneurship and innovation.svg"
import img3 from "../assets/ps/Genius idea bulb with speech bubble and giant exclamation sign.svg"
import img4 from "../assets/ps/Financial struggle with hands holding a banknote.svg"

const Solution_banner = () => {
  return (
    <Banner title="SOLUTIONS">
        <div className="flex items-center gap-4">
        <img src={img1} alt="ps1" className="max-h-[100px] min-w-[100px]" />
        <p className="text-white">SOLUTION 1</p>
      </div>
      <div className="flex items-center gap-4">
        <img src={img2} alt="ps2" className="max-h-[100px] min-w-[100px]" />
        <p className="text-white">SOLUTION 2</p>
      </div>
      <div className="flex items-center gap-4">
        <img src={img3} alt="ps3" className="max-h-[100px] min-w-[100px]" />
        <p className="text-white">SOLUTION 3</p>
      </div>
      <div className="flex items-center gap-4">
        <img src={img4} alt="ps4" className="max-h-[100px] min-w-[100px]" />
        <p className="text-white">SOLUTION 4</p>
      </div>
    </Banner>
  )
}

export default Solution_banner
