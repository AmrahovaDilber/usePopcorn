function WatchedMovie({ watchedMovie }) {
    return  <div className="flex space-x-3 mb-4">
    <div className="w-[50px] h-[75px] ">
      <img src={watchedMovie.Poster} alt="watchedMovieimg" className="object-cover"></img>
    </div>
    <div className="flex flex-col">
      <p className="font-semibold text-white text-lg">{watchedMovie.Title}</p>
      <p className="text-white">
        <span>🗓</span>
        {watchedMovie.Year}
      </p>
    </div>
  </div>
}

export default WatchedMovie;
