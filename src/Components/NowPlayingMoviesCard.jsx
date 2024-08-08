import { MOVIE_LIST_POSTER_URL } from "../Constant";

const NowPlayingMoviesCard = ({ poster }) => {
  return (
    
    
      <div className="inline-block whitespace-nowrap lg:w-48 md:w-40 sm:w-32">
        <img alt="poster" src={MOVIE_LIST_POSTER_URL + poster} className="lg:w-40 sm:w-24 md:w-32 hover:scale-110"></img>
      </div>
    
    
  );
};

export default NowPlayingMoviesCard;
