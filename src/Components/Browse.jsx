
import useNowPlayingMovies from "../utils/useNowPlayingMovies";
import MainMovie from "./MainMovie";

const Browse = () => {
  useNowPlayingMovies();

  

  return (
    <>
      <MainMovie  />
    </>
  );
};

export default Browse;
