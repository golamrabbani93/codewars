import React from 'react';
import {useLoaderData} from 'react-router-dom';
import SingleBlog from './SingleBlog/SingleBlog';

const Blog = () => {
	const datas = useLoaderData();
	return (
		<div className="mt-5 container mx-auto">
			<h2 className="text-2xl md:text-5xl py-6 font-bold">All {datas.length} Questios</h2>
			{datas.map((data) => (
				<SingleBlog data={data} key={data.id}></SingleBlog>
			))}
		</div>
	);
};

export default Blog;
