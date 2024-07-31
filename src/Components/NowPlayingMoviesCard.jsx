import { MOVIE_LIST_POSTER_URL } from "../Constant";

const NowPlayingMoviesCard = ({ poster }) => {
  return (
    <div className="overflow-x-sroll whitespace-nowrap ">
    
      <div className=" inline-block lg:w-48 md:w-40 sm:w-32">
        <img alt="poster" src={MOVIE_LIST_POSTER_URL + poster} className="lg:w-40 sm:w-24 md:w-32"></img>
      </div>
    
    </div>
  );
};

export default NowPlayingMoviesCard;
