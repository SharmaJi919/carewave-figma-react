import React from "react";
import { speetrance, searchIcon, GroupIcon } from "../assets";
import { navLinks } from "../constants";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full flex py-6 justify-between items-center px-2">
      <img
        src={speetrance}
        alt="speetrance"
        className="w-[105.889px] h-[50.194px]"
      />
      <div className="w-2/5 border-[1px] rounded-full tablet:hidden laptop:flex mobile:hidden">
        <ul className="list-none flex justify-around items-center flex-1 p-4">
          {navLinks.map(({ id, title }, index) => (
            <li key={id} className="font-poppins text-sm font-bold">
              <Link to={`/${id}`}>{title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-[180px] flex justify-around items-center">
        <img src={searchIcon} alt="search" className="w-6 h-6" />
        <img src={GroupIcon} alt="group" className="w-5 h-5" />
      </div>
    </nav>
  );
};

export default Navbar;
