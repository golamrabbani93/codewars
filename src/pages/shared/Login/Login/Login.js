import React, {useContext} from 'react';
import googleimg from '../../../../assets/images/google.png';
import githubimg from '../../../../assets/images/github.png';
import {Link, useNavigate} from 'react-router-dom';
import {AuthContext} from '../../../../contexts/ContextProvider/ContextProvider';
import toast from 'react-hot-toast';
const Login = () => {
	// *get Context-data
	const {loginEmailPass} = useContext(AuthContext);
	// *use navigate
	const navigate = useNavigate();
	//*get all Login form data
	const handleLogin = (e) => {
		e.preventDefault();
		const form = e.target;
		const email = form.email.value;
		const password = form.password.value;
		loginEmailPass(email, password)
			.then((result) => {
				// const user = result.user;
				form.reset();
				navigate('/');
				toast.success('Login Successfully', {
					duration: 3000,
				});
			})
			.catch((err) => {
				console.error(err);
				toast.error(`Login Unsuccess ${err.message}`, {
					duration: 5000,
				});
			});
	};
	return (
		<div>
			<div className="hero min-h-screen bg-base-100">
				<div className="hero-content flex-col lg:flex-row-reverse">
					<form
						onSubmit={handleLogin}
						className="card flex-shrink-0 sm:w-96 max-w-sm shadow-2xl bg-base-300"
					>
						<div className="card-body">
							<div className="form-control">
								<label className="label">
									<span className="label-text">Email</span>
								</label>
								<input
									name="email"
									type="email"
									placeholder="email"
									className="input input-bordered"
									required
								/>
							</div>
							<div className="form-control">
								<label className="label">
									<span className="label-text">Password</span>
								</label>
								<input
									name="password"
									type="password"
									placeholder="password"
									className="input input-bordered"
									required
								/>
								<label className="label">
									<Link href="#" className="label-text-alt text-warning link link-hover">
										Forgot password?
									</Link>
									<span className="text-xs">
										Dont Have Account
										<Link to="/register" className="text-warning  link link-hover ml-1">
											Register
										</Link>
									</span>
								</label>
							</div>
							<div className="form-control mt-6">
								<button className="btn btn-primary">Login</button>
							</div>
							<span className="border border-warning  my-2"></span>
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

export default Login;
