import React from 'react';

const SingleBlog = ({data}) => {
	console.log('🚀🚀: SingleBlog -> data', data);
	const {Q, ans} = data;
	return (
		<div
			tabIndex={0}
			className="collapse collapse-arrow border border-primary mt-5 bg-base-300 rounded-box"
		>
			<div className="collapse-title text-xl font-medium ">Questions: {Q}</div>
			<div className="collapse-content">
				<p>Ans:- {ans}</p>
			</div>
		</div>
	);
};

export default SingleBlog;
