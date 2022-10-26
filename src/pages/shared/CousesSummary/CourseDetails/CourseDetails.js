import React from 'react';
import {FaStar} from 'react-icons/fa';
import {Link, useLoaderData} from 'react-router-dom';
import ReactToPdf from '../../ReactToPdf/ReactToPdf';
import './CourseDetails.css';

const ref = React.createRef();
const CourseDetails = () => {
	//*get Single Course Data
	const course = useLoaderData();
	const {id, img, title, instructor, price, rating, description, total_hours, enrolled} = course;

	return (
		<div>
			<ReactToPdf targetRef={ref} filename="course-details.pdf" scale={0.8}>
				{({toPdf}) => (
					<button className="btn btn-primary mt-5" onClick={toPdf}>
						Download Course Details
					</button>
				)}
			</ReactToPdf>
			<div className="hero  bg-base-100 ">
				<div className="hero-content  md:text-center">
					<div className=" md:w-4/5">
						<img src={img} alt="" className="m-auto w-96 mb-4" />
						<div ref={ref}>
							<h1 className="text-2xl md:text-5xl font-bold">{title}</h1>
							<p className="text-xs md:text-xl py-3">{description}</p>
							<div className="other info p-4 border-primary border md:flex justify-between items-center">
								<div>
									<p className="">
										Instructor:{' '}
										<span className="text-warning text-2xl font-bold">{instructor}</span>
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
										<span className="text-warning text-2xl font-bold">${total_hours}</span>Total
										Hours
									</p>
								</div>
							</div>
							<div className="button mt-5">
								<Link to="/courses">
									<button className="btn btn-primary mr-5">Go Back</button>
								</Link>
								<Link to={`/checkout/${id}`}>
									<button className="btn btn-primary">Get Premium</button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CourseDetails;
