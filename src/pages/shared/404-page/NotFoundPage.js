import React from 'react';
import {Link} from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const NotFoundPage = () => {
	return (
		<div>
			<Header></Header>
			<div className="h-64 flex justify-center items-center flex-col">
				<h2 className="text-8xl text-red-700 font-bold">404</h2>
				<h2 className="mt-4 text-3xl mb-5">Page Not Found</h2>
				<Link to="/">
					<button className="btn btn-primary">Go Back</button>
				</Link>
			</div>
			<Footer></Footer>
		</div>
	);
};

export default NotFoundPage;
