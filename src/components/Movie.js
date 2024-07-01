function Movie({ movie }) {
  return (
    <div className="flex space-x-3 mb-4">
      <div className="w-[50px] h-[75px] ">
        <img src={movie.Poster} alt="movieimg" className="object-cover"></img>
      </div>
      <div className="flex flex-col">
        <p className="font-semibold text-white text-lg">{movie.Title}</p>
        <p className="text-white">
          <span>🗓</span>
          {movie.Year}
        </p>
      </div>
    </div>
  );
}

export default Movie;
