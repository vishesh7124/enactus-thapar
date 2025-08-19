import Banner from "./Banner";
import img1 from "../assets/ps/Hands tearing banknote, payment rejected.svg"
import img2 from "../assets/ps/Credit card error on payment screen, Online transaction failure or declined payment.svg"
import img3 from "../assets/ps/Businessman, calculator and browser.svg"
import img4 from "../assets/ps/Rejected transaction or denied payment.svg"

const Problem_banner = () => {
  return (
    <Banner title="PROBLEM STATEMENT">
      <div className="flex items-center justify-start gap-4">
        <img src={img1} alt="ps1" className="max-h-[100px] max-w-[100px]" />
        <p className="text-white">PROBLEM STATEMENT 1</p>
      </div>
      <div className="flex items-center justify-start gap-4">
        <img src={img2} alt="ps2" className="max-h-[100px] max-w-[100px]" />
        <p className="text-white">PROBLEM STATEMENT 2</p>
      </div>
      <div className="flex items-center justify-start gap-4">
        <img src={img3} alt="ps3" className="max-h-[100px] max-w-[100px]" />
        <p className="text-white">PROBLEM STATEMENT 3</p>
      </div>
      <div className="flex items-center justify-start gap-4">
        <img src={img4} alt="ps4" className="max-h-[100px] max-w-[100px]" />
        <p className="text-white">PROBLEM STATEMENT 4</p>
      </div>
    </Banner>
  );
};

export default Problem_banner;
