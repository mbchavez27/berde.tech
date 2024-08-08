import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const AboutUs = () => {
  // //Gives Lists of Projects
  // const [currentProject, setCurrentProject] = useState(0); //Gets the Current Project Index
  // const [currentProjectDetails, setCurrentProjectDetails] = useState(
  //   ProjectList[currentProject],
  // ); //Gets the Project Details of the Current Project
  //
  // useEffect(() => {
  //   setCurrentProjectDetails(ProjectList[currentProject]);
  // }, [currentProject]); //Sets the Current Project Details
  //
  //Animates onPage Load
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <div
        className={`flex justify-between transform transition duration-500 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`} //Animates on Page Load
      >
        <div className="flex flex-col h-screen justify-between py-10 px-20">
          <div>
            <Link
              to="/"
              className="font-bold text-transparent text-8xl sm:text-5xl bg-clip-text bg-gradient-to-r from-[#2D8A63] to-[#295B02]"
            >
              berde.
            </Link>
            <div className="font-bold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-[#2D8A63] to-[#295B02]">
              —meet the team.
            </div>
          </div>
          <div className="flex flex-col ">
            <div className="font-bold text-transparent text-8xl sm:text-5xl bg-clip-text bg-gradient-to-r from-[#2D8A63] to-[#295B02] pb-3">
              {/* {currentProjectDetails.name} */}
            </div>
            <div className="font-medium text-transparent text-2xl w-1/2 bg-clip-text bg-gradient-to-r from-[#B3E0CD] to-[#F7FFF1] pb-3">
              {/* {currentProjectDetails.description} */}
            </div>
            <div className="w-1/2">
              <div className="inline-block text-[#F1FFED] bg-gradient-to-r from-[#365D41] to-[#5EA56E] text-center font-bold rounded-[36px] text-lg px-4 py-2 shadow-md hover:brightness-75 transition">
                {">>"} <Link to="https://a.berde.co">read more</Link>
              </div>
            </div>
          </div>
          <div>
            <Link
              to="/AboutUs"
              className="font-bold text-transparent text-xl bg-clip-text bg-gradient-to-r from-[#BCEBC1] to-[#6FC978] mt-6 mr-8 hover:brightness-50 transition"
            >
              About Us
            </Link>
            <Link
              to="/Projects"
              className="font-medium text-transparent text-xl bg-clip-text bg-gradient-to-r from-[#BCEBC1] to-[#6FC978] mt-6 mr-8 hover:brightness-50 transition"
            >
              Our Projects
            </Link>
            <a
              href="#"
              className="font-medium text-transparent text-xl bg-clip-text bg-gradient-to-r from-[#BCEBC1] to-[#6FC978] mt-6 mr-8 hover:brightness-50 transition"
            >
              Contact Us
            </a>
          </div>
        </div>
        <div className="mx-24"></div>
      </div>
    </>
  );
};

export default AboutUs;
