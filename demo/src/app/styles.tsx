import { css } from '@emotion/react';

export const styles = css`
	* {
		padding: 0;
		margin: 0;
		line-height: inherit;
		font-size: inherit;
		box-sizing: border-box;
		-webkit-font-smoothing: antialiased;
	}

	html {
		line-height: 1.5;
		font-size: 14px;
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

	#root {
		height: 100vh;
	}

	[disabled] {
		input,
		textarea,
		select,
		button {
			cursor: not-allowed;
		}
	}

	fieldset {
		border: 0;
	}

	@keyframes spinner {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}

	.MuiDrawer-paper form {
		height: 100%;
	}
`;
