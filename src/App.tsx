//Link
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//Components
import Home from "./components/home";
import Projects from "./components/projects";

const App = () => {
  return (
    <>
      <Router>
        <div className="bg-gradient-to-b from-[#9FE9C1] to-[#1A6A44] h-screen font-Montserrat">
          <div className="h-screen bg-noisePattern absolute inset-0">
            <Routes>
              <Route path="/" element={<Home></Home>}></Route>
              <Route path="/Projects" element={<Projects></Projects>}></Route>
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
};

export default App;
