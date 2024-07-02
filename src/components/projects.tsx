import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";

const Projects = () => {
  const ProjectList = [
    {
      name: "Archers API",
      bgPicture: "ls360.png",
      description: "",
      link: "https://a.berde.co/",
    },
  ];
  return (
    <>
      <div className="flex justify-around">
        <div className="flex mx-12 flex-col h-screen justify-between py-10 px-20">
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
          <div className="flex flex-col w-1/2">
            <div className="font-bold text-transparent text-8xl sm:text-5xl bg-clip-text bg-gradient-to-r from-[#2D8A63] to-[#295B02] pb-3">
              pretzel
            </div>
            <div className="font-medium text-transparent text-2xl bg-clip-text bg-gradient-to-r from-[#B3E0CD] to-[#F7FFF1] pb-3">
              A discord bot that ports MLS Course offerings to discord.
            </div>
            <div className="w-1/2">
              <div className="text-[#F1FFED] bg-gradient-to-r from-[#365D41] to-[#5EA56E] text-center font-bold rounded-[36px] text-lg px-1 py-2 shadow-md hover:brightness-75 transition">
                {">>"} read more
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
              className="font-medium text-transparent text-xl bg-clip-text bg-gradient-to-r from-[#BCEBC1] to-[#6FC978] mt-6 mr-8 hover:brightness-50 transition"
            >
              Our Projects
            </Link>
          </div>
        </div>
        <div className="mx-36">
          <Swiper
            direction="vertical"
            slidesPerView={3}
            spaceBetween={50}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper h-screen"
          >
            {ProjectList.map((project) => {
              return (
                <>
                  <SwiperSlide className="h-full flex items-center justify-center">
                    <div
                      className={`w-[750px] h-64 rounded-[36px] shadow-xl relative bg-[url('./assets/${project.bgPicture}')] bg-cover bg-center flex flex-col justify-end px-12 py-8 text-white font-Montserrat font-bold`}
                    >
                      <div className="absolute inset-0 bg-black opacity-50 rounded-[36px]"></div>
                      <div className="relative z-10">
                        <div className="text-4xl">{project.name}</div>
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
