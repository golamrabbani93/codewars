import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import {themeChange} from 'theme-change';
import {useEffect} from 'react';
const Header = () => {
	useEffect(() => {
		themeChange(false);
	}, []);
	return (
		<div>
			<div className="navbar bg-base-300 container mx-auto">
				<div className="navbar-start w-0 lg:w-1/2 mr-auto">
					<div className="flex justify-between ">
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
								className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 "
							>
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
								<div className="navbar-end lg:hidden w-full">
									<Link className="btn">Get started</Link>
								</div>
								<select
									className="select select-primary mt-4 w-full text-xs block lg:hidden "
									data-choose-theme
								>
									<option disabled selected className="text-xs m-0 p-0">
										Dark mode or light mode?
									</option>

									<option>Dark</option>
									<option value="light">Light</option>
								</select>
							</ul>
						</div>
					</div>
					<div className="mr-auto">
						<Link
							to="/"
							className=" btn btn-ghost hidden lg:flex normal-case text-xl text-white bg-primary text-right mx-auto"
						>
							CodeWars
						</Link>
					</div>
				</div>
				<div className="mr-auto">
					<Link
						to="/"
						className=" btn btn-ghost flex lg:hidden normal-case text-xl text-white bg-primary text-right mx-auto"
					>
						CodeWars
					</Link>
				</div>

				<div className="navbar-center hidden lg:flex text-white">
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

				<div className="navbar-end hidden lg:flex">
					<select
						className="select select-primary w-24 mx-4 max-w-xs text-xs hidden lg:block"
						data-choose-theme
					>
						<option>Dark</option>
						<option value="light">Light</option>
					</select>
					<Link className="btn">Get started</Link>
				</div>
				<div className="dropdown dropdown-end " title="Golam Rabbani">
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
