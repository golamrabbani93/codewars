import React from 'react';
import {Link} from 'react-router-dom';

const AllCoures = ({course}) => {
	const {
		id,
		img,
		title,
		instructor,
		price,
		rating,
		seller,
		short_description,
		total_hours,
		enrolled,
	} = course;
	return (
		<div className="card md:w-96 bg-base-300 shadow-xl m-5 md:m-0">
			<figure className="px-5 pt-5">
				<img src={img} alt="Shoes" className="rounded-xl" />
			</figure>
			<div className="card-body items-start text-start">
				<h2 className="card-title ">{title}</h2>
				<p className="text-sm ">
					{short_description.length > 30
						? `${short_description.slice(0, 60)}`
						: {short_description}}
				</p>
				<div className="author flex justify-between  items-center">
					<p className="mr-5 text-xs	">Instructor: {instructor}</p>
					<p className="text-warning text-2xl">${price}</p>
				</div>
				<div className="">
					<div className="">
						<span className="text-warning font-bold">{rating}</span>
						<span>({enrolled})</span>
						<span>{total_hours} Total Hours</span>
					</div>
				</div>
				<div className="card-actions md:flex justify-evenly items-center">
					<Link to={`/course-details/${id}`}>
						<button className="btn btn-primary">See Details</button>
					</Link>

					<div className="">
						{seller.length !== 0 && (
							<p className=" bg-secondary p-2 uppercase rounded-xl md:ml-16 text-white font-bold">
								{seller}
							</p>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default AllCoures;
