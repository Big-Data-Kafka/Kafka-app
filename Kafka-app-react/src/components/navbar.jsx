import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";

const NavBar = () => {
	const navigate = useNavigate();
	const [username, setUsername] = useState();

	useEffect(() => {
		const checkAuth = async () => {
			try {
				const res = await fetch("http://localhost:5000/api/check-auth", {
					credentials: "include",
				});
				const data = await res.json();
				if (res.ok) {
					setUsername(data.user.username);
				}
				return;
			} catch (err) {
				console.log(err);
			}
		};
		checkAuth();
	}, []);

	return (
		<div className="w-full mb-7 flex justify-between">
			<div
				className="font-bold text-5xl cursor-pointer"
				onClick={() => navigate("/")}>
				Trendify
			</div>
			<div className="flex items-center gap-x-4">
				<span className="font-light text-xl">{username}</span>
				<button
					onClick={async () => {
						await fetch("http://localhost:5000/api/logout", {
							method: "POST",
							credentials: "include", // <-- required to send the cookie
						});
						navigate("/login");
					}}
					type="submit"
					className="text-white bg-red-700  hover:bg-red-900 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm  sm:w-auto px-8 py-3 text-center max-w-sm cursor-pointer">
					Log Out
				</button>
			</div>
		</div>
	);
};

export default NavBar;
