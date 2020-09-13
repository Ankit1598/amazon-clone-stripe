import React from "react";
import Product from "../../components/Home/Product";
import { useStateValue } from '../../StateProvider'

function ProductContainer({ id, title, img, price, rating }) {
	const [{ basket }, dispatch] = useStateValue();

	const addToBasket = () => {
		dispatch({
			type: "ADD_TO_BASKET",
			item: {
				id: id,
				title: title,
				img: img,
				price: price,
				rating: rating,
			},
		});
	};

	return (
		<Product>
			<Product.Info>
				<p>{title}</p>
				<Product.Price>
					<small>INR </small>
					<strong>{price}</strong>
				</Product.Price>
				<Product.Rating>
					{Array(rating)
						.fill()
						.map((_, i) => (
							<span role='img' aria-label='rating'>
								⭐
							</span>
						))}
				</Product.Rating>
			</Product.Info>
			<Product.Image src={img} />
			<Product.Button onClick={addToBasket}>Add To Basket</Product.Button>
		</Product>
	);
}

export default ProductContainer;
