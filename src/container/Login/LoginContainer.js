import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import amazon_logo from "../../img/amazon_black.png";
import Login from "../../components/Login/Login";
import { auth } from "../../firebase";

function LoginContainer() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const history = useHistory();

	const signIn = (e) => {
		e.preventDefault();

		auth
			.signInWithEmailAndPassword(email, password)
			.then((auth) => {
				history.push("/");
			})
			.catch((error) => alert(error.message));
	};

	const register = (e) => {
		e.preventDefault();

		auth
			.createUserWithEmailAndPassword(email, password)
			.then((auth) => {
				if (auth) {
					history.push("/");
				}
			})
			.catch((error) => alert(error.message));
	};

	return (
		<Login>
			<Link to='/'>
				<Login.Img src={amazon_logo} />
			</Link>
			<Login.Wrapper>
				<h1>Sign-In</h1>
				<form>
					<h5>E-mail</h5>
					<input
						type='text'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>

					<h5>Password</h5>
					<input
						type='password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>

					<Login.SignInBtn type='submit' onClick={signIn}>
						Sign-In
					</Login.SignInBtn>
				</form>
				<p>
					By signing in you agree to the Amazon Clone Conditions of Use & Sale.
					Please see our Privacy Notice, our Cookies Notice and our
					Interest-Based Ads Notice.
				</p>
				<Login.RegisterBtn onClick={register}>
					Create Amazon Account
				</Login.RegisterBtn>
			</Login.Wrapper>
		</Login>
	);
}

export default LoginContainer;
