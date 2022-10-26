import React, {useContext} from 'react';
import {Link, NavLink} from 'react-router-dom';
import {themeChange} from 'theme-change';
import {useEffect} from 'react';
import toast from 'react-hot-toast';
import './Header.css';
import {AuthContext} from '../../../contexts/ContextProvider/ContextProvider';
const Header = () => {
	// *get Context data
	const {user, userLogOut} = useContext(AuthContext);
	console.log('🚀🚀: Header -> user', user);
	//*change theme function
	useEffect(() => {
		themeChange(false);
	}, []);
	//*handle Logout function
	const handleLogOut = () => {
		userLogOut()
			.then((result) => {
				toast.success('Logout Successfully', {
					duration: 3000,
				});
			})
			.catch((err) => {});
	};
	return (
		<div className="bg-primary navgation">
			<div className="navbar container mx-auto">
				<div className="navbar-start w-0 lg:w-1/2 mr-auto">
					<div className="flex justify-between ">
						<div className="dropdown">
							<label tabIndex={0} className="btn text-white btn-ghost lg:hidden">
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
								className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-300 rounded-box w-52 "
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
								{user?.uid ? (
									''
								) : (
									<div className="navbar-end lg:hidden w-full">
										<Link to="/login" className="btn">
											Login
										</Link>
									</div>
								)}
								<select
									className="select select-primary mt-4 w-full text-xs block lg:hidden "
									data-choose-theme
								>
									<option value="dark">Dark</option>
									<option value="light">Light</option>
								</select>
							</ul>
						</div>
					</div>
					<div className="mr-auto">
						<Link
							to="/"
							className=" btn btn-ghost hidden lg:flex normal-case text-xl text-white bg-transparent text-right mx-auto "
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
						<option value="">Dark</option>
						<option value="light">Light</option>
					</select>
				</div>
				{user?.uid ? (
					<div className="dropdown dropdown-end " title={user?.displayName}>
						<label tabIndex={0} className="btn btn-ghost btn-circle avatar">
							<div className="avatar online">
								<div className="w-10 rounded-full">
									<img src={user?.photoURL} alt="" />
								</div>
							</div>
						</label>
						<ul
							tabIndex={0}
							className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-300 rounded-box w-52"
						>
							<li className="font-bold">{user?.displayName}</li>
							<li>
								<Link className="justify-between">Edit Profile</Link>
							</li>

							<li onClick={handleLogOut}>
								<button>Logout</button>
							</li>
						</ul>
					</div>
				) : (
					<Link to="/login" className="btn">
						Login
					</Link>
				)}
			</div>
		</div>
	);
};

export default Header;
