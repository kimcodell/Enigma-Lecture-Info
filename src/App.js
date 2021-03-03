import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import TopBar from "./component/TopBar"
import Home from "./routes/Home"
import CustomerCenter from "./routes/CustomerCenter"
import "./App.scss"

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<TopBar/>
				<Route path="/" exact={true} component={Home}/>
				{/* <Route path="/" exact={true} component={Home}/> */}
				<Route path="/cs" exact={true} component={CustomerCenter}/>
			</BrowserRouter>
		</div>
	);
}

export default App;
