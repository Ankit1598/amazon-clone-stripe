import React from "react";
import Header from "../components/Header";
import amazon_logo from "../img/amazon_white.png";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketOutlinedIcon from "@material-ui/icons/ShoppingBasketOutlined";
import { Link, useHistory } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { auth } from "../firebase";

function HeaderContainer() {
	const [{ basket, user }, dispatch] = useStateValue();

	const history = useHistory();

	const handleAuthentication = () => {
		if (user) {
			auth
				.signOut()
				.then(history.push("/"));
			}
	};

	console.log();
	return (
		<Header>
			<Link to='/'>
				<Header.Logo src={amazon_logo} />
			</Link>
			<Header.Search>
				<Header.Input />
				<SearchIcon />
			</Header.Search>
			<Header.Nav>
				<Link to={!user && "/login"}>
					<Header.Option onClick={handleAuthentication}>
						<Header.Option.Line1>
							Hello {user?.email.split("@")[0] || "Guest"}
						</Header.Option.Line1>
						<Header.Option.Line2>
							{user ? "Sign Out" : "Sign In"}
						</Header.Option.Line2>
					</Header.Option>
				</Link>
				<Header.Option>
					<Header.Option.Line1>Returns</Header.Option.Line1>
					<Header.Option.Line2>& Orders</Header.Option.Line2>
				</Header.Option>
				<Header.Option>
					<Header.Option.Line1>Try</Header.Option.Line1>
					<Header.Option.Line2>Prime</Header.Option.Line2>
				</Header.Option>
				<Link to='/checkout'>
					<Header.Option.Basket>
						<ShoppingBasketOutlinedIcon />
						<Header.Option.Basket.Count>
							{basket?.length}
						</Header.Option.Basket.Count>
					</Header.Option.Basket>
				</Link>
			</Header.Nav>
		</Header>
	);
}

export default HeaderContainer;
