import { useParams } from "react-router-dom";
import { IMovie } from "../models/IMovie";
import { useEffect, useState } from "react";
import axios, {AxiosResponse} from "axios";

const Movie = () => {
  const [movie, setMovie] = useState<IMovie>();
  const params = useParams();

  const getMovie = async() => {
    const response: AxiosResponse<IMovie> = await axios.get(`https://api.vueflix.boxydev.com/movies/${params.id}`);
    setMovie(response.data);
  };

  useEffect(() => {
    getMovie();
  }, [params]);

  return ( 
    <>
    {movie &&
      <div className="flex flex-row gap-4 items-start card relative">
        <img className="rounded" src={movie.poster_path} alt="imgAlt" style={{width: "200px"}}/>
        <div className="mt-2">
          <div className="flex flex-col gap-4 items-start">
            <h1 className="font-bold text-slate-700 text-2xl">{movie.title }</h1>
            <div className="text-xs uppercase font-bold tracking-wider absolute top-3 right-3 text-red-600">{ movie.budget } $</div>
            <div className="mt-2 text-sm text-slate-600">{ movie.overview }</div>
          </div>
        </div>
      </div>}
    </> 
  );
}

export default Movie;