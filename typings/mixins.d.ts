import { CSSProperties } from '@mui/material/styles/createMixins';

declare module '@mui/material/styles/createMixins' {
	// Allow for custom mixins to be added
	interface Mixins {
		frameset?: {
			header?: CSSProperties;
			body?: CSSProperties;
		};
		footer?: CSSProperties;
		navbar?: CSSProperties;
	}
}
