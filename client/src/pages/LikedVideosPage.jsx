import Sidebar from "../components/Sidebar";
import LargeCardVideo from "../components/LargeCardVideo";
import { useEffect, useState } from "react";
import axios from "axios";
import { useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

export default function LikedVideosPage() {
  const { isSignedIn } = useUser();
  const navigate = useNavigate();

  const [likedVideos, setLikedVideos] = useState([]);

  useEffect(() => {
    if (!isSignedIn) navigate("/");

    // axios
    //   .get()
    //   .then((response) => setLikedVideos(response.data))
    //   .catch((error) => console.error("Error fetching videos:", error));
  }, [isSignedIn]);

  return (
    <div className="flex">
      <Sidebar />
      <div className="w-5/6 h-fit">
        <div className="font-serif text-white mx-2">
          <h1 className="text-2xl">Tus me gustas: </h1>
          <div className="w-[70vw] my-4">
            {likedVideos.map((video) => {
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
