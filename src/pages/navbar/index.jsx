import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-[#e10600] text-white py-3 px-6 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
            <Link to="/">
            <img
            src="https://media.formula1.com/image/upload/f_auto,c_limit,w_285,q_auto/f_auto/q_auto/fom-website/etc/designs/fom-website/images/F1_75_Logo.svg"
            alt="F1 Logo"
            className="h-8 cursor-pointer"
                />
            </Link>
        </div>
        <div className="flex space-x-6 text-sm sm:text-base font-medium">
          <Link to="/" className="hover:underline hover:underline-offset-5">
            Inicio
          </Link>
        <Link to="/historia" className="hover:underline hover:underline-offset-5">
            ¿Qué es la F1?
          </Link>
          <Link to="/equipos" className="hover:underline hover:underline-offset-5">
            Equipos
          </Link>
          <Link to="/pilotos" className="hover:underline hover:underline-offset-5">
            Pilotos
          </Link>


        </div>
      </div>
    </nav>
  );
};

export default Navbar;
