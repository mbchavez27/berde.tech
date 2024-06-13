// const Projects = () => {
//   return (
//     <>
//       <div className="flex items-center justify-center my-3">
//         <div className="text-[#268D5B] bg-gradient-to-r from-[#3AFF89] to-[#CCF1E2] p-2 rounded-lg shadow-md mx-3">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth={2.5}
//             stroke="currentColor"
//             className="size-8"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
//             />
//           </svg>
//         </div>
//         <div className="flex flex-col">
//           <div className="text-transparent text-4xl bg-clip-text bg-gradient-to-r from-[#2D8A63] to-[#025B2B]">
//             Archers API
//           </div>
//           <div className="font-normal text-transparent text-xl bg-clip-text bg-gradient-to-r from-[#2D8A63] to-[#025B2B]">
//             A university-wide access API for DLSU data.
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

const App = () => {
  return (
    <>
      <div className="bg-gradient-to-b from-[#9FE9C1] to-[#1A6A44] h-screen font-Montserrat">
        <div className="h-screen bg-noisePattern absolute inset-0">
          <div className="font-bold flex h-screen items-center justify-between">
            <div className="flex flex-col items-start mx-36">
              <div className="text-transparent text-9xl bg-clip-text bg-gradient-to-r from-[#2D8A63] to-[#295B02]">
                berde.
              </div>
              <div className="text-transparent text-xl bg-clip-text bg-gradient-to-r from-[#153000] to-[#429600]">
                Builders of Emerging Resources
              </div>
              <div className="text-transparent text-xl bg-clip-text bg-gradient-to-r from-[#153000] to-[#429600]">
                for Digital Entrepreneurs.
              </div>
              <div className="font-normal text-transparent text-xl bg-clip-text bg-gradient-to-r from-[#BCEBC1] to-[#6FC978] mt-6">
                Contact Us
              </div>
            </div>
            <div className="flex flex-col items-start mx-36">
              {/* <Projects></Projects>
              <Projects></Projects>
              <Projects></Projects> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
