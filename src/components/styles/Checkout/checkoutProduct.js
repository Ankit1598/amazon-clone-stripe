import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	margin: auto 20px;
	padding-bottom: 10px;
	border-bottom: 1px solid lightgray;
`;

export const Img = styled.img`
	object-fit: contain;
	width: 100px;
	height: 100px;
	padding-top: 20px;
`;

export const Info = styled.div`
	padding-left: 20px;
`;

export const InfoTitle = styled.p`
	font-size: 17px;
	font-weight: 800;
`;

export const InfoPrice = styled.p``;

export const InfoRating = styled.div`
	display: flex;
`;

export const InfoButton = styled.div`
	background: #f0c14b;
	border: 1px solid;
	margin-top: 10px;
	border-color: #a88734 #9c97e31 #846a29;
	color: #111;
	padding: 5px;
	width: max-content;
`;
