import Banner from "./Banner"
import img1 from "../assets/ps/Credit card rejection or blocked transaction.svg"
import img2 from "../assets/ps/Bright ideas connected to financial results, Entrepreneurship and innovation.svg"
import img3 from "../assets/ps/Genius idea bulb with speech bubble and giant exclamation sign.svg"
import img4 from "../assets/ps/Financial struggle with hands holding a banknote.svg"

interface solutionProps{
  solutions:string[]
}

const images=[
  img1,img2,img3,img4
]

const Solution_banner = ({solutions}:solutionProps) => {
  return (
    <Banner title="SOLUTIONS">
      {solutions.map((solution,index)=>(

        <div key={index} className="flex items-center gap-4 max-sm:flex-col">
        <img src={images[index]} alt="ps1" className="max-h-[100px] max-w-[100px]" />
        <p className="text-white">{solution}</p>
      </div>  
      ))}
 
    </Banner>
  )
}

export default Solution_banner
