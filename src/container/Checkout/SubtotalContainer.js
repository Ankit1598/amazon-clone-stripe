import React from "react";
import Subtotal from "../../components/Checkout/Subtotal";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../../StateProvider";
import { getBasketTotal } from "../../reducer";
import { useHistory } from "react-router-dom";

function SubtotalContainer() {
	const history = useHistory();
	const [{ basket }, dispatch] = useStateValue();

	return (
		<Subtotal>
			<CurrencyFormat
				renderText={(value) => (
					<>
						<p>
							Subtotal ({basket.length} items):
							<strong> {value}</strong>
						</p>
						<small className='subtotal__gift'>
							<input type='checkbox' />
							This order contains a gift
						</small>
					</>
				)}
				decimalScale={2}
				value={getBasketTotal(basket)}
				displayType={"text"}
				thousandSeparator={true}
				prefix={"INR "}
			/>
			<Subtotal.Button>Proceed to Chechout</Subtotal.Button>
		</Subtotal>
	);
}

export default SubtotalContainer;
