import { useDispatch } from "react-redux"
import { api_options, UPCOMING_MOVIES_API } from "../Constant"
import { addUpcomingMovies } from "./movieSlice"
import { useEffect } from "react"

const useUpcomingMovies = () => {
  const dispatch = useDispatch()

  const getMoviesData = async () => {
    try{
      const data = await fetch(UPCOMING_MOVIES_API, api_options)
      const json = await data.json()
      dispatch(addUpcomingMovies(json.results))
    }
    catch(err){
      console.log(err)
    }
  }

  useEffect(() => {
    getMoviesData()
  }, [])
}

export default useUpcomingMovies