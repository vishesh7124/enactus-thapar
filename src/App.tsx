import { Routes, Route } from "react-router";

import BgWrapper from "./components/BgWrapper";
import Navbar from "./components/Nav";

import Landing from "./pages/Landing";
import Team from "./pages/Team";

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
          <Route path="/team" element={<Team />} />
        </Routes>
      </BgWrapper>
    </>
  );
}

export default App;
