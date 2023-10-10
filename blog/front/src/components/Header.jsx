import React from 'react';
import { useState } from 'react';
import{ AiOutlineMenu,AiOutlineClose } from "react-icons/ai"
//import { Link, useNavigate } from "react-router-dom";
//import { images } from "../constants";

const navItemsInfo = [
  { name: "Accueil", type: "link", href: "/" },
  { name: "Articles", type: "link", href: "/articles" },
  { name: "Tutos", type: "link", href: "/tutos" },
  { name: "Contact", type: "link", href: "contact" },
];

const NavItem = ({ name }) => {
  return (
    <li className="relative group">
      <a href="/" className="px-4 py-2">
        {name}
      </a>
    </li>
  );
};

const Header = () => {
  const [navIsVisible, setNavIsVisible] = useState(false);

  const navVisibilityHandler = () => {
    setNavIsVisible((curState) => {
      return !curState;
    })
  }
  return (
    <section>
      <header className="container mx-auto px-5 flex justify-between py-4 items-center">
        <div>
          <img src="" alt="" className="w-16" />
        </div>
        <div className='lg:hidden z-50'>{navIsVisible ? 
          <AiOutlineClose className="w-6 h-6" onClick={navVisibilityHandler}/> 
          : 
          <AiOutlineMenu className="w-6 h-6" onClick={navVisibilityHandler}/>}
          </div>
        <div
        className= {`${navIsVisible ? "right-0" : "-right-full"}
        transition-all duration-300 mt-[56px] lg:mt-0 bg-dark-hard lg:bg-transparent z-[49] flex flex-col w-full lg:w-auto justify-center lg:justify-end lg:flex-row fixed top-0 bottom-0 lg:static gap-x-9 items-center`}>
          <ul className="flex gap-x-2 font-semibold">
            {navItemsInfo.map((item) => (
              <NavItem key={item.name} name={item.name} />
            ))}
          </ul>
        <button className="border-2 border-sky-500 px-6 py-2 rounded-full text-blue-500">
          Se connecter
        </button>
        </div>
      </header>

    </section>
	
  )
}

export default Header