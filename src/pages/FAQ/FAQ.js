import React from 'react';
import {useLoaderData} from 'react-router-dom';
import SingleBlog from '../Blog/SingleBlog/SingleBlog';

const FAQ = () => {
	const datas = useLoaderData();
	return (
		<div>
			<h2 className="text-2xl md:text-5xl py-6 font-bold">How to Improve your FAQ page</h2>
			{datas.map((data) => (
				<SingleBlog data={data}></SingleBlog>
			))}
		</div>
	);
};

export default FAQ;
