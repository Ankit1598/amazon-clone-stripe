import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html, body {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: 'PT Sans', sans-serif;
    background-color: rgb(234, 237, 237);
  }

  body {

    &::-webkit-scrollbar {
	  width: 5px;
	}

	/* Track */
	&::-webkit-scrollbar-track {
	  border-radius: 10px;
	}
	 
	/* Handle */
	&::-webkit-scrollbar-thumb {
	  background: grey; 
	  border-radius: 10px;
	}
  }
 `;
