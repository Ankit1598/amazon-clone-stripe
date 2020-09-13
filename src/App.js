import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HeaderContainer from "./container/HeaderContainer";
import HomeContainer from "./container/Home/HomeContainer";
import CheckoutContainer from "./container/Checkout/CheckoutContainer";
import LoginContainer from "./container/Login/LoginContainer";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

function App() {
	const [{}, dispatch] = useStateValue();

	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
			if (authUser) {
				dispatch({
					type: "SET_USER",
					user: authUser,
				});
			} else {
				dispatch({
					type: "SET_USER",
					user: null,
				});
			}
		});
	}, []);

	return (
		<Router>
			<Switch>
				<Route path='/login'>
					<LoginContainer />
				</Route>
				<Route path='/checkout'>
					<HeaderContainer />
					<CheckoutContainer />
				</Route>

				<Route path='/'>
					<HeaderContainer />
					<HomeContainer />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
