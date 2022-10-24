import React from 'react';
import {Link, NavLink} from 'react-router-dom';

const Header = () => {
	return (
		<div>
			<div className="navbar bg-base-100 container mx-auto">
				<div className="navbar-start ">
					<div className="dropdown">
						<label tabIndex={0} className="btn btn-ghost lg:hidden">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h8m-8 6h16"
								/>
							</svg>
						</label>
						<ul
							tabIndex={0}
							className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
						>
							<li>
								<NavLink end>Item 1</NavLink>
							</li>
							<li>
								<NavLink>Item 3</NavLink>
							</li>
							<div className="navbar-end lg:hidden">
								<Link className="btn">Get started</Link>
							</div>
						</ul>
					</div>
					<Link to="/" className=" btn btn-ghost normal-case text-xl text-white bg-primary">
						CodeWars
					</Link>
				</div>
				<div className="navbar-center hidden lg:flex">
					<ul className="menu menu-horizontal p-0">
						<li className="mr-2">
							<NavLink to="/" end>
								Home
							</NavLink>
						</li>
						<li className="mr-2">
							<NavLink to="/courses">Courses</NavLink>
						</li>
						<li className="mr-2">
							<NavLink to="/faq">FAQ</NavLink>
						</li>
						<li className="mr-2">
							<NavLink to="/blog">Blog</NavLink>
						</li>
					</ul>
				</div>
				<div className="navbar-end">
					<Link className="btn">Get started</Link>
				</div>
				<div className="dropdown dropdown-end">
					<label tabIndex={0} className="btn btn-ghost btn-circle avatar">
						<div className="w-10 rounded-full">
							<img src="https://placeimg.com/80/80/people" alt="" />
						</div>
					</label>
					<ul
						tabIndex={0}
						className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
					>
						<li>
							<Link className="justify-between">
								Profile
								<span className="badge">New</span>
							</Link>
						</li>
						<li>
							<Link>Settings</Link>
						</li>
						<li>
							<Link>Logout</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Header;
