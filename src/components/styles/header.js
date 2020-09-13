import styled from "styled-components";

export const Container = styled.div`
	height: 60px;
	background: #131921;
	display: flex;
	align-items: center;
	position: sticky;
	top: 0;
	z-index: 100;
`;

export const Logo = styled.img`
	width: 100px;
	object-fit: contain;
	margin: 18px 20px 0 20px;
`;

export const Search = styled.div`
	display: flex;
	flex: 1;
	align-items: center;
	border-radius: 24px;

	& .MuiSvgIcon-root {
		padding: 5px;
		height: 22px !important;
		background-color: #cd9042;
	}
`;

export const Input = styled.input`
	height: 12px;
	padding: 10px;
	width: 100%;
	border: none;
`;

export const Nav = styled.div`
	display: flex;
	justify-content: space-evenly;
`;

export const Option = styled.div`
	display: flex;
	flex-direction: column;
	margin: auto 10px;
	color: #fff;
`;

export const OptionLine1 = styled.span`
	font-size: 10px;
`;

export const OptionLine2 = styled.span`
	font-size: 13px;
	font-weight: 800;
`;

export const OptionBasket = styled.div`
	display: flex;
	align-items: center;
	font-size: 13px;
	font-weight: 800;
	color: white;
`;

export const OptionBasketCount = styled.span`
	margin: auto 10px;
`;
