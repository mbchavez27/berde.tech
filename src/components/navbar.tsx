import { Link, useLocation } from "react-router-dom";

export const NavBar = () => {
  const location = useLocation();

  console.log(location.pathname);

  return (
    <>
      {location.pathname === "/AboutUs" ? (
        <Link
          to="/AboutUs"
          className="font-bold text-transparent text-xl bg-clip-text bg-gradient-to-r from-[#BCEBC1] to-[#6FC978] mt-6  mr-8 hover:brightness-50 transition"
        >
          About Us
        </Link>
      ) : (
        <Link
          to="/AboutUs"
          className="font-medium text-transparent text-xl bg-clip-text bg-gradient-to-r from-[#BCEBC1] to-[#6FC978] mt-6  mr-8 hover:brightness-50 transition"
        >
          About Us
        </Link>
      )}
      {location.pathname === "/Projects" ? (
        <Link
          to="/Projects"
          className="font-bold text-transparent text-xl bg-clip-text bg-gradient-to-r from-[#BCEBC1] to-[#6FC978] mt-6  mr-8 hover:brightness-50 transition"
        >
          Our Projects
        </Link>
      ) : (
        <Link
          to="/Projects"
          className="font-medium text-transparent text-xl bg-clip-text bg-gradient-to-r from-[#BCEBC1] to-[#6FC978] mt-6  mr-8 hover:brightness-50 transition"
        >
          Our Projects
        </Link>
      )}
      <a
        href="mailto:tech.berde@gmail.com"
        className="font-medium text-transparent text-xl bg-clip-text bg-gradient-to-r from-[#BCEBC1] to-[#6FC978] mt-6 r-8 hover:brightness-50 transition"
      >
        Contact Us
      </a>
    </>
  );
};
