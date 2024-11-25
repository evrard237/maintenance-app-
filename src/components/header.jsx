import { NavLink } from "react-router-dom";
import Logo from "./logo";
import Nav from "./nav";

function Header() {
  return (
    <>
      <header className="bg-dark-bckground    bg-gradient-to-l from-[rgb(110,231,183)]  sticky top-0 flex-wrap z-[20] mx-auto flex w-full items-center justify-between p-2 pr-5  font-sans  text-sm  ">
        <Logo />
        <Nav />
        
      </header>
    </>
  );
}

export default Header;
