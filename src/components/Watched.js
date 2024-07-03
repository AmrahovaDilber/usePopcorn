import WatchedMovie from "./WatchedMovie";

function Watched({ watchedMovies }) {
  return (
    <div>
      <div  style={{ height: "calc(100vh - 230px)" }} className="bg-[#343a40] overflow-y-auto p-3">
        {watchedMovies.map((watchedMovie) => (
          <WatchedMovie watchedMovie={watchedMovie}></WatchedMovie>
        ))}
      </div>
    </div>
  );
}

export default Watched;
