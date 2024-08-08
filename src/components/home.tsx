import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { NavBar } from "./navbar";

const Home = () => {
  //Animates onPage Load
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <div
        className={`font-bold flex h-screen items-center sm:justify-between justify-around sm:flex-row flex-col transform transition duration-500 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="flex flex-col items-start mx-8 sm:mx-36">
          <div className="text-transparent text-8xl sm:text-8xl bg-clip-text bg-gradient-to-r from-[#2D8A63] to-[#295B02]">
            berde.
          </div>
          <div className="text-transparent text-2xl bg-clip-text bg-gradient-to-r from-[#153000] to-[#429600]">
            Builders of Emerging Resources
          </div>
          <div className="text-transparent text-2xl bg-clip-text bg-gradient-to-r from-[#153000] to-[#429600]">
            for Digital Entrepreneurs.
          </div>
          <div className="flex">
            <NavBar></NavBar>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
