import { Routes, Route } from "react-router";

import BgWrapper from "./components/BgWrapper";
import Navbar from "./components/Nav";
import Footer from "./components/Footer";

import Landing from "./pages/Landing";
import Projects from "./pages/Projects"
import Events from "./pages/Events";
import Team from "./pages/Team";
import Proj from "./pages/Proj"

function App() {
  return (
    <>
      {/* <NavbarDemo/> */}
      <BgWrapper>
        {/* <div className="fixed top-5 flex w-full justify-center items-center" >

      </div> */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/proj" element={<Proj />} />
          <Route path="/events" element={<Events />} />
          <Route path="/team" element={<Team />} />
        </Routes>
        <Footer/>
      </BgWrapper>
    </>
  );
}

export default App;
