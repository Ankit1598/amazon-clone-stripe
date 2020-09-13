import React from "react";
import CheckoutProduct from "../../components/Checkout/CheckoutProduct";
import { useStateValue } from "../../StateProvider";

function CheckoutProductContainer({ id, img, title, price, rating }) {
	const [{ basket }, dispatch] = useStateValue();

	const removeFromBasket = () => {
		dispatch({
			type: "REMOVE_FROM_BASKET",
			id: id,
		});
	};

	return (
		<CheckoutProduct>
			<CheckoutProduct.Img src={img} />
			<CheckoutProduct.Info>
				<CheckoutProduct.Info.Title>{title}</CheckoutProduct.Info.Title>
				<CheckoutProduct.Info.Price>
					<small>$ </small>
					<strong>{price}</strong>
				</CheckoutProduct.Info.Price>
				<CheckoutProduct.Info.Rating>
					{Array(rating)
						.fill()
						.map((_, i) => (
							<p>⭐</p>
						))}
				</CheckoutProduct.Info.Rating>
				<CheckoutProduct.Info.Button onClick={removeFromBasket}>
					Remove from Basket
				</CheckoutProduct.Info.Button>
			</CheckoutProduct.Info>
		</CheckoutProduct>
	);
}

export default CheckoutProductContainer;
