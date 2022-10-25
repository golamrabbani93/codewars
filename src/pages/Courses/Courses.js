import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import AllCoures from '../shared/CousesSummary/AllCourses/AllCoures';
import './Courses.css';
const Courses = () => {
	const [allcourses, setCourses] = useState([]);

	useEffect(() => {
		fetch('https://codewars-server.vercel.app/courses')
			.then((res) => res.json())
			.then((data) => setCourses(data));
	}, []);
	return (
		<div className="courses-container grid">
			<div className="bg-base-100 grid md:grid-cols-2 gap-6 container md:ml-5 mt-5">
				{allcourses.map((course) => (
					<AllCoures course={course}></AllCoures>
				))}
			</div>
			<div className="mt-5 mx-5 md:mx-0">
				<ul className="menu bg-base-300  rounded-box sticky top-0">
					<li className="menu-title text-2xl">
						<span>All Course</span>
					</li>
					{allcourses.map((cat) => (
						<li className="hover-bordered text-xs" key={cat.id}>
							<Link to={`/course-details/${cat.id}`}>{cat.title}</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Courses;
