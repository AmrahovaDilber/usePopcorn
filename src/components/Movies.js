import Movie from "./Movie";


function Movies({ movies }) {
  return (
  
      <div className="scrool-smooth p-5 rounded-xl w-full md:w-1/2 mb-4 md:mb-0 bg-[#343a40]">
        {movies.map((movie) => (
          <Movie key={movie.id} movie={movie}></Movie>
        ))}
      </div>

  );
}

export default Movies;
