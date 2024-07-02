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
const KEY = "f84fc31d";

function App() {
  const [movies, setMovies] = useState([]);
  const [watchedMovies, setWatchedMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    if (query === "") return;

    async function getData() {
      try {
        setIsLoading(true);
        setError("");
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`
        );
        if (!res.ok) throw new Error("Something went wrong!");
        const data = await res.json();
        if (data.Response === "False") throw new Error("Movie Not Found");
        setMovies(data.Search || []);
        setIsLoading(false);
      } catch (err) {
        console.error(err.message);
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
  }, [query]);

  return (
    <div className="bg-[#212529] w-full h-screen">
      <Navbar>
        <Logo />
        <Search query={query} setQuery={setQuery} />
        <Results movies={movies} />
      </Navbar>
      <WatchedBox>
        {isLoading && <Loader />}
        {error && <ErrorMessage message={error} />}
        {!isLoading && !error && <Movies movies={movies} />}
        <Watched watchedMovies={watchedMovies} />
      </WatchedBox>
    </div>
  );
}

export default App;

function ErrorMessage({ message }) {
  return <p>{message}!!!</p>;
}
