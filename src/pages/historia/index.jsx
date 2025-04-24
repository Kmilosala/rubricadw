import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function HistoriaF1() {
  const navigate = useNavigate();

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    hover: { scale: 1.05 },
  };

  return (
    <div className="bg-gradient-to-b from-white to-gray-100 min-h-screen">
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center text-red-600 mb-6">¿Qué es la Fórmula 1?</h1>
          <p className="text-center text-gray-700 max-w-2xl mx-auto mb-16">
            Esta categoría nació en 1950 con el objetivo de tener una competencia que demostrara en todo su esplendor la calidad del deporte automotor.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              {
                titulo: "🏎️ El auto",
                texto: "Es un vehículo de alto rendimiento diseñado para competir a altas velocidades. Su diseño es ligero y rígido, fabricado en fibra de carbono, y cuenta con un motor híbrido acompañado de un motor V6.",
              },
              {
                titulo: "🏁 ¿Cómo se corre?",
                texto: "Una carrera de F1 comienza con la clasificación. El domingo, los pilotos compiten por completar un número determinado de vueltas y realizar al menos una parada en boxes.",
              },
              {
                titulo: "⏱️ El campeonato",
                texto: "El campeonato se realiza anualmente. Pilotos y equipos ganan puntos por carrera. Al final, se coronan campeones de pilotos y constructores.",
              },
            ].map((card, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 transition-transform duration-300"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <h2 className="text-lg font-semibold mb-2">{card.titulo}</h2>
                <p className="text-sm text-gray-800 text-justify">{card.texto}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-20">
            <h2 className="text-3xl font-bold text-center text-red-600 mb-10">Momentos importantes de la F1</h2>
            <div className="relative flex flex-col space-y-10 before:absolute before:left-8 before:top-0 before:bottom-0 before:w-1 before:bg-red-500">
              {[
                {
                  year: "1950",
                  title: "El inicio de la F1",
                  desc: "Se celebra el primer Campeonato Mundial de Fórmula 1. Farina gana el campeonato.",
                },
                {
                  year: "1994",
                  title: "Muerte de Ayrton Senna",
                  desc: "El accidente de Senna en Imola obligó a renovar las regulaciones de seguridad.",
                },
                {
                  year: "2004",
                  title: "Dominio de Schumacher",
                  desc: "Michael Schumacher ganó su séptimo campeonato mundial.",
                },
                {
                  year: "2021",
                  title: "Rivalidad Verstappen vs Hamilton",
                  desc: "Una competencia que hacía muchos años no se veía.",
                },
              ].map((event, index) => (
                <div key={index} className="relative flex items-start space-x-8 pl-20 hover:bg-gray-100 p-9 rounded-lg transition">
                  <div className="absolute left-1 top-11 w-6 h-6 bg-red-500 rounded-full border-4 border-white"></div>
                  <div>
                    <h3 className="text-lg font-semibold">{event.year} - {event.title}</h3>
                    <p className="text-sm text-gray-700">{event.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mb-20">
        <h2 className="text-3xl font-bold text-center text-red-600 mb-6">Estadísticas Curiosas</h2>
        <div className="overflow-x-auto max-w-4xl mx-auto px-4">
          <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gray-300 text-gray-700 text-left">
              <tr>
                <th className="py-3 px-6">Categoría</th>
                <th className="py-3 px-6">Dato</th>
              </tr>
            </thead>
            <tbody className="text-gray-800 text-sm divide-y divide-gray-200">
              <tr>
                <td className="py-3 px-6 font-medium">Piloto con más poles</td>
                <td className="py-3 px-6">Lewis Hamilton (106 poles)</td>
              </tr>
              <tr>
                <td className="py-3 px-6 font-medium">Cantidad de carreras ganadas</td>
                <td className="py-3 px-6">Lewis Hamilton (104 victorias)</td>
              </tr>
              <tr>
                <td className="py-3 px-6 font-medium">Escudería con más campeonatos de constructores</td>
                <td className="py-3 px-6">Ferrari (16 títulos de constructores)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <footer className="bg-black text-white px-6 py-10 mt-16">
        <hr className="border-gray-700 my-10" />

        <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-gray-400 gap-4">
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
                src="https://img.freepik.com/psd-gratis/diseno-logotipo-redes-sociales_23-2151296987.jpg"
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
    </div>
  );
}

export default HistoriaF1;




