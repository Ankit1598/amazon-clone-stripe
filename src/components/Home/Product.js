import React from "react";
import { Container, Info, Title, Price, Rating, Image, Button } from "../styles/Home/product";

export default function Product({ children, ...restProps }) {
	return <Container {...restProps}>{children}</Container>;
}

Product.Info = function ProductInfo({ children, ...restProps }) {
	return <Info {...restProps}>{children}</Info>;
};

Product.Title = function ProductTitle({ children, ...restProps }) {
	return <Title {...restProps}>{children}</Title>;
};

Product.Price = function ProductPrice({ children, ...restProps }) {
	return <Price {...restProps}>{children}</Price>;
};

Product.Rating = function ProductRating({ children, ...restProps }) {
	return <Rating {...restProps}>{children}</Rating>;
};

Product.Image = function ProductImage({ children, ...restProps }) {
	return <Image {...restProps}>{children}</Image>;
};

Product.Button = function ProductButton({ children, ...restProps }) {
	return <Button {...restProps}>{children}</Button>;
};
