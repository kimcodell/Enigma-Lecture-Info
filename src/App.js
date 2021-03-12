import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import TopBar from "./component/TopBar"
import Footer from "./component/Footer"
import Home from "./routes/Home"
import Detail from "./routes/Detail";
import CustomerCenter from "./routes/CustomerCenter"
import PrivacyPolicy from "./routes/PrivacyPolicy";
import Faq from "./routes/Faq";
import "./App.scss"

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<TopBar />
				<Route path="/" exact={true} component={Home} />
				{/* <Route path="/recommend" exact={true} component={Home}/> */}
				<Route path="/cs" exact={true} component={CustomerCenter} />
				<Route path="/detail/:id" exact={true} component={Detail} />
				<Route path="/privacy" exact={true} component={PrivacyPolicy} />
				<Route path="/faq" exact={true} component={Faq} />
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
