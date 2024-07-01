import img from "../assets/images/popcorn.svg";

function Logo() {
  return (
    <div className="flex space-x-2 items-center ">
      <div className="size-[50px]">
        <img src={img} alt="popcorn" className="object-cover"></img>
      </div>
      <h1 className="font-bold text-lg ">usePopcorn</h1>
    </div>
  );
}
export default Logo;
