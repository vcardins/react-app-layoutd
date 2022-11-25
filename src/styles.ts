import { css } from '@emotion/react';

export const defaultStyle = css`
	* {
		padding: 0;
		margin: 0;
		line-height: inherit;
		font-size: inherit;
		box-sizing: border-box;
		-webkit-font-smoothing: antialiased;
	}

	/* wrapping these attributes with @media screen so printing is not affected */
	@media screen {
		html,
		body {
			height: 100vh;
			width: 100vw;
			overflow: hidden;
		}
	}

	body > div {
		height: 100vh;
	}
`;
