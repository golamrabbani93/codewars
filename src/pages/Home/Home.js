import React from 'react';
import './Home.css';
import imgleft from '../../assets/images/hero-left-img.svg';
import {Link} from 'react-router-dom';
const Home = () => {
	return (
		<div className="home-container">
			<div className=" grid md:grid-cols-2  justify-center items-center container mx-auto text-center md:text-start text-white md:h-screen">
				<div className="banner-text mt-20  ">
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
	);
};

export default Home;
