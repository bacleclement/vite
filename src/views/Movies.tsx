import axios, {AxiosResponse} from "axios";
import { useEffect, useState } from "react";
import Button from "../components/Button";
import { IMovie } from "../models/IMovie";
import { NavLink } from "react-router-dom";

const Movies = () => {
  const [movies, setMovies]= useState<IMovie[]>([]);

  const getMovies = async() => {
    const response: AxiosResponse<IMovie[]> = await axios.get(`https://api.vueflix.boxydev.com/movies`);
    setMovies(response.data);
  };

  useEffect(() => {
    getMovies();
  }, []);

  const goToHomePage = (url: string) => {
    window.open(url, '_blank');
  }

  const sortBy = (sortType: 'name' | 'popularity' | 'date') => {
    let sortedMovies: IMovie[] = [];
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
      <header className="flex flex-row w-full mb-5 gap-3 m-2">
        <Button onClick={() => sortBy('name')} className="basis-1/3">🍿 Nom</Button>
        <Button onClick={() => sortBy('date')} className="basis-1/3">📅 Date</Button>
        <Button onClick={() => sortBy('popularity')} className="basis-1/3">💯 Popularité</Button>
      </header>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 m-2">
        {movies.map(movie => 
          <>
            <div className="flex flex-row gap-4 items-start card relative">
              <img className="rounded" src={movie.poster_path} alt="imgAlt" style={{width: "200px"}}/>
              <div className="mt-2">
                <div className="flex flex-col gap-4 items-start">
                  <h2 className="font-bold text-slate-600 text-2xl">{movie.title }</h2>
                  <div className="text-xs uppercase font-bold tracking-wider absolute top-3 right-3 text-red-600">{ movie.budget } $</div>
                  <div className="mt-2 text-sm text-slate-600 p-5 max-h-36 overflow-hidden text-ellipsis">{ movie.overview }</div>
                </div>
              </div>
              <NavLink to={`${movie.id}`}>
                <div className="clickable absolute bottom-3 left-3 px-3 py-1 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full shadow-md hover:from-blue-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transform hover:scale-105 transition-transform duration-300 ease-in-out">+</div>
              </NavLink>
              <div className="clickable absolute bottom-3 right-3 px-4 py-1 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl shadow-md hover:from-blue-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transform hover:scale-105 transition-transform duration-300 ease-in-out" onClick={() => goToHomePage(movie.homepage)}>Site officiel</div>
            </div>
          </>
        )}
      </section>
    </>
   );
}

export default Movies;

