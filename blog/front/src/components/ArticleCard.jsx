import React from 'react';
import {BsCheckLg} from 'react-icons/bs';

const ArticleCard = ({ className }) => {
  return (
  <div
        className={`rounded-xl overflow-hidden shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] ${className}`}
  >
    <img src="" alt="img3"></img>
    <div className="p-5">
      <h2 className='font-roboto font-bold text-xl text-dark-soft'>Titre article</h2>
      <p className='text-dark-light mt-3 text-sm'></p>
      <div className='flex justify-between flex-nowrap items-center mt-6'>
        <div className='flex items-center gap-x-2'>
          <img src="" alt="empty" />
          <div className='flex flex-col'>
            <h4>Description article</h4>
            <div className='flex items-center gap-x-2'>
              <span><BsCheckLg className='w-1.5 h-1.5 text-[#36B37E]'/></span>
              <span>Nom auteur</span>
            </div>
          </div>

        </div>
        <spa className='font-bold text-dark-light italic text-sm md:text-base'></spa>
      </div>
    </div>

  </div>
  )
}

export default ArticleCard