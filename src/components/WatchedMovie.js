function WatchedMovie({ watchedMovie }) {
    return  <div className="flex space-x-3 mb-4" key={watchedMovie.imdbID}>
    <div className="w-[50px] h-[75px] ">
      <img src={watchedMovie.poster} alt="watchedMovieimg" className="object-cover"></img>
    </div>
    <div className="flex flex-col">
      <p className="font-semibold text-white text-lg">{watchedMovie.title}</p>
      <div className="text-white flex items-center  justify-between w-[310px] ">
        <p>
          <span>⭐️</span>
          <span>{watchedMovie.imdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{watchedMovie.userRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{watchedMovie.runtime} min</span>
        </p>
      </div>
    </div>
  </div>
}

export default WatchedMovie;
