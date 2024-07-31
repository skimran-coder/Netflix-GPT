import { useSelector } from "react-redux";
import NowPlayingMoviesCard from "./NowPlayingMoviesCard";

const MovieCardsContainer = () => {
  const nowPlayingMovies = useSelector((state) => state.movie.nowPlaying);
  console.log(nowPlayingMovies);

  return (
    <div className="w-full h-screen bg-black overflow-auto absolute sm:top-1/4 md:top-2/4 lg:top-3/4 pl-20">
      <h3 className="text-white pb-2 text-lg ">
        {nowPlayingMovies &&
          nowPlayingMovies.length > 0 &&
          "Now Playing Movies"}
      </h3>
      <div className="flex">
        {nowPlayingMovies.map((movies) => (
          <NowPlayingMoviesCard key={movies.id} poster={movies.poster_path} />
        ))}
      </div>
    </div>
  );
};

export default MovieCardsContainer;
