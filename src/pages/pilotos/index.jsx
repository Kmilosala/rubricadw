import { useState } from 'react';
import { motion } from 'framer-motion';

const equipos = [
  {
    nombre: "Mercedes-AMG Petronas F1 Team",
    color: "#101820",
    pilotos: [
      {
        nombre: "George Russell",
        edad: 27,
        nacimiento: "15 de febrero de 1998",
        debut: 2019,
        numero: 63,
        pais: "Reino Unido",
        podios: 15,
        foto: "https://soymotor.com/sites/default/files/2025-03/grussell_2025.png"
      },
      {
        nombre: "Andrea Kimi Antonelli",
        edad: 18,
        nacimiento: "25 de agosto de 2006",
        debut: 2025,
        numero: 12,
        pais: "Italia",
        podios: 0,
        foto: "https://soymotor.com/sites/default/files/2025-03/kantonelli_2025.png"
      }
    ]
  },
  {
    nombre: "Aston Martin F1 Team",
    color: "#00665E",
    pilotos: [
      {
        nombre: "Fernando Alonso",
        edad: 43,
        nacimiento: "29 de julio de 1981",
        debut: 2001,
        numero: 14,
        pais: "España",
        podios: 106,
        foto: "https://soymotor.com/sites/default/files/2025-03/falonso_2025.png"
      },
      {
        nombre: "Lance Stroll",
        edad: 26,
        nacimiento: "29 de octubre de 1998",
        debut: 2017,
        numero: 18,
        pais: "Canadá",
        podios: 3,
        foto: "https://soymotor.com/sites/default/files/2025-03/lstroll_2025.png"
      }
    ]
  },
  {
    nombre: "Alpine F1 Team",
    color: "#FF87BC",
    pilotos: [
      {
        nombre: "Pierre Gasly",
        edad: 29,
        nacimiento: "7 de febrero de 1996",
        debut: 2017,
        numero: 10,
        pais: "Francia",
        podios: 5,
        foto: "https://soymotor.com/sites/default/files/2025-03/pgasly_2025.png"
      },
      {
        nombre: "Jack Doohan",
        edad: 22,
        nacimiento: "20 de enero de 2003",
        debut: 2025,
        numero: 7,
        pais: "Australia",
        podios: 0,
        foto: "https://soymotor.com/sites/default/files/2025-03/jdoohan_2025.png"
      }
    ]
  },
  {
    nombre: "Haas F1 Team",
    color: "#B6BABD",
    pilotos: [
      {
        nombre: "Esteban Ocon",
        edad: 28,
        nacimiento: "17 de septiembre de 1996",
        debut: 2016,
        numero: 31,
        pais: "Francia",
        podios: 4,
        foto: "https://soymotor.com/sites/default/files/2025-03/eocon_2025.png"
      },
      {
        nombre: "Oliver Bearman",
        edad: 19,
        nacimiento: "8 de mayo de 2005",
        debut: 2023,
        numero: 50,
        pais: "Reino Unido",
        podios: 0,
        foto: "https://soymotor.com/sites/default/files/2025-03/obearman_2025.png"
      }
    ]
  },
  {
    nombre: "Williams Racing",
    color: "#0085C7",
    pilotos: [
      {
        nombre: "Alexander Albon",
        edad: 29,
        nacimiento: "23 de marzo de 1996",
        debut: 2019,
        numero: 23,
        pais: "Tailandia",
        podios: 2,
        foto: "https://soymotor.com/sites/default/files/2025-03/aalbon_2025.png"
      },
      {
        nombre: "Carlos Sainz Jr.",
        edad: 30,
        nacimiento: "1 de septiembre de 1994",
        debut: 2015,
        numero: 55,
        pais: "España",
        podios: 18,
        foto: "https://soymotor.com/sites/default/files/2025-03/csainz_2025.png"
      }
    ]
  },
  {
    nombre: "Kick Sauber F1 Team",
    color: "#00E701",
    pilotos: [
      {
        nombre: "Nico Hülkenberg",
        edad: 37,
        nacimiento: "19 de agosto de 1987",
        debut: 2010,
        numero: 27,
        pais: "Alemania",
        podios: 0,
        foto: "https://soymotor.com/sites/default/files/2025-03/nhulkenberg_2025.png"
      },
      {
        nombre: "Gabriel Bortoleto",
        edad: 20,
        nacimiento: "14 de octubre de 2004",
        debut: 2025,
        numero: 5,
        pais: "Brasil",
        podios: 0,
        foto: "https://soymotor.com/sites/default/files/2025-03/gbortoleto_2025.png"
      }
    ]
  },
  {
    nombre: "Red Bull Racing",
    color: "#1E41FF",
    pilotos: [
      {
        nombre: "Max Verstappen",
        edad: 27,
        nacimiento: "30 de septiembre de 1997",
        debut: 2015,
        numero: 1,
        pais: "Países Bajos",
        podios: 112,
        foto: "https://soymotor.com/sites/default/files/2025-03/mverstappen_2025.png"
      },
      {
        nombre: "Yuki Tsunoda",
        edad: 24,
        nacimiento: "11 de mayo de 2000",
        debut: 2021,
        numero: 22,
        pais: "Japón",
        podios: 0,
        foto: "https://soymotor.com/sites/default/files/2025-03/yuki-tsunoda-red-bull-2025.png"
      }
    ]
  },
  {
    nombre: "Racing Bulls",
    color: "#00205B",
    pilotos: [
      {
        nombre: "Liam Lawson",
        edad: 23,
        nacimiento: "11 de febrero de 2002",
        debut: 2023,
        numero: 30,
        pais: "Nueva Zelanda",
        podios: 0,
        foto: "https://soymotor.com/sites/default/files/2025-03/liam-lawson-racing-bulls-2025.png"
      },
      {
        nombre: "Isack Hadjar",
        edad: 20,
        nacimiento: "28 de septiembre de 2004",
        debut: 2025,
        numero: 6,
        pais: "Francia",
        podios: 0,
        foto: "https://soymotor.com/sites/default/files/2025-03/ihadjar_2025.png"
      }
    ]
  },
  {
    nombre: "Ferrari",
    color: "#DC0000",
    pilotos: [
      {
        nombre: "Charles Leclerc",
        edad: 26,
        nacimiento: "16 de octubre de 1997",
        debut: 2018,
        numero: 16,
        pais: "Mónaco",
        podios: 20,
        foto: "https://soymotor.com/sites/default/files/2025-03/cleclerc_2025.png"
      },
      {
        nombre: "lewis Hamilton",
        edad: 38,
        nacimiento: "7 de enero de 1985",
        debut: 2007,
        numero: 44,
        pais: "Reino Unido",
        podios: 103,
       
        foto: "https://soymotor.com/sites/default/files/2025-03/lhamilton_2025.png"
      }
    ]
  },
  {
    nombre: "McLaren F1 Team",
    color: "#FF8700",
    pilotos: [
      {
        nombre: "Lando Norris",
        edad: 24,
        nacimiento: "13 de noviembre de 1999",
        debut: 2019,
        numero: 4,
        pais: "Reino Unido",
        podios: 6,
        foto: "https://soymotor.com/sites/default/files/2025-03/lnorris_2025.png"
      },
      {
        nombre: "Oscar Piastri",
        edad: 22,
        nacimiento: "6 de abril de 2001",
        debut: 2023,
        numero: 81,
        pais: "Australia",
        podios: 0,
       
        foto: "https://soymotor.com/sites/default/files/2025-03/opiastri_2025.png"
      }
    ]
  }
];
function Pilotos() {
  return (
    <>
      <section id="pilotos" className="py-16 bg-gradient-to-b from-gray-100 to-white">
        <h1 className="text-4xl font-bold text-center text-red-600 mb-2">Pilotos de la Fórmula 1</h1>
        <p className="text-center text-gray-600 mb-16">Conoce quien te da la adrenalina sobre la pista</p>
        <div className="container mx-auto px-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {equipos.map((equipo, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.01 }}
                className="rounded-lg p-4 shadow-lg text-white h-full flex flex-col justify-between w-full max-w-[400px] mx-auto"
                style={{ backgroundColor: equipo.color + 'cc' }}
              >
                <h2 className="text-lg font-semibold mb-4 text-center drop-shadow-md">{equipo.nombre}</h2>
                <div className="flex flex-col gap-3">
                  {equipo.pilotos.map((piloto, i) => (
                    <div key={i} className="bg-white rounded-md p-3 text-black w-full flex items-center shadow-sm h-full min-h-[100px]">
                      <img src={piloto.foto} alt={piloto.nombre} className="w-20 h-20 object-cover rounded-full border border-gray-300 mr-3" />
                      <div className="flex flex-col justify-center flex-1">
                        <h3 className="text-sm font-semibold leading-tight mb-4">{piloto.nombre}</h3>
                        <div className="text-[16px] text-gray-600 leading-tight">
                          <p>Edad: {piloto.edad}</p>
                          <p>Nac: {piloto.nacimiento}</p>
                          <p>Debut: {piloto.debut}</p>
                          <p># {piloto.numero}</p>
                          <p>{piloto.pais}</p>
                          <p>Podios: {piloto.podios}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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

export default Pilotos;

