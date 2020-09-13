import React from "react";
import {
	Container,
	Img,
	Wrapper,
	SignInBtn,
	RegisterBtn,
} from "../styles/Login/login";

export default function Login({ children, ...restProps }) {
	return <Container {...restProps}>{children}</Container>;
}

Login.Img = function LoginImg({ children, ...restProps }) {
	return <Img {...restProps}>{children}</Img>;
};

Login.Wrapper = function LoginWrapper({ children, ...restProps }) {
	return <Wrapper {...restProps}>{children}</Wrapper>;
};

Login.SignInBtn = function LoginSignInBtn({ children, ...restProps }) {
	return <SignInBtn {...restProps}>{children}</SignInBtn>;
};

Login.RegisterBtn = function LoginRegisterBtn({ children, ...restProps }) {
	return <RegisterBtn {...restProps}>{children}</RegisterBtn>;
};
