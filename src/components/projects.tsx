import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";
import { useEffect, useState } from "react";

import Pretzel from "../assets/pretzel.png";
import theRange from "../assets/theRange.png";
import ls360 from "../assets/ls360.png";

const Projects = () => {
  //Gives Lists of Projects
  const ProjectList = [
    {
      name: "Archers API",
      bgPicture: ls360,
      description:
        "An API that enables users to access the data of each classes in DLSU",
      link: "https://a.berde.co/",
    },
    {
      name: "Pretzel",
      bgPicture: Pretzel,
      description:
        "A discord bot that gives users available classes during Enlistment Season",
      link: "https://github.com/zelkim/pretzel",
    },
    {
      name: "theRange",
      bgPicture: theRange,
      description:
        "A Web App that displays current vacant classrooms in each buildings of the DLSU-Manila Campus",
      link: "https://a.berde.co/",
    },
  ];

  const [currentProject, setCurrentProject] = useState(0); //Gets the Current Project Index
  const [currentProjectDetails, setCurrentProjectDetails] = useState(
    ProjectList[currentProject]
  ); //Gets the Project Details of the Current Project

  useEffect(() => {
    setCurrentProjectDetails(ProjectList[currentProject]);
  }, [currentProject]); //Sets the Current Project Details

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
              things we’ve done—so far.
            </div>
          </div>
          <div className="flex flex-col ">
            <div className="font-bold text-transparent text-8xl sm:text-5xl bg-clip-text bg-gradient-to-r from-[#2D8A63] to-[#295B02] pb-3">
              {currentProjectDetails.name}
            </div>
            <div className="font-medium text-transparent text-2xl w-1/2 bg-clip-text bg-gradient-to-r from-[#B3E0CD] to-[#F7FFF1] pb-3">
              {currentProjectDetails.description}
            </div>
            <div className="w-1/2">
              <div className="inline-block text-[#F1FFED] bg-gradient-to-r from-[#365D41] to-[#5EA56E] text-center font-bold rounded-[36px] text-lg px-4 py-2 shadow-md hover:brightness-75 transition">
                {">>"} <Link to="https://a.berde.co">read more</Link>
              </div>
            </div>
          </div>
          <div>
            <a
              href="#"
              className="font-medium text-transparent text-xl bg-clip-text bg-gradient-to-r from-[#BCEBC1] to-[#6FC978] mt-6 mr-8 hover:brightness-50 transition"
            >
              About Us
            </a>
            <a
              href="#"
              className="font-medium text-transparent text-xl bg-clip-text bg-gradient-to-r from-[#BCEBC1] to-[#6FC978] mt-6 mr-8 hover:brightness-50 transition"
            >
              Contact Us
            </a>
            <Link
              to="/Projects"
              className="font-bold text-transparent text-xl bg-clip-text bg-gradient-to-r from-[#BCEBC1] to-[#6FC978] mt-6 mr-8 hover:brightness-50 transition"
            >
              Our Projects
            </Link>
          </div>
        </div>
        <div className="mx-24">
          <Swiper
            direction="vertical"
            slidesPerView={3}
            spaceBetween={50}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="h-screen"
          >
            {ProjectList.map((project, index) => {
              let isSelected = currentProject === index;

              return (
                <>
                  <SwiperSlide className="h-full flex items-center justify-center">
                    <div
                      className={`w-[750px] h-64 rounded-[36px] shadow-xl relative bg-cover bg-center flex flex-col justify-end px-12 py-8 text-white font-Montserrat font-bold transition hover:-translate-y-1`}
                      style={{ backgroundImage: `url(${project.bgPicture})` }}
                      onClick={() => {
                        setCurrentProject(index);
                      }}
                    >
                      {isSelected ? null : (
                        <>
                          <div className="absolute inset-0 bg-black opacity-50 rounded-[36px]"></div>
                        </>
                      )}
                      <div className="relative z-10">
                        {isSelected ? null : (
                          <>
                            <div className="text-4xl">{project.name}</div>
                          </>
                        )}
                      </div>
                    </div>
                  </SwiperSlide>
                </>
              );
            })}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Projects;
