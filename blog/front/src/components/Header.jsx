import React from 'react';
import { useState } from 'react';
import{ AiOutlineMenu,AiOutlineClose } from "react-icons/ai"
//import { images } from "../constants";

const navItemsInfo = [
  { name: "Home" },
  { name: "Articles" },
  { name: "Pages" },
  { name: "Pricing" },
  { name: "Faq" },
]

const navItem = ({ name }) => {
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
        <div>{navIsVisible ? 
          <AiOutlineMenu className="w-6 h-6" onClick={navVisibilityHandler}/> 
          : 
          <AiOutlineClose className="w-6 h-6" onClick={navVisibilityHandler}/>}
          </div>
        <div
        className= {`${navIsVisible ? "right-0" : "right-full"}
        flex flex-col w-full lg:w-auto justify-center lg:justify-end lg:flex-row fixed top-0 bottom-0 lg:static gap-x-9 items-center`}>
          <ul className="flex gap-x-2 font-semibold">
            {navItemsInfo.map((item) => (
              <navItem key={item.name} name={item.name} />
            ))}
          </ul>
        <button className="border-2 border-sky-500 px-6 py-2 rounded-full text-blue-500">
          Sign in
        </button>
        </div>
      </header>

    </section>
	
  )
}

export default Header