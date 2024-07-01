function Search({ query, setQuery }) {
  return (
    <div className="h-8 border">
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="outline-none w-full md:w-[500px] text-white bg-transparent pl-3"
        placeholder="Search movies..."
      ></input>
    </div>
  );
}
export default Search;
