import React from 'react';
import {useLoaderData} from 'react-router-dom';
import toast from 'react-hot-toast';
const CheckOut = () => {
	//*get CheckOut course data
	const CheckOut = useLoaderData();
	const {title, price, short_description, enrolled} = CheckOut;
	const handleBuy = (e) => {
		e.preventDefault();
		const form = e.target;
		const name = form.name.value;
		toast.success(`Congratulations ${name}. You have purchased the course`, {
			duration: 3000,
			style: {
				fontWeight: 'bold',
			},
		});
		form.reset();
	};
	return (
		<div className="card w-full  mt-5">
			<div className="card-body ">
				<h2 className="card-title justify-center sm:text-3xl md:text-6xl">{title}</h2>
				<p className=" md:text-3xl">{short_description}</p>
				<p>
					Price <span className="  text-3xl font-bold">${price}</span>
				</p>
				<p>
					Total Enrolled <span className="  text-3xl font-bold">{enrolled}</span>
				</p>
				<form onSubmit={handleBuy} className="mt-5 ">
					<input
						type="text"
						placeholder="Your Name "
						name="name"
						className="input input-bordered input-primary w-full max-w-xs"
						required
					/>
					<input
						type="text"
						placeholder="Your Phone NO."
						className="input input-bordered input-primary w-full max-w-xs mt-4 md:ml-4"
						required
					/>
					<div className="card-actions justify-end mt-5">
						<button className="btn mx-auto text-white">Buy Now</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default CheckOut;
