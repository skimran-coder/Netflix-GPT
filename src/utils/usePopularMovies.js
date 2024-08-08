import { useDispatch } from 'react-redux'
import { api_options, POPULAR_MOVIES_API } from '../Constant'
import { addPopularMovies } from './movieSlice'
import { useEffect } from 'react'

function usePopularMovies() {
  const dispatch = useDispatch()

  const getMoviesData = async () => {
    try{
      const data = await fetch(POPULAR_MOVIES_API, api_options)
      const json = await data.json()
      dispatch(addPopularMovies(json.results))
    }
    catch(err){
      console.log(err)
    }
  }

  useEffect(() => {
    getMoviesData()
  }, [])
}

export default usePopularMovies