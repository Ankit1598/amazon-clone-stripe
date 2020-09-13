import React from "react";
import Checkout from "../../components/Checkout/Checkout";
import { useStateValue } from "../../StateProvider";
import CheckoutProductContainer from "./CheckoutProductContainer";
import SubtotalContainer from "./SubtotalContainer";

function CheckoutContainer() {
	const [{ basket, user }, dispatch] = useStateValue();

	return (
		<Checkout>
			<Checkout.Left>
				<Checkout.AD src='https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn.blog.cpcstrategy.com%2Fwp-content%2Fuploads%2F2013%2F05%2FAmazonProductAds.jpg&f=1&nofb=1' />
				<Checkout.Body>
					<h1>Hello, {user?.email.split("@")[0] || "Guest"}</h1>
					<Checkout.Body.Title>Your Shopping Basket</Checkout.Body.Title>
					{basket.map((item) => (
						<CheckoutProductContainer
							id={item.id}
							title={item.title}
							img={item.img}
							price={item.price}
							rating={item.rating}
						/>
					))}
				</Checkout.Body>
			</Checkout.Left>
			<Checkout.Right>
				<SubtotalContainer />
			</Checkout.Right>
		</Checkout>
	);
}

export default CheckoutContainer;
