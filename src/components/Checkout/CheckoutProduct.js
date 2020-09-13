import React from "react";
import {
	Container,
	Img,
	Info,
	InfoTitle,
	InfoPrice,
	InfoRating,
	InfoButton,
} from "../styles/Checkout/checkoutProduct";

export default function CheckoutProduct({ children, ...restProps }) {
	return <Container {...restProps}>{children}</Container>;
}

CheckoutProduct.Img = function CheckoutProductImg({ children, ...restProps }) {
	return <Img {...restProps}>{children}</Img>;
};

CheckoutProduct.Info = function CheckoutProductInfo({
	children,
	...restProps
}) {
	return <Info {...restProps}>{children}</Info>;
};

CheckoutProduct.Info.Title = function CheckoutProductInfoTitle({
	children,
	...restProps
}) {
	return <InfoTitle {...restProps}>{children}</InfoTitle>;
};

CheckoutProduct.Info.Price = function CheckoutProductInfoPrice({
	children,
	...restProps
}) {
	return <InfoPrice {...restProps}>{children}</InfoPrice>;
};

CheckoutProduct.Info.Rating = function CheckoutProductInfoRating({
	children,
	...restProps
}) {
	return <InfoRating {...restProps}>{children}</InfoRating>;
};

CheckoutProduct.Info.Button = function CheckoutProductInfoButton({
	children,
	...restProps
}) {
	return <InfoButton {...restProps}>{children}</InfoButton>;
};
