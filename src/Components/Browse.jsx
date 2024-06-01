import useNowPlayingMovies from "../utils/useNowPlayingMovies";
import MainMovie from "./MainMovie";
import MovieCardsContainer from "./MovieCardsContainer";

const Browse = () => {
  useNowPlayingMovies();

  return (
    <>
      <MainMovie />
      <MovieCardsContainer />
    </>
  );
};

export default Browse;
