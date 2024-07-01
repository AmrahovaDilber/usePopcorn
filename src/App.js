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
  useEffect(() => {
    if (query === "") return;

    async function getData() {
      setIsLoading(true);
      const res = await fetch(
        `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`
      );
      const data = await res.json();
      setMovies(data.Search || []);
      setIsLoading(false);
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
        {isLoading ? <Loader /> : <Movies movies={movies}></Movies>}

        <Watched watchedMovies={watchedMovies} />
      </WatchedBox>
    </div>
  );
}

export default App;
