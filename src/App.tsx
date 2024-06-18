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

const Projects = () => {
  return (
    <>
      <div className="flex flex-col h-screen justify-between py-10 px-20">
        <div>
          <div className="font-bold text-transparent text-8xl sm:text-5xl bg-clip-text bg-gradient-to-r from-[#2D8A63] to-[#295B02]">
            berde.
          </div>
          <div className="font-bold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-[#2D8A63] to-[#295B02]">
            things we’ve done—so far.
          </div>
        </div>
        <div className="flex flex-col w-1/4">
          <div className="font-bold text-transparent text-8xl sm:text-5xl bg-clip-text bg-gradient-to-r from-[#2D8A63] to-[#295B02] pb-3">
            pretzel
          </div>
          <div className="font-medium text-transparent text-2xl bg-clip-text bg-gradient-to-r from-[#B3E0CD] to-[#F7FFF1] pb-3">
            A discord bot that ports MLS Course offerings to discord.
          </div>
          <div className="text-[#F1FFED] bg-gradient-to-r from-[#365D41] to-[#5EA56E] w-1/2 text-center font-bold rounded-[36px] text-lg px-1 py-2 shadow-md">
            {">>"} read more
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
