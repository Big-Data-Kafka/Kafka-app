import React from "react";
import { useNavigate } from "react-router-dom";

const Card = () => {
	const navigate = useNavigate();
	return (
		<div
			className="max-w-[400px] bg-white border border-gray-200 rounded-lg shadow-sm cursor-pointer hover:border-gray-400"
			onClick={() => navigate("/product/1")}>
			<div className="p-2 px-3">
				<a>
					<img
						className="w-full h-[200px] object-contain rounded-t-lg"
						src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2367&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						alt=""
					/>
				</a>
			</div>

			<div className="p-5 flex items-center justify-between flex-wrap">
				<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
					Addidas Shirt
				</h5>
				<p className="font-normal text-gray-700 ">Price: 500</p>
			</div>
		</div>
	);
};

export default Card;
