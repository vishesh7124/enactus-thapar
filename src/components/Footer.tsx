import { Link } from "react-router"
import { Button } from "./ui/button"

const Footer = () => {
  return (
    <div className="relative h-1/3 flex w-full bg-black text-white ">
        <div className="head h-2/3 w-full flex justify-around  items-start pt-8 gap-40 ">
            <div className="navs flex justify-center items-start gap-16 text-lg ">
                <div>
                    <h1>Resources</h1>
                    <div className="flex flex-col text-sm   ">
                        {["Home","About Us","Team","Blogs"].map((item,index)=>(
                            <Link className="hover:text-white text-[#A29D8D] " key={index} to={item!=="Home"?`/${item.replace(/\s+/g, "").toLowerCase()}`:"/"}
                            >{item}</Link>
                        ))}
                    </div>
                </div>
                <div>
                    <h1>Campaigns</h1>
                    <div className="flex flex-col text-sm   ">
                        {["Aarambh","Deepotsav","Corporate Roadies","CSR"].map((item,index)=>(
                            <Link className="hover:text-white text-[#A29D8D] " key={index} to={"/"}
                            >{item}</Link>
                        ))}
                    </div>
                </div>
                            <div>
                                <h1>Projects</h1>
                                <div className="flex flex-col text-sm   ">
                                    {["Atrangi","Aarohan"].map((item,index)=>(
                                        <Link className="hover:text-white text-[#A29D8D] " key={index} to={item!=="Home"?`/${item.replace(/\s+/g, "").toLowerCase()}`:"/"}
                                        >{item}</Link>
                                    ))}
                                </div>
                            </div>
            </div>
            <div className="flex flex-col gap-2 " >
                <h1  className="text-4xl font-semibold" >Enactus</h1>
                <p className="text-md" >Subscribe to our Newsletter</p>
                <div className="flex gap-0">
                    <input type="email" className="bg-[#FFC221] rounded-l-lg pl-1 " />
                    <Button className="bg-[#FFF9E8] rounded-l-none text-[#151412] font-normal rounded-r-lg " >Subscribe</Button>
                </div>
            </div>

        </div>
        <div className="social">

        </div>
    </div>
  )
}

export default Footer