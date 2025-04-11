import React from "react";
import Login from "./pages/Login";
import Dashboard from "./pages/dashboard";
import Product from "./pages/Product";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<MainLayout />}>
					<Route index element={<Home />} />
					<Route path="product/:productId" element={<Product />} />
				</Route>
				<Route path="login" element={<Login />} />
				<Route path="dashboard" element={<Dashboard />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
