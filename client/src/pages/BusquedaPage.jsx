import { useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import LargeCardVideo from "../components/LargeCardVideo";
import { useEffect, useState } from "react";
import axios from "axios";

export default function BusquedaPage() {
  const { busqueda } = useParams();

  const [resultados, setResultados] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get(`un string que no conozco ${busqueda}`)
  //     .then((response) => setResultados(response.data))
  //     .catch((error) => console.error("Error fetching videos:", error));
  // }, []);

  return (
    <div className="flex">
      <Sidebar />
      <div className="w-5/6 h-fit">
        <div className="font-serif text-white mx-2">
          <h1 className="text-2xl">Resultados de la busqueda: {busqueda}</h1>
          <div className="w-[70vw] my-4">
            {resultados.map((video) => {
              <LargeCardVideo
                titulo={video.titulo}
                vistas={video.vistas}
                tiempoSubido={video.tiempoSubido}
                canal={video.canal}
                descripcion={video.descripcion}
              />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
