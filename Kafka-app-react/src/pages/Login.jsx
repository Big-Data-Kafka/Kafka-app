import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
	const navigate = useNavigate();

	const usernameRef = useRef();
	const passwordRef = useRef();
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");

	const loginHandler = async () => {
		setLoading(true);
		console.log(usernameRef.current.value);
		console.log(passwordRef.current.value);
		try {
			const res = await fetch("http://localhost:5000/api/login", {
				method: "POST",
				credentials: "include",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					username: usernameRef.current.value,
					password: passwordRef.current.value,
				}),
			});
			const data = await res.json();
			console.log(data);
			setLoading(false);
			if (res.ok) {
				setError("");
				console.log(data);
				navigate("/");
			} else {
				setError(data.error);
			}
		} catch (err) {
			console.log(err);
			setLoading(false);
			setError("Something Went Wrong!");
		}
	};

	return (
		<div className="h-screen">
			<div className="h-full flex justify-center items-center  bg-gray-100">
				<div className="w-[550px] h-[350px] shadow-md border-gray-100 rounded-lg py-4 px-3 bg-white">
					<div className="text-center font-bold text-4xl mb-5">
						Welcome to Trendify
					</div>

					<form className="max-w-sm mx-auto">
						<div className="mb-5">
							<label
								htmlFor="username"
								className="block mb-2 text-sm font-medium text-gray-900">
								Username
							</label>
							<input
								type="text"
								id="username"
								className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
								placeholder="name"
								ref={usernameRef}
								required
							/>
						</div>
						<div className="mb-5">
							<label
								htmlFor="password"
								className="block mb-2 text-sm font-medium text-gray-900">
								Your password
							</label>
							<input
								type="password"
								id="password"
								className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
								ref={passwordRef}
								required
							/>
						</div>
						{error && (
							<div className="mb-2 flex font-light text-red-500">{error}</div>
						)}

						<div className="flex justify-center">
							<button
								disabled={loading}
								onClick={loginHandler}
								type="submit"
								className="text-white bg-gray-800  hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm w-full sm:w-auto px-8 py-3 text-center">
								Sign In
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
