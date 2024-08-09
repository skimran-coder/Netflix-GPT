import { useSelector } from "react-redux";
import useMovieTrailer from "../utils/useMovieTrailer";
import { useEffect, useState } from "react";

const MainMovie = () => {
  const nowPlayingMovies = useSelector((state) => state.movie.nowPlaying);
  const [randomMovieId, setRandomMovieId] = useState(null);
  const mainMovie = useSelector((state) => state.movie.mainMovieTrailer);
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    if (nowPlayingMovies?.length) {
      const randomMovie =
        nowPlayingMovies[Math.floor(Math.random() * nowPlayingMovies.length)];
      setRandomMovieId(randomMovie?.id);
    }
  }, [nowPlayingMovies]);

  useEffect(() => {
    if (randomMovieId) {
      const randomMovie = nowPlayingMovies.filter(
        (movie) => movie.id === randomMovieId
      );
      setMovieDetails(randomMovie);
    }
  }, [randomMovieId]);

useMovieTrailer(randomMovieId);

console.log(mainMovie)

  

  return (
    <div className="w-screen h-screen bg-gradient-to-t from-neutral-800 to-black overflow-hidden ">
      <div className="  aspect-video top-0 left-0 w-full  -z-10 overflow-hidden">
        {mainMovie && (
          <iframe
            className=" w-full  h-full pointer-events-none scale-[1.4]"
            src={`https://www.youtube.com/embed/${mainMovie[0]?.key}?autoplay=1&mute=1&loop=1&playlist=${mainMovie[0]?.key}&showinfo=0&controls=0&autohide=1&disablekb=1&modestbranding=1&iv_load_policy=3`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        )}
      </div>

      {movieDetails && (
        <div className="absolute top-20 sm:top-32 lg:top-40 xl:top-52 ml-24  text-white z-20">
          <h1 className=" md:text-3xl lg:text-5xl text-2xl pb-2 sm:pb-4">{movieDetails[0]?.title}</h1>
          <p className="sm:w-2/3  w-full lg:text-lg md:text-base sm:text-sm text-sm pb-4 sm:pb-8">{movieDetails[0]?.overview}</p>

          <div>
            <button className="bg-white text-black px-4 py-2 rounded-md hover:bg-opacity-80 transition-all ease-in-out duration-150">
              Play Now!
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainMovie;
