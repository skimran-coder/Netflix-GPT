import { MOVIE_LIST_POSTER_URL } from "../Constant";

const TopRatedMoviesCard = ({ poster }) => {
  return (
    
    
    <img alt="poster" src={MOVIE_LIST_POSTER_URL + poster} className="lg:w-40 sm:w-24 md:w-32 w-20 hover:scale-110"></img>

    
    
  );
};

export default TopRatedMoviesCard;
