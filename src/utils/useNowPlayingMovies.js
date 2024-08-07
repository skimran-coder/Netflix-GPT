import { useEffect } from "react";
import { api_options, NOW_PLAYING_API } from "../Constant";
import { useDispatch } from "react-redux";
import { addNowPlaying } from "../utils/movieSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch()
  const getMoviesData = async () => {
    try{
      const data = await fetch(NOW_PLAYING_API, api_options)
      const json = await data.json()
      dispatch(addNowPlaying(json.results))
    }
    catch(err){
      console.log(err)
    }
  }
  
  useEffect(() => {
    getMoviesData()
  }, [])
}

export default useNowPlayingMovies