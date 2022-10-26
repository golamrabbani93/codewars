import React from 'react';
import {Link} from 'react-router-dom';
import './Register.css';
import googleimg from '../../../../assets/images/google.png';
import githubimg from '../../../../assets/images/github.png';
const Register = () => {
	return (
		<div>
			<div className="hero min-h-screen bg-base-100">
				<div className="hero-content flex-col lg:flex-row-reverse">
					<form className="card flex-shrink-0 sm:w-96 max-w-sm shadow-2xl bg-base-300">
						<div className="card-body">
							<div className="form-control">
								<label className="label">
									<span className="label-text">Full Name</span>
								</label>
								<input type="text" placeholder="name" className="input input-bordered" />
							</div>
							<div className="form-control">
								<label className="label">
									<span className="label-text">Photo Url</span>
								</label>
								<input type="text" placeholder="photo url" className="input input-bordered" />
							</div>
							<div className="form-control">
								<label className="label">
									<span className="label-text">Email</span>
								</label>
								<input type="text" placeholder="email" className="input input-bordered" />
							</div>
							<div className="form-control">
								<label className="label">
									<span className="label-text">Password</span>
								</label>
								<input type="text" placeholder="password" className="input input-bordered" />
								<label className="label">
									<Link href="#" className="label-text-alt text-warning link link-hover">
										Forgot password?
									</Link>
									<span className="text-xs">
										Already have an account
										<Link to="/login" className="text-warning  link link-hover ml-1">
											Login
										</Link>
									</span>
								</label>
							</div>
							<div className="form-control mt-6">
								<button className="btn btn-primary">Register</button>
							</div>
							<span className="border my-2"></span>
							<div className="social">
								<span className="text-xl">Continue with </span>
								<p className="flex justify-center items-center mt-3">
									<button className="ml-3">
										<img
											src={googleimg}
											alt=""
											width="40"
											height="40"
											style={{borderRadius: '50%'}}
										/>
									</button>
									<button className="ml-3">
										<img
											src={githubimg}
											alt=""
											width="41"
											height="40"
											style={{borderRadius: '50%'}}
										/>
									</button>
								</p>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Register;
