import React from 'react';
import {useLoaderData} from 'react-router-dom';
import SingleBlog from './SingleBlog/SingleBlog';

const Blog = () => {
	const datas = useLoaderData();
	return (
		<div className="mt-5 container mx-auto">
			{datas.map((data) => (
				<SingleBlog data={data} key={data.id}></SingleBlog>
			))}
		</div>
	);
};

export default Blog;
