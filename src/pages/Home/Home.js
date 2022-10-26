import React from 'react';
import './Home.css';
import imgleft from '../../assets/images/hero-left-img.svg';
import {Link, useLoaderData} from 'react-router-dom';
import AllCoures from '../shared/CousesSummary/AllCourses/AllCoures';
const Home = () => {
	const allCoures = useLoaderData();
	return (
		<div className="">
			<div className="home-container">
				<div className=" grid md:grid-cols-2  justify-center items-center container mx-auto text-center md:text-start text-white md:h-screen">
					<div className="banner-text mt-20 ml-6">
						<h2 className="text-4xl md:text-6xl font-bold tracking-wider mb-6">
							Finding a balance between life and teaching.
						</h2>
						<p className="text-1xl tracking-wider ">
							Video and text are two powerful ways to learn something. Lot of people take video
							courses to learn new things. Interestingly many people prefer text based courses as...
						</p>
						<Link to="/courses">
							<button className="btn btn-primary mt-7">Get Started</button>
						</Link>
					</div>
					<div className="banner-img  ml-8 hidden md:block">
						<img className="md:relative" src={imgleft} alt="" />
					</div>
				</div>
			</div>
			<div className="all-courses mt-24 mb-24 container mx-auto">
				<h2 className=" text-2xl md:text-5xl uppercase mb-3 font-extrabold ">See All Courses</h2>
				<p className="md:w-1/2 mx-auto mb-10">
					Efficiently aggregate end-to-end core competencies without maintainable ideas. Dynamically
					foster tactical solutions without enabled value.
				</p>
				<div className="grid md:grid-cols-3 gap-6">
					{allCoures.map((course) => (
						<AllCoures course={course} key={course.id}></AllCoures>
					))}
				</div>
			</div>
		</div>
	);
};

export default Home;
