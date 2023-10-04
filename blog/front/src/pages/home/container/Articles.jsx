import React from 'react'
import ArticleCard from '../../../components/ArticleCard'
import { FaArrowRight } from 'react-icons/fa';
import { useSelector } from 'react-redux';

const Articles = () => {
const count = useSelector(state => state.count);
	return (
	<section className="flex flex-col container mx-auto flex flex-wrap md:gap-x-5 gap-y-5 px-5 py-10">
		<div className="flex flex-wrap-md:gap-x-5 gap-y-5 pb-10">
			<ArticleCard className='w-full md:w-[calc(50%-20px)]'/>
		</div>
		<button className='mx-auto flex items-center gap-x-2 font-bold text-primary border-primary px-6 py-3'>
			<span>More Articles</span>
			<FaArrowRight className='w-3 h-3'/>
		</button>
		<div>
			<button>decrease</button>
			<button>increase</button>
		</div>
	</section>
	);
};

export default Articles