import React from "react";
import Login from "./pages/Login";
import Dashboard from "./pages/dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				{/* <Route index element={<Home />} /> */}

				<Route path="login" element={<Login />} />
				{/* <Route path="product/:id" element={<Product />} /> */}
				<Route path="dashboard" element={<Dashboard />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
