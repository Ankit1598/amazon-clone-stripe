import React from "react";
import {
	Container,
	Logo,
	Search,
	Input,
	Nav,
	Option,
	OptionLine1,
	OptionLine2,
	OptionBasket,
	OptionBasketCount,
} from "./styles/header";

export default function Header({ children, ...restProps }) {
	return <Container {...restProps}>{children}</Container>;
}

Header.Logo = function HeaderLogo({ children, ...restProps }) {
	return <Logo {...restProps}>{children}</Logo>;
};

Header.Search = function HeaderSearch({ children, ...restProps }) {
	return <Search {...restProps}>{children}</Search>;
};

Header.Input = function HeaderInput({ children, ...restProps }) {
	return <Input {...restProps}>{children}</Input>;
};

Header.Nav = function HeaderNav({ children, ...restProps }) {
	return <Nav {...restProps}>{children}</Nav>;
};

Header.Option = function HeaderOption({ children, ...restProps }) {
	return <Option {...restProps}>{children}</Option>;
};

Header.Option.Line1 = function HeaderOptionLine1({ children, ...restProps }) {
	return <OptionLine1 {...restProps}>{children}</OptionLine1>;
};

Header.Option.Line2 = function HeaderOptionLine2({ children, ...restProps }) {
	return <OptionLine2 {...restProps}>{children}</OptionLine2>;
};

Header.Option.Basket = function HeaderOptionBasket({ children, ...restProps }) {
	return <OptionBasket {...restProps}>{children}</OptionBasket>;
};

Header.Option.Basket.Count = function HeaderOptionBasketCount({ children, ...restProps }) {
	return <OptionBasketCount {...restProps}>{children}</OptionBasketCount>;
};
