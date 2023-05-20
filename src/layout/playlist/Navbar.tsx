import { FC } from "react";

interface Nav {
  title?: string;
  isLoading: boolean;
}

const Navbar: FC<Nav> = ({ title, isLoading }) => {
  return (
    <div className={`bg-green-500 text-white h-14 flex items-center ${isLoading && "brightness-90"}`}>
      <div className="wrapper">
        <h1 className="font-bold text-xl">{isLoading ? "Loading..." : title}</h1>
      </div>
    </div>
  );
};

export default Navbar;
