import React from "react";

const Product = () => {
	const buyHandler = () => {};
	return (
		<div className="flex h-screen overflow-hidden">
			<div className=" w-full h-[50%] flex-2/3  px-4 py-5">
				<img
					className="w-full mx-auto h-full object-contain border border-gray-300 rounded-r-sm"
					src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2367&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					alt=""
				/>
			</div>
			<div className=" w-full h-full px-4 py-5">
				<div className="text-7xl font-bold tracking-tight mb-7">
					Adidas Shirt
				</div>
				<div className="flex flex-col space-y-5">
					<div className="font-light text-xl mb">
						Addidas Shirt Black Color{" "}
					</div>
					<div className="font-normal text-gray-700 "> Price : 500 Baht</div>
					<button
						onClick={buyHandler}
						type="submit"
						class="text-white bg-gray-800  hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm  sm:w-auto px-8 py-3 text-center max-w-sm cursor-pointer">
						Buy Now
					</button>
				</div>
			</div>
		</div>
	);
};

export default Product;
