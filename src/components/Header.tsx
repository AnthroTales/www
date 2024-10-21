import { Navbar } from "./Navbar";

export const Header = () => {
  return (
    <header className="text-white relative z-20">
      <div className=" mx-auto flex lg:pb-0 pb-4 lg:justify-between justify-center pt-6 pl-6 pr-6 ">
        <Navbar />
      </div>
    </header>
  );
};
