import Navbar from "./components/Navbar";
import "./App.css";
import WatchedBox from "./components/WatchedBox";
import Movies from "./components/Movies";
import Watched from "./components/Watched";
import Logo from "./components/Logo";
import Search from "./components/Search";
import { useEffect, useState } from "react";
import Results from "./components/Results";
import Loader from "./components/Loader";
import MovieDetails from "./components/MovieDetails";
import WatchedSummary from "./components/WatchedSummary";
const KEY = "f84fc31d";

function App() {
  const [movies, setMovies] = useState([]);

  const [watchedMovies, setWatchedMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    if (query === "") return;

    async function getData() {
      try {
        setIsLoading(true);
        setError("");
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
          { signal: controller.signal }
        );
        if (!res.ok) throw new Error("Something went wrong!");
        const data = await res.json();
        console.log(data.Search);
        if (data.Response === "False") throw new Error("Movie Not Found");
        setMovies(data.Search || []);
        setIsLoading(false);
        setError("")
      } catch (err) {
        console.error(err.message);
        if (err.name !== 'AbortError') {
          setError(err.message)
        }
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    if (query.length < 3) {
      setMovies([]);
      setError("");
      return;
    }
    getData();


    return function () {
      controller.abort();
    }

  }, [query]);

  function handleSelectMovie(id) {
    setSelectedId((selectedId) => (id === selectedId ? null : id));
  }

  function handleCloseMovie() {
    setSelectedId(null);
  }

  function handleAddWatched(movie) {
    setWatchedMovies((watchedMovies) => [...watchedMovies, movie]);
  }

  return (
    <div className="bg-[#212529] w-full h-full ">
      <Navbar>
        <Logo />
        <Search query={query} setQuery={setQuery} />
        <Results movies={movies} />
      </Navbar>
      <WatchedBox>
        {isLoading && <Loader />}
        {error && <ErrorMessage message={error} />}
        {!isLoading && !error && (
          <Movies handleSelectMovie={handleSelectMovie} movies={movies} />
        )}

        {selectedId ? (
          <MovieDetails
            selectedId={selectedId}
            handleCloseMovie={handleCloseMovie}
            handleAddWatched={handleAddWatched}
          />
        ) : (
          <div
            style={{ height: "calc(100vh - 150px)" }}
            className="flex flex-col  rounded-xl w-full  md:w-1/2"
          >
            <WatchedSummary></WatchedSummary>
            <Watched watchedMovies={watchedMovies}></Watched>
          </div>
        )}
      </WatchedBox>
    </div>
  );
}

export default App;

function ErrorMessage({ message }) {
  return <p>{message}!!!</p>;
}
