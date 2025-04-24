import { useState } from 'react';
function Equipos() {
  const equipos = [
    {
      nombre: "Ferrari",
      imagen: "https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2025/ferrari.png",
      descripcion: "Leyenda del automovilismo, con una historia bella",
      link: "https://www.formula1.com/en/teams/ferrari"
    },
    {
      nombre: "Mercedes",
      imagen: "https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2025/mercedes.png",
      descripcion: "Elegancia con un toque atrevido",
      link: "https://www.formula1.com/en/teams/mercedes"
    },
    {
      nombre: "Red Bull",
      imagen: "https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2025/red-bull-racing.png",
      descripcion: "Velocidad y adrenalina en una escuderia que no para de resaltar",
      link: "https://www.formula1.com/en/teams/red-bull-racing"
    },
    {
      nombre: "McLaren",
      imagen: "https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2025/mclaren.png",
      descripcion: "Una combinación de historia y talento joven (senna y Prost, Guiño Guiño).",
      link: "https://www.formula1.com/en/teams/mclaren"
    },
    {
      nombre: "Alpine",
      imagen: "https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2025/alpine.png",
      descripcion: "La F1 con un toque francés",
      link: "https://www.formula1.com/en/teams/alpine"
    },
    {
      nombre: "Aston Martin",
      imagen: "https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2025/aston-martin.png",
      descripcion: "Mucho lujo y elegancia sobre el pavimento",
      link: "https://www.formula1.com/en/teams/aston-martin"
    },
    {
      nombre: "Williams",
      imagen: "https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2025/williams.png",
      descripcion: "Una escuderia con momentos nostalgicos y gloriosos",
      link: "https://www.formula1.com/en/teams/williams"
    },
    {
      nombre: "Haas",
      imagen: "https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2025/haas.png",
      descripcion: "America del Norte present!",
      link: "https://www.formula1.com/en/teams/haas"
    },
    {
      nombre: "Stake F1",
      imagen: "https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2025/kick-sauber.png",
      descripcion: "Reencarnacion de  Alfa Romeo",
      link: "https://www.formula1.com/en/teams/kick-sauber"
    },
    {
      nombre: "RB",
      imagen: "https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2025/racing-bulls.png",
      descripcion: "Antes AlphaTauri, ahora con nuevo nombre y con una ambición renovada.",
      link: "https://www.formula1.com/en/teams/visa-cash-app-rb"
    }
  ];

  return (
    <>
      <h1 className="text-4xl font-bold text-center mt-6 text-red-600">Escuderias de la Fórmula 1</h1>
      <p className="text-center text-gray-600 mb-8">Conoce a tu escuderías favorita de la Fórmula 1</p>

      <div className="container mx-auto px-6 py-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {equipos.map((equipo, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl p-4 hover:scale-[1.03] transition-transform duration-200"
          >
            <img
              src={equipo.imagen}
              alt={equipo.nombre}
              className="w-full h-48 object-contain rounded-md mb-4"
            />
            <h3 className="text-xl font-bold text-black mb-2 text-center">{equipo.nombre}</h3>
            <p className="text-sm text-gray-700 text-justify mb-3">{equipo.descripcion}</p>
            {equipo.link && (
              <a
                href={equipo.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-3 py-1 text-sm bg-red-600 text-white rounded hover:bg-red-700 transition"
              >
                Ver más
              </a>
            )}
          </div>
        ))}
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
                alt="Twitter"
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

export default Equipos;
