import React from 'react'
import ArticleCard from '../../../components/ArticleCard'
import { FaArrowRight } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { changeCount } from "../../../store/actions/countActions";

const Articles = () => {
	const dispatch = useDispatch()
	//const count = useSelector(state => state.count);

	const countChangeHandler = (type) => {
		dispatch(changeCount(type))
	}
	return (
	<section className="flex flex-col container mx-auto flex flex-wrap md:gap-x-5 gap-y-5 px-5 py-10">
		<div className="flex flex-wrap-md:gap-x-5 gap-y-5 pb-10">
			<ArticleCard className='w-full md:w-[calc(50%-20px)]'/>
		</div>
		<button className='mx-auto flex items-center gap-x-2 font-bold text-primary border-primary px-6 py-3'>
			<span>Plus d'articles</span>
			<FaArrowRight className='w-3 h-3'/>
		</button>
		<div className='mt-5 flex items-center g-x-5'>
			<button onClick={() => countChangeHandler('DECREASE')}>decrease</button>
			<button onClick={() => countChangeHandler('INCREASE')}>increase</button>
		</div>
	</section>
	);
};

export default Articles