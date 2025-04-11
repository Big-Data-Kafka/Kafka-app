import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ image, name, price, id }) => {
	const navigate = useNavigate();

	const viewProductHandler = async () => {
		try {
			const res = await fetch("http://localhost:5000/api/action", {
				method: "POST",
				credentials: "include",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					productId: id,
					action: "VIEW",
				}),
			});
			const data = await res.json();
			console.log(data);
		} catch (err) {
			console.log(err);
		} finally {
			navigate(`/product/${id}`);
		}
	};
	return (
		<div
			className="max-w-[400px] bg-white border border-gray-200 rounded-lg shadow-sm cursor-pointer hover:border-gray-400"
			onClick={viewProductHandler}>
			<div className="p-2 px-3">
				<a>
					<img
						className="w-full h-[200px] object-contain rounded-t-lg"
						src={image}
						alt=""
					/>
				</a>
			</div>

			<div className="p-5 flex items-center justify-between flex-wrap">
				<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
					{name}
				</h5>
				<p className="font-normal text-gray-700 ">Price: {price}</p>
			</div>
		</div>
	);
};

export default Card;
