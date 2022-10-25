import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import AllCoures from '../shared/CousesSummary/AllCourses/AllCoures';
import './Courses.css';
const Courses = () => {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		fetch('http://localhost:5000/courses')
			.then((res) => res.json())
			.then((data) => setCategories(data));
	}, []);
	return (
		<div className="courses-container grid">
			<div className="bg-base-100 grid grid-cols-2 gap-6 container ml-5 mt-5">
				{categories.map((course) => (
					<AllCoures course={course}></AllCoures>
				))}
			</div>
			<div className="mt-5">
				<ul className="menu bg-base-300  rounded-box sticky top-0">
					<li className="menu-title text-2xl">
						<span>Category</span>
					</li>
					{categories.map((cat) => (
						<li className="hover-bordered text-xs" key={cat.id}>
							<Link to>{cat.title}</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Courses;
