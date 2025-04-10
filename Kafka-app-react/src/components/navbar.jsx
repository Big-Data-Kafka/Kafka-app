import React from "react";
import { Outlet, useNavigate } from "react-router";

const NavBar = () => {
	const navigate = useNavigate();
	return (
		<div className="px-5 pt-2 py-4 h-screen">
			<div className="w-full mb-7 flex justify-between">
				<div className="font-bold text-5xl">Trendify</div>
				<div className="flex items-center gap-x-4">
					<span className="font-light text-xl">William</span>
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
			<Outlet />
		</div>
	);
};

export default NavBar;
