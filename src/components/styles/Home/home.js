import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	justify-content: center;
	margin: auto;
	max-width: 1500px;
	margin-bottom: 10px;
`;

export const Wrapper = styled.div``;

export const Image = styled.img`
	width: 100%;
	z-index: -1;
	margin-bottom: -250px;
	mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
`;

export const Row = styled.div`
	display: flex;
	z-index: 1
	margin: auto 5px;
`;
