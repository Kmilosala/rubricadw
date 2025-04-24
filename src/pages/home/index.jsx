import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../../assets/css/index.css";

function Home() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  return (
    <>

        <div className="bg-[#f9f9f9] text-black py-3 px-6 shadow-md">
            <div className="container mx-auto p-6 text-center">
            <h1 className="text-4xl font-extrabold text-red-600 mb-4">
            Bienvenido al Mundo de la Fórmula 1
            </h1>
            <p className="text-gray-700 text-lg mb-8">
            Explora la historia, los equipos y los pilotos que han marcado la diferencia en la F1.
            </p>
            </div>
            <div className="container mx-auto p-6 text-center">
            <h2 className="text-3xl font-bold text-red-600 mb-4">¿Sabías que?</h2>
            <p className="text-gray-700 text-lg mb-8">
                La Fórmula 1 es la categoría más alta del automovilismo internacional y cuenta con una bella historia llena de emoción y rivalidades, es decir, el nivel de niveles
            </p>
            </div>
            <div className="group overflow-hidden max-w-3xl mx-auto my-6 rounded-[10px_60px_30px_10px] shadow-lg hover:scale-[1.03] transition-transform duration-200">
            <img
                src="https://cdn.topgear.es/sites/navi.axelspringer.es/public/media/image/2025/03/parrilla-f1-2025-4302184.jpg?tf=1920x"
                alt="F1 Race"
                className="mx-auto w-full max-w-md rounded-[10px_60px_30px_10px]"
            />
            </div>

            <div className="group overflow-hidden max-w-3xl mx-auto my-6 rounded-[10px_60px_30px_10px] shadow-lg hover:scale-[1.03] transition-transform duration-200">
            <img
                src="https://cdn-2.motorsport.com/images/mgl/YMdyJGG2/s8/race-winner-max-verstappen-red-1.jpg"
                alt="F1 Race"
                className="mx-auto w-full max-w-md rounded-[10px_60px_30px_10px]"
            />
            </div>

        </div>
       
      <footer className="bg-black text-white px-6 py-10 mt-16">
        <hr className="border-gray-700 my-6" />

        <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-gray-400 gap-4">
            <hr className="border-gray-700 my-6" />
          <p>F1® a Formula company. All rights reserved</p>
          <p>© 2003–2025 Formula One</p>

          <div className="flex gap-4">
            <a href="https://www.instagram.com/f1" target="_blank" rel="noopener noreferrer">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
                alt="Instagram"
                className="w-7 h-7"
              />
            </a>
            <a href="https://www.facebook.com/Formula1/?locale=es_LA" target="_blank" rel="noopener noreferrer">
              <img
                src="https://img.freepik.com/psd-gratis/diseno-logotipo-redes-sociales_23-2151296987.jpg?t=st=1745382266~exp=1745385866~hmac=83b23fcd0a1e66861b2320cf7f0055f98d4538e5de38caab8a4a35f12298cdd7&w=826"
                alt="Facebook"
                className="w-7 h-7"
              />
            </a>
            <a href="https://www.youtube.com/f1" target="_blank" rel="noopener noreferrer">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png"
                alt="YouTube"
                className="w-7 h-7"
              />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Home;

