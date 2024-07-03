function WatchedSummary({ watchedMovies }) {
  return (
    <div className="flex flex-col rounded-xl bg-[#1a1d20] shadow-xl p-3">
      <h2 className='text-xl font-semibold text-white mb-1'>Movies you watched</h2>
      <div className='flex items-center text-white justify-between w-[370px]'>
        <p className='space-x-2'>
          <span>#️⃣</span>
          <span>10 movies</span>
        </p>
        <p className='space-x-2'> 
          <span>⭐️</span>
          <span>0</span>
        </p>
        <p className='space-x-2'>
          <span>🌟</span>
          <span>0</span>
        </p>
        <p className='space-x-2'>
          <span>⏳</span>
          <span>{watchedMovies} min</span>
        </p>
      </div>
    </div>
  );
}

export default WatchedSummary;
