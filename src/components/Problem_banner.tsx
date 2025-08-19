import Banner from "./Banner";
import img1 from "../assets/ps/Hands tearing banknote, payment rejected.svg"
import img2 from "../assets/ps/Credit card error on payment screen, Online transaction failure or declined payment.svg"
import img3 from "../assets/ps/Businessman, calculator and browser.svg"
import img4 from "../assets/ps/Rejected transaction or denied payment.svg"

interface ProblemProps{
  problems:string[]
}

const images=[
  img1,img2,img3,img4
]

const Problem_banner = ({problems}:ProblemProps) => {
  return (
    <Banner title="PROBLEM">
      {problems.map((problem,index)=>(
      <div className="flex items-center  justify-start gap-4">
        <img src={images[index]} alt="ps1" className="max-h-[100px] max-w-[100px]" />
        <p className="text-white">{problem}</p>
      </div>

      ))}

    </Banner>
  );
};

export default Problem_banner;
