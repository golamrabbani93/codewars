import React, {useContext, useState} from 'react';
import {Link, NavLink} from 'react-router-dom';
import {useEffect} from 'react';
import toast from 'react-hot-toast';
import './Header.css';
import {AuthContext} from '../../../contexts/ContextProvider/ContextProvider';
const Header = () => {
	// *get Context data
	const {user, userLogOut} = useContext(AuthContext);
	const [checked, setChecked] = useState('');

	//*change theme function
	useEffect(() => {
		const data = localStorage.getItem('Theme');
		let html = document.getElementsByTagName('html');
		html[0].setAttribute('data-theme', data);
		if (data === 'dark') {
			setChecked(false);
		} else {
			setChecked(true);
		}
	}, []);
	const changeTheme = () => {
		// localStorage.setItem('Theme', checked);
		setChecked(!checked);
		let html = document.getElementsByTagName('html');
		const theme = html[0].getAttribute('data-theme');
		if (theme === 'dark') {
			html[0].setAttribute('data-theme', 'light');
			localStorage.setItem('Theme', 'light');
		} else {
			html[0].setAttribute('data-theme', 'dark');
			localStorage.setItem('Theme', 'dark');
		}
	};

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
					{/* <select
						className="select select-primary w-24 mx-4 max-w-xs text-xs hidden lg:block"
						data-choose-theme
					>
						<option value="">Dark</option>
						<option value="light">Light</option>
					</select> */}
					<button onClick={() => changeTheme()} className=" text-white mr-4">
						{checked ? (
							<svg
								stroke="currentColor"
								fill="currentColor"
								strokeWidth="0"
								viewBox="0 0 16 16"
								height="19"
								width="19"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"></path>
								<path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"></path>
							</svg>
						) : (
							<svg
								stroke="currentColor"
								fill="currentColor"
								strokeWidth="0"
								viewBox="0 0 16 16"
								height="19"
								width="19"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"></path>
							</svg>
						)}
					</button>
				</div>
				{user?.uid ? (
					<div className="dropdown dropdown-end ">
						<label tabIndex={0} className="btn btn-ghost btn-circle avatar">
							<div className="avatar online">
								<div className="w-10 rounded-full" title={user?.displayName}>
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
