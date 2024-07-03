import WatchedMovie from "./WatchedMovie";

function Watched({ watchedMovies }) {
  return (
    <div>
      <div className="bg-[#343a40] p-3">
        {watchedMovies.map((watchedMovie) => (
          <WatchedMovie watchedMovie={watchedMovie}></WatchedMovie>
        ))}
      </div>
    </div>
  );
}

export default Watched;
