import { useState, useEffect } from "react";
import Loader from "./Loader";
const KEY = "f84fc31d";

function MovieDetails({ selectedId, handleCloseMovie, handleAddWatched }) {
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!selectedId) return;

    async function getMovieDetails() {
      setIsLoading(true);
      const res = await fetch(
        `http://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`
      );
      const data = await res.json();
      setMovie(data);
      setIsLoading(false);
    }

    getMovieDetails();
  }, [selectedId]);

  if (isLoading) return <Loader />;
  if (!movie) return null;

  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre,
  } = movie;

  function handleAdd() {
    const newItem = {
      imdbId: selectedId,
      title,
      year,
      poster,
      imdbRating: Number(imdbRating),
      runtime: Number(runtime.split(' ')[0]),
    };
    handleAddWatched(newItem);
    handleCloseMovie();
  }

  return (
    <div
      style={{ height: "calc(100vh - 150px)" }}
      className="flex flex-col w-full md:w-1/2"
    >
      <header className="relative bg-[#343a40] rounded-lg p-4">
        <button
          className="size-[30px] rounded-full justify-center items-center flex bg-white text-black text-lg absolute top-4 left-4"
          onClick={handleCloseMovie}
        >
          &larr;
        </button>
        <div className="flex space-x-10">
          <div className="w-[150px] h-full">
            {poster && (
              <img
                className="object-cover"
                src={poster}
                alt={`Poster of ${title} movie`}
              />
            )}
          </div>

          <div>
            <h2 className="font-bold text-white text-2xl mb-3">{title}</h2>
            <p className="text-white mb-2">
              {released} &bull; {runtime}
            </p>
            <p className="mb-5 text-white">{genre}</p>
            <p className="text-white">
              <span>⭐️</span>
              {imdbRating} IMDb rating
            </p>
          </div>
        </div>
      </header>
      <section className="text-white mt-4 flex-col w-[400px] mx-auto">
        <div className="flex justify-center mb-4">
          <button
            onClick={handleAdd}
            className="text-lg rounded-full text-white w-[120px] h-[30px] bg-black"
          >
            Add To List
          </button>
        </div>
        <p>
          <em>{plot}</em>
        </p>
        <p>Starring {actors}</p>
        <p>Directed by {director}</p>
      </section>
    </div>
  );
}

export default MovieDetails;
