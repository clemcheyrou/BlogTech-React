import React from 'react';
import {BsCheckLg} from 'react-icons/bs';

const ArticleCard = ({ className }) => {
  return (
  <div
        className={`rounded-xl overflow-hidden shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] ${className}`}
  >
    <img src="" alt="img article"></img>
    <div className="p-5">
      <h2 className='font-roboto font-bold text-xl text-dark-soft'>Titre article</h2>
      <p className='text-dark-light mt-3 text-sm'></p>
      <div className='flex justify-between flex-nowrap items-center mt-6'>
        <div className='flex items-center gap-x-2'>
          <img src="" alt="img auteur" />
          <div className='flex flex-col'>
            <h4 className="font-bold italic text-dark-soft text-sm md:text-base">Description article</h4>
            <div className='flex items-center gap-x-2'>
              <span><BsCheckLg className="w-1.5 h-1.5 text-[#36B37E]"/></span>
              <span className='italic text-dark-light text-xs md:text-sm'>Nom auteur</span>
            </div>
          </div>

        </div>
        <span className='font-bold text-dark-light italic text-sm md:text-base'></span>
      </div>
    </div>

  </div>
  )
}

export default ArticleCard