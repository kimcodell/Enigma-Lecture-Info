import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import TopBar from "./component/TopBar"
import Home from "./routes/Home"

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<TopBar/>
				<Route path="/" exact={true} component={Home}/>
				{/* <Route path="/" exact={true} component={Home}/>
				<Route path="/" exact={true} component={Home}/> */}
			</BrowserRouter>
		</div>
	);
}

export default App;
