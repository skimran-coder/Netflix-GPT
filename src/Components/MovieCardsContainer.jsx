import { useSelector } from "react-redux";
import NowPlayingMoviesCard from "./NowPlayingMoviesCard";
import PopularMoviesCard from "./PopularMoviesCard";
import TopRatedMoviesCard from "./TopRatedMoviesCard";
import UpcomingMoviesCard from "./UpcomingMoviesCard";

const MovieCardsContainer = () => {
  const nowPlayingMovies = useSelector((state) => state.movie.nowPlaying);
  const popularMovies = useSelector((state) => state.movie.popularMovies);
  const topRatedMovies = useSelector((state) => state.movie.topRatedMovies);
  const upcomingMovies = useSelector((state) => state.movie.upcomingMovies);

  return (
    <div className="w-100vw h-fit bg-gradient-to-t from-black to-neutral-800 left-0 right-0 top-0 bottom-0 absolute sm:top-1/4 md:top-2/4 lg:top-3/4 pl-20 pt-2 flex flex-col gap-4 overflow-hidden">
      <h3 className="text-white text-lg ">
        {nowPlayingMovies &&
          nowPlayingMovies.length > 0 &&
          "Now Playing Movies"}
      </h3>
      <div className="flex   no-scrollbar overflow-x-scroll pb-4 space-x-4">
        {nowPlayingMovies.map((movies) => (
          <NowPlayingMoviesCard key={movies.id} poster={movies.poster_path} />
        ))}
      </div>

      <h3 className="text-white text-lg ">
        {topRatedMovies && topRatedMovies.length > 0 && "Top Rated Movies"}
      </h3>

      <div className="flex  no-scrollbar overflow-x-scroll pb-4 space-x-4">
        {topRatedMovies.map((movies) => (
          <TopRatedMoviesCard key={movies.id} poster={movies.poster_path} />
        ))}
      </div>

      <h3 className="text-white  text-lg ">
        {upcomingMovies && upcomingMovies.length > 0 && "Upcoming Movies"}
      </h3>

      <div className="flex  no-scrollbar overflow-x-scroll pb-4 space-x-4">
        {upcomingMovies.map((movies) => (
          <UpcomingMoviesCard key={movies.id} poster={movies.poster_path} />
        ))}
      </div>

      <h3 className="text-white  text-lg ">
        {popularMovies && popularMovies.length > 0 && "Popular Movies"}
      </h3>

      <div className="flex  no-scrollbar overflow-x-scroll pb-4 space-x-4">
        {popularMovies.map((movies) => (
          <PopularMoviesCard key={movies.id} poster={movies.poster_path} />
        ))}
      </div>
      
    </div>
  );
};

export default MovieCardsContainer;
