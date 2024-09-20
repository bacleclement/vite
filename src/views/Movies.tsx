import axios, {AxiosResponse} from "axios";
import { useEffect, useState } from "react";
import Button from "../components/Button";

const Movies = () => {
  const [movies, setMovies]= useState<Movie[]>([]);

  const getMovies = async() => {
    const response: AxiosResponse<Movie[]> = await axios.get(`https://api.vueflix.boxydev.com/movies`);
    setMovies(response.data);
  };

  useEffect(() => {
    getMovies();
  }, []);

  const goToHomePage = (url: string) => {
    window.open(url, '_blank');
  }

  const sortBy = (sortType: 'name' | 'popularity' | 'date') => {
    let sortedMovies: Movie[] = [];
    switch (sortType) {
      case 'name':
        sortedMovies = [...movies].sort((a, b) => a.title.localeCompare(b.title));
      break;
      case 'popularity':
        sortedMovies = [...movies].sort((a, b) => b.popularity - a.popularity);
        break;
      case 'date':
        sortedMovies = [...movies].sort((a, b) => new Date(b.release_date).getTime() - new Date(a.release_date).getTime());
        break;
      default:
        return;
    }
    setMovies(sortedMovies);
  }

  return ( 
    <>
      <header className="flex flex-row w-full mb-5 gap-3">
        <Button onClick={() => sortBy('name')} className="basis-1/3">Nom</Button>
        <Button onClick={() => sortBy('date')} className="basis-1/3">Date</Button>
        <Button onClick={() => sortBy('popularity')} className="basis-1/3">Popularity</Button>
      </header>
      <section className="flex flex-col gap-4">
        {movies.map(movie => 
          <div className="flex flex-row gap-4 items-start card relative" onClick={() => goToHomePage(movie.homepage)}>
            <img className="rounded" src={movie.poster_path} alt="imgAlt" style={{width: "200px"}}/>
            <div className="mt-2">
              <div className="flex flex-col gap-4 items-start">
                <h1 className="font-bold text-slate-700 text-2xl">{movie.title }</h1>
                <div className="text-xs uppercase font-bold tracking-wider absolute top-3 right-3 text-red-600">{ movie.budget } $</div>
                <div className="mt-2 text-sm text-slate-600">{ movie.overview }</div>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
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