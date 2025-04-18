import React, { useEffect, useState } from "react";
import Card from "../components/card";
import { useNavigate } from "react-router-dom";

const Home = () => {
	const [products, setProducts] = useState([]);
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();
	useEffect(() => {
		const fetchProducts = async () => {
			try {
				setLoading(true);
				const res = await fetch("http://localhost:5000/api/products", {
					credentials: "include",
					headers: {
						"Content-Type": "application/json",
					},
				});
				console.log(res);
				const data = await res.json();
				setLoading(false);
				if (res.status === 401) {
					navigate("/login");
					return;
				} else if (res.ok) {
					setProducts(data);
				} else {
					setError(data.message);
				}

			} catch (err) {
				console.log(err);
				setError(data.message);
			}
		};
		fetchProducts();
	}, []);

	if (loading) {
		return (
			<div className="pl-4 pt-8">
				<span className="text-2xl font-light leading-1.5">Loading...</span>
			</div>
		);
	}

	if (error || products.length === 0) {
		return (
			<div className="mt-[200px]   max-w-md mx-auto overflow-hidden">
				<span className="text-3xl text-red-400">
					Oops, Something went Wrong! Please refresh
				</span>
			</div>
		);
	}

	return (
		<div>
			<div className="grid grid-cols-4 gap-4 py-5">
				{products.map((product) => (
					<Card
						key={product.id}
						id={product.id}
						name={product.name}
						image={product.image}
						price={product.price}
					/>
				))}
			</div>
			<div className="text-center font-bold text-lg pb-5">
				No more products to show
			</div>
		</div>
	);
};

export default Home;
