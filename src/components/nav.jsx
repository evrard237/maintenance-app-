import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import {
  mobileNavContainerVariant,
  mobileNavExitProps,
  mobileNavListVariant,
} from "../data/animationConfig";

const activeClassName = "selected navlink";
const activeStyleCallback = ({ isActive }) =>
  isActive ? activeClassName : "navlink";

function NavLinks() {
  return (
    <>
      <NavLink className="py-4 " to="/profile">
        <div className="h-10 w-auto px-3  rounded-lg border-b-[2px] border-emerald-50   content-center transition ease-in-out delay-50 hover:translate-x-1 hover:rounded-lg hover:text-black hover:scale-110 hover:border-white hover:border-[2px]  duration-300 active ">
          Profile
        </div>
      </NavLink>

      <NavLink className="py-4 content-center" to="/devices">
       <div className="h-10 w-auto px-3  rounded-lg border-b-[2px] border-emerald-50   content-center transition ease-in-out delay-50 hover:translate-x-1 hover:rounded-lg hover:text-black hover:scale-110 hover:border-white hover:border-[2px]  duration-300">
          Devices
        </div>
      </NavLink>
      <NavLink className="py-4 content-center" to="/requests">
       <div className="h-10 w-auto px-3  rounded-lg border-b-[2px] border-emerald-50   content-center transition ease-in-out delay-50 hover:translate-x-1 hover:rounded-lg hover:text-black hover:scale-110 hover:border-white hover:border-[2px]  duration-300">
          Requests
        </div>
      </NavLink>
      <NavLink className="py-4 content-center" to="/logout">
        <div
          className="button w-20 h-10 bg-teal-500  cursor-pointer select-none  ease-in-out delay-50 hover:translate-y-1
    active:translate-y-2  active:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841]
    active:border-b-[0px]
    transition-all duration-150 [box-shadow:0_10px_0_0_#96e9e5,0_15px_0_0_#1b70f841]
    rounded-full  border-b-[1px] border-blue-400"
        >
          <span class="flex flex-col justify-center items-center h-full text-white  text-md active:text-yellow-200 ">
            Logout
          </span>
        </div>
        {/* <button className="bg-cyan-400 p-2 rounded-md text-white">Logout</button> */}
      </NavLink>
    </>
  );
}

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="w-2/5   justify-end  ">
        {/* <div></div> */}
        <div className="hidden w-full md:flex  justify-between   ">
          <NavLinks />
        </div>

        <div className="md:hidden float-right ">
          <button onClick={toggleNavbar}>{isOpen ? <X /> : <Menu />}</button>
        </div>
      </nav>
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            layout="position"
            key="nav-links"
            variants={mobileNavContainerVariant}
            initial="hidden"
            animate="show"
            className="mt-4 basis-full md:hidden"
          >
            <motion.div variants={mobileNavListVariant} {...mobileNavExitProps}>
              <NavLink to="/" className={activeStyleCallback}>
                <div className=" flex basis-full flex-col md:hidden items-center fadeInDown">
                  <NavLinks />
                </div>
              </NavLink>
            </motion.div>
            {/* <motion.div variants={mobileNavListVariant} {...mobileNavExitProps}>
              <NavLink to="/blog" className={activeStyleCallback}>
                Blog
              </NavLink>
            </motion.div> */}
          </motion.div>
          // <>
          //   <div className=" flex basis-full flex-col md:hidden items-center fadeInDown">
          //     <NavLinks />
          //   </div>
          // </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Nav;
