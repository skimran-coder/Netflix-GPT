import { MOVIE_LIST_POSTER_URL } from "../Constant";

const NowPlayingMoviesCard = ({ poster }) => {
  return (
    <div className="overflow-x-sroll whitespace-nowrap ">
    
      <div className=" inline-block w-48">
        <img alt="poster" src={MOVIE_LIST_POSTER_URL + poster}></img>
      </div>
    
    </div>
  );
};

export default NowPlayingMoviesCard;
