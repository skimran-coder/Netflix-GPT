import useNowPlayingMovies from "../utils/useNowPlayingMovies";
import MainMovie from "./MainMovie";
import MovieCardsContainer from "./MovieCardsContainer";

const Browse = () => {
  useNowPlayingMovies();

  return (
    <div>
      <MainMovie />
      <MovieCardsContainer />
    </div>
  );
};

export default Browse;
