import React from "react";
import { Container, Gift, Button } from "../styles/Checkout/subtotal";

export default function Subtotal({ children, ...restProps }) {
	return <Container {...restProps}>{children}</Container>;
}

Subtotal.Gift = function SubtotalGift({ children, ...restProps }) {
	return <Gift {...restProps}>{children}</Gift>;
};

Subtotal.Button = function SubtotalButton({ children, ...restProps }) {
	return <Button {...restProps}>{children}</Button>;
};
