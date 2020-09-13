import React from "react";
import { Container, Wrapper, Image, Row } from "../styles/Home/home";

export default function Home({ children, ...restProps }) {
	return <Container {...restProps}>{children}</Container>;
}

Home.Wrapper = function HomeWrapper({ children, ...restProps }) {
	return <Wrapper {...restProps}>{children}</Wrapper>;
};

Home.Image = function HomeImage({ children, ...restProps }) {
	return <Image {...restProps}>{children}</Image>;
};

Home.Row = function HomeRow({ children, ...restProps }) {
	return <Row {...restProps}>{children}</Row>;
};
