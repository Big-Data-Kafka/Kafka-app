import React from "react";
import Card from "../components/card";

const Home = () => {
	return (
		<div className="grid grid-cols-4 gap-4">
			{Array.from({ length: 20 }).map(() => (
				<Card />
			))}
		</div>
	);
};

export default Home;
