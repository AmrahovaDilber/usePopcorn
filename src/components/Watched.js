import WatchedMovie from "./WatchedMovie";

function Watched({ watchedMovies }) {
  return (
    <div className="p-5 rounded-xl w-full  md:w-1/2 bg-[#343a40]">
      {watchedMovies.map((watchedMovie) => (
        <WatchedMovie watchedMovie={watchedMovie}></WatchedMovie>
      ))}
    </div>
  );
}

export default Watched;
