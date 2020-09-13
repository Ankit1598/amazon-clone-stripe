import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 100vh;
	background: #fff;
`;

export const Img = styled.img`
	margin: 20px auto;
	object-fit: contain;
	width: 100px;
`;

export const Wrapper = styled.div`
	width: 300px;
	height: fit-content;
	display: flex;
	flex-direction: column;
	border-radius: 5px;
	border: 1px solid lightgray;
	padding: 20px;

	& h1 {
		font-weight: 500;
		margin-bottom: 20px;
	}

	& p {
		margin-top: 15px;
		font-size: 12px;
	}

	& form {
		& h5 {
			margin-bottom: 5px;
		}

		& input {
			height: 30px;
			width: 98%;
			margin-bottom: 10px;
			background-color: #fff;
		}
	}
`;

export const SignInBtn = styled.button`
	background: #f0c14b;
	border-radius: 2px;
	width: 100%;
	height: 30px;
	border: 1px solid;
	margin-top: 10px;
	border-color: #a88734 #9c7e31 #846a29;
`;

export const RegisterBtn = styled.button`
	border-radius: 2px;
	width: 100%;
	height: 30px;
	border: 1px solid;
	margin-top: 10px;
	border-color: darkgray;
`;
