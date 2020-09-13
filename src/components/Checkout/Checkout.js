import React from "react";
import { Container, Left, AD, Body, BodyTitle, Right } from "../styles/Checkout/checkout";

export default function Checkout({ children, ...restProps }) {
	return <Container {...restProps}>{children}</Container>;
}

Checkout.Left = function CheckoutLeft({ children, ...restProps }) {
	return <Left {...restProps}>{children}</Left>;
};

Checkout.AD = function CheckoutAD({ children, ...restProps }) {
	return <AD {...restProps}>{children}</AD>;
};

Checkout.Body = function CheckoutBody({ children, ...restProps }) {
	return <Body {...restProps}>{children}</Body>;
};

Checkout.Body.Title = function BodyCheckoutTitle({ children, ...restProps }) {
	return <BodyTitle {...restProps}>{children}</BodyTitle>;
};

Checkout.Right = function CheckoutRight({ children, ...restProps }) {
	return <Right {...restProps}>{children}</Right>;
};
