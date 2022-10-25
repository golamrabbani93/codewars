import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import './Courses.css';
const Courses = () => {
	const [categories, setCategories] = useState([]);
	console.log('🚀🚀: Courses -> categories', categories);
	useEffect(() => {
		fetch('http://localhost:5000/course-category')
			.then((res) => res.json())
			.then((data) => setCategories(data));
	}, []);
	return (
		<div className="courses-container grid">
			<div className="bg-base-100 ">left content</div>
			<div className=" mt-10">
				<ul className="menu bg-base-300 w-56 rounded-box">
					<li className="menu-title text-2xl">
						<span>Category</span>
					</li>
					{categories.map((cat) => (
						<li className="hover-bordered">
							<Link to>{cat.name}</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Courses;
