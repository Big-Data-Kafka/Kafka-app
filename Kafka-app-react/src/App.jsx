import React from "react";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Product from "./pages/Product";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<NavBar />}>
					<Route index element={<Home />} />
					<Route path="product/:id" element={<Product />} />
				</Route>

				<Route path="login" element={<Login />} />

				{/* <Route path="dashboard" element={<Dashboard />} />  */}
			</Routes>
		</BrowserRouter>
	);
};

export default App;
