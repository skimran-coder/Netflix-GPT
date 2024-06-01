import { useSelector } from "react-redux";
import useMovieTrailer from "../utils/useMovieTrailer";
import { useEffect, useState } from "react";

const MainMovie = () => {
  const nowPlayingMovies = useSelector((state) => state.movie.nowPlaying);
  const [randomMovieId, setRandomMovieId] = useState(null);
  const mainMovie = useSelector((state) => state.movie.mainMovieTrailer);
  const [movieDetails, setMovieDetails] = useState(null);
  console.log(mainMovie);

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

  console.log(movieDetails);

  useMovieTrailer(randomMovieId);

  return (
    <div className="relative">
      <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden ">
        {mainMovie && (
          <iframe
            className="w-full h-full pointer-events-none scale-[1.4]"
            src={`https://www.youtube.com/embed/${mainMovie[0]?.key}?autoplay=1&mute=1&loop=1&playlist=${mainMovie[0]?.key}&showinfo=0&controls=0&autohide=1&disablekb=1&modestbranding=1&iv_load_policy=3`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        )}
      </div>

      {movieDetails && (
        <div className="absolute top-72 ml-24 text-white z-20">
          <h1 className=" text-5xl pb-4">{movieDetails[0]?.title}</h1>
          <p className="w-2/3 text-lg pb-8">{movieDetails[0]?.overview}</p>

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
