import { useDispatch } from "react-redux"
import { api_options, TOP_RATED_MOVIES_API } from "../Constant"
import { addTopRatedMovies } from "./movieSlice"
import { useEffect } from "react"


const useTopRatedMovies = () => {
  const dispatch = useDispatch()

  const getMoviesData = async () => {
    try{
      const data = await fetch(TOP_RATED_MOVIES_API, api_options)
      const json = await data.json()
      dispatch(addTopRatedMovies(json.results))
    }
    catch(err){
      console.log(err)
    }
  }

  useEffect(() => {
    getMoviesData()
  }, [])
}

export default useTopRatedMovies