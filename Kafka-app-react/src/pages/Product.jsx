import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const Product = () => {
	const [product, setProduct] = useState({
		image:
			"https://thumb.ac-illust.com/b1/b170870007dfa419295d949814474ab2_t.jpeg",
		name: "",
		description: "",
		price: "",
	});
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");
	const { productId } = useParams();

	useEffect(() => {
		const fetchProduct = async () => {
			try {
				const res = await fetch(
					`http://localhost:5000/api/product/${productId}`,
					{
						credentials: "include",
						headers: {
							"Content-Type": "application/json",
						},
					},
				);
				const data = await res.json();
				setLoading(false);

				if (res.status === 401) {
					navigate("/login");
					return;
				} else if (res.ok) {
					setProduct((prevProduct) => ({
						...prevProduct,
						...data,
					}));
				} else {
					setError(data.message);
				}
			} catch (err) {
				console.log(err);
			}
		};
		fetchProduct();
	}, []);

	const buyHandler = async () => {
		try {
			const res = await fetch("http://localhost:5000/api/action", {
				method: "POST",
				credentials: "include",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					productId,
					action: "BUY",
				}),
			});
			const data = await res.json();
			console.log(data);
		} catch (err) {
			console.log(err);
		} finally {
			toast("Product Purchased Successful", {
				duration: 4000,
				position: "top-center",
				icon: "✅",
				iconTheme: {
					primary: "#000",
					secondary: "#fff",
				},

				ariaProps: {
					role: "status",
					"aria-live": "polite",
				},
				removeDelay: 1000,
			});
		}
	};

	if (loading) {
		return (
			<div className="pl-4 pt-8">
				<span className="text-2xl font-light leading-1.5">Loading...</span>
			</div>
		);
	}

	if (error) {
		return (
			<div className="mt-[200px]   max-w-md mx-auto overflow-hidden">
				<span className="text-3xl text-red-400">
					Oops, Something went Wrong! Please refresh
				</span>
			</div>
		);
	}
	return (
		<div className="flex h-screen overflow-hidden">
			<div className=" w-full h-[50%] flex-2/3  px-4 py-5">
				<img
					className="w-full mx-auto h-full object-contain border border-gray-300 rounded-r-sm"
					src={product.image}
					alt="productImage"
				/>
			</div>
			<div className=" w-full h-full px-4 py-5">
				<div className="text-7xl font-bold tracking-tight mb-7">
					{product.name}
				</div>
				<div className="flex flex-col space-y-5">
					<div className="font-light text-xl mb">{product.description}</div>
					<div className="font-normal text-gray-700 ">
						{" "}
						Price : {product.price}
					</div>
					<button
						onClick={buyHandler}
						type="submit"
						className="text-white bg-gray-800  hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm  sm:w-auto px-8 py-3 text-center max-w-sm cursor-pointer">
						Buy Now
					</button>
					<Toaster />
				</div>
			</div>
		</div>
	);
};

export default Product;
