import axios, {AxiosResponse} from "axios";
import { useEffect, useState } from "react";

const Movies = () => {
  const [movies, setMovies]= useState<Movie[]>([]);

  const getMovies = async() => {
    const response: AxiosResponse<Movie[]> = await axios.get(`https://api.vueflix.boxydev.com/movies`);
    setMovies(response.data);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return ( 
    <div className="flex flex-col gap-4">
      {movies.map(movie => 
        <div className="flex flex-row gap-4 items-start">
          <img className="rounded" src={movie.poster_path} alt="imgAlt" style={{width: "200px"}}/>
          <div className="mt-2">
            <div className="flex flex-col gap-4 items-start">
              <div className="font-bold text-slate-700 leading-snug">
                <a href="url" className="hover:underline">{ movie.title }</a>
              </div>
              <div className="text-xs text-slate-600 uppercase font-bold tracking-wider">{ movie.budget }</div>
              <div className="mt-2 text-sm text-slate-600">{ movie.overview }</div>
            </div>
          </div>
        </div>
      )}
    </div>
   );
}

export default Movies;

interface Movie {
  adult: boolean,
  backdrop_path: string,
  budget: null,
  homepage: string,
  id: number,
  imdb_id: string,
  origin_country: [],
  original_title: string,
  overview: string,
  popularity: number,
  poster_path: string,
  release_date: Date,
  revenue: number,
  runtime: number,
  status: string,
  tagline: string
  title: string,
  video: string,
  vote_average: number,
  vote_count: number,
  youtube: string,
  genreId: number
  actorsId: [],
}