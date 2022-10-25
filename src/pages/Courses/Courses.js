import React, {useEffect, useState} from 'react';

const Courses = () => {
	const [categories, setCategories] = useState([]);
	console.log('🚀🚀: Courses -> categories', categories);
	useEffect(() => {
		fetch('http://localhost:5000/course-category')
			.then((res) => res.json())
			.then((data) => setCategories(data));
	}, []);
	return (
		<div>
			<h2>this is Courses page</h2>
		</div>
	);
};

export default Courses;
