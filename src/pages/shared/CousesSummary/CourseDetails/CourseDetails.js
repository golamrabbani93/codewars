import React from 'react';
import {FaStar} from 'react-icons/fa';
import {useLoaderData} from 'react-router-dom';

const CourseDetails = () => {
	//*get Single Course Data
	const course = useLoaderData();
	console.log('🚀🚀: CourseDetails -> course', course);
	const {img, title, instructor, price, rating, description, total_hours, enrolled} = course;
	return (
		<div>
			<div className="hero  bg-base-100 ">
				<div className="hero-content  md:text-center">
					<div className="md:w-4/5">
						<img src={img} alt="" className="m-auto w-96 mb-4" />
						<h1 className="text-2xl md:text-5xl font-bold">{title}</h1>
						<p className="text-xs md:text-xl py-3">{description}</p>
						<div className="other info p-4 border-primary border md:flex justify-between items-center">
							<div>
								<p className="">
									Instructor: <span className="text-warning text-2xl font-bold">{instructor}</span>
								</p>
							</div>
							<div>
								<p className="">
									Price: <span className="text-warning text-2xl font-bold">${price}</span>
								</p>
							</div>

							<div>
								<p className="text-warning flex justify-center items-center">
									<FaStar></FaStar>
									<span className="text-2xl font-bold ml-1">${rating}</span>
									<span>({enrolled})</span>
								</p>
							</div>

							<div>
								<p className=" inline-block ">
									<span className="text-warning text-2xl font-bold">${total_hours}</span>Total Hours
								</p>
							</div>
						</div>
						<div className="button mt-5">
							<button className="btn btn-primary mr-5">Get Started</button>
							<button className="btn btn-primary">Get Started</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CourseDetails;
