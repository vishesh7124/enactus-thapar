import BgWrapper from "./components/BgWrapper"
// import { NavbarDemo } from "./components/Navbar"
import Navbar from "./components/Nav"
import Hero from "./components/Hero"


function App() {


  return (
    <>
      {/* <NavbarDemo/> */}
    <BgWrapper>
      {/* <div className="fixed top-5 flex w-full justify-center items-center" >

      </div> */}
        <Navbar/> 
        <Hero/>
      <div className=" h-full w-full flex justify-center items-center text-white" >Hello</div>
      <div className=" h-full w-full flex justify-center items-center text-white" >Hello</div>
      <div className=" h-full w-full flex justify-center items-center text-white" >Hello</div>
      <div className=" h-full w-full flex justify-center items-center text-white" >Hello</div>
      <div className=" h-full w-full flex justify-center items-center text-white" >Hello</div>
      <div className=" h-full w-full flex justify-center items-center text-white" >Hello</div>
    </BgWrapper>

    </>
      
  )
}

export default App
