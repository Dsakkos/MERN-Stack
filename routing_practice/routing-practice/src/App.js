import "./App.css";
import Home from "./components/Home";
import RouteComponent from "./components/RouteComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Routes>
					{}
					<Route element={<Home />} path="/home" />
					{}
					<Route element={<RouteComponent />} path="/:word" />
					{}
					<Route element={<RouteComponent />} path="/:word/:color/:bgColor" />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
