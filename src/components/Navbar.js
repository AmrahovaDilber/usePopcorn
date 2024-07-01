
function Navbar({ children }) {
  return (
    <div className="bg-indigo-700 text-white">
      <div className="flex flex-col md:flex-row justify-between items-center py-2 max-w-screen-xl mx-auto px-4">
        {children}
      </div>
    </div>
  );
}

export default Navbar;
