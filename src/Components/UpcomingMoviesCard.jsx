import { MOVIE_LIST_POSTER_URL } from "../Constant";

const UpcomingMoviesCard = ({ poster }) => {
  return (
    <img alt="poster" src={MOVIE_LIST_POSTER_URL + poster} className="w-32 hover:scale-110"></img>

  );
};

export default UpcomingMoviesCard;
