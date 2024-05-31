import { useEffect } from "react";
import { api_options } from "../Constant";
import { useDispatch } from "react-redux";
import { addMainMovieTrailer } from "../utils/movieSlice";

const useMovieTrailer = (randomMovieId) => {
  const dispatch = useDispatch();

  const getMovieTrailer = async () => {
    if (!randomMovieId) return;

    try {
      const trailerData = await fetch(`https://api.themoviedb.org/3/movie/${randomMovieId}/videos?language=en-US`, api_options);
      const json = await trailerData.json();
      const filteredData = json.results.filter((video) => video.type === "Trailer");
      dispatch(addMainMovieTrailer(filteredData));
    } catch (error) {
      console.error('Failed to fetch movie trailer:', error);
    }
  };

  useEffect(() => {
    getMovieTrailer();
  }, [randomMovieId]); // Re-run effect when randomMovieId changes
};

export default useMovieTrailer;
