import useNowPlayingMovies from "../utils/useNowPlayingMovies";
import usePopularMovies from "../utils/usePopularMovies";
import useTopRatedMovies from "../utils/useTopRatedMovies";
import useUpcomingMovies from "../utils/useUpcomingMovies";
import MainMovie from "./MainMovie";
import MovieCardsContainer from "./MovieCardsContainer";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div className="">
      <MainMovie />
      <MovieCardsContainer />
    </div>
  );
};

export default Browse;
