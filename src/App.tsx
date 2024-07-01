import Slider from "react-slick";

const Home = () => {
  return (
    <>
      <div className="font-bold flex h-screen items-center sm:justify-between justify-around sm:flex-row flex-col">
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
            <a
              href="#"
              className="font-medium text-transparent text-xl bg-clip-text bg-gradient-to-r from-[#BCEBC1] to-[#6FC978] mt-6 mr-8 hover:brightness-50 transition"
            >
              Our Projects
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

const Project = () => {
  return (
    <>
      {/* <div className="w-[500px] h-56 rounded-[36px] shadow-xl bg-gray-400"></div> */}
      <div className="w-[500px] h-52 rounded-[36px] shadow-xl relative bg-[url('./assets/ls360.png')] bg-cover bg-center flex flex-col justify-end px-12 py-8 text-white font-Montserrat font-bold">
        <div className="absolute inset-0 bg-black opacity-50 rounded-[36px]"></div>
        <div className="relative z-10">
          <div className="text-4xl">theRange</div>
        </div>
      </div>
    </>
  );
};

const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className="flex my-6">
        <div className="flex flex-col h-screen justify-between py-10 px-20">
          <div>
            <div className="font-bold text-transparent text-8xl sm:text-5xl bg-clip-text bg-gradient-to-r from-[#2D8A63] to-[#295B02]">
              berde.
            </div>
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
            <a
              href="#"
              className="font-medium text-transparent text-xl bg-clip-text bg-gradient-to-r from-[#BCEBC1] to-[#6FC978] mt-6 mr-8 hover:brightness-50 transition"
            >
              Our Projects
            </a>
          </div>
        </div>
        <div className="carousel carousel-vertical carousel-center bg-neutral rounded-box max-w-md space-x-4 p-4">
          <div className="carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
              className="rounded-box"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"
              className="rounded-box"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
              className="rounded-box"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg"
              className="rounded-box"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg"
              className="rounded-box"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg"
              className="rounded-box"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
              className="rounded-box"
            />
          </div>
        </div>
      </div>
    </>
  );
};

const App = () => {
  return (
    <>
      <div className="bg-gradient-to-b from-[#9FE9C1] to-[#1A6A44] h-screen font-Montserrat">
        <div className="h-screen bg-noisePattern absolute inset-0">
          {/* <Home></Home> */}
          <Projects></Projects>
        </div>
      </div>
    </>
  );
};

export default App;
