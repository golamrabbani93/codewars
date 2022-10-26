import React from 'react';

const SingleBlog = ({data}) => {
	return (
		<div
			tabIndex={0}
			className="collapse collapse-arrow border border-primary mt-5 bg-base-300 rounded-box"
		>
			<div className="collapse-title text-xl font-medium">Focus me to see content</div>
			<div className="collapse-content">
				<p>tabIndex={0} attribute is necessary to make the div focusable</p>
			</div>
		</div>
	);
};

export default SingleBlog;
