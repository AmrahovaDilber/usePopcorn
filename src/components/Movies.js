import Movie from "./Movie";

function Movies({ movies, handleSelectMovie }) {
  return (
    <div
      style={{ height: "calc(100vh - 150px)" }}
      className="overflow-scroll p-5 rounded-xl w-full md:w-1/2 mb-4 md:mb-0 bg-[#343a40] h-[calc(100vh - 100px)]"
    >
      {movies.map((movie) => (
        <Movie
          handleSelectMovie={handleSelectMovie}
          key={movie.id}
          movie={movie}
        ></Movie>
      ))}
    </div>
  );
}

export default Movies;
