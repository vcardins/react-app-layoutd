import { lighten, darken, createTheme, responsiveFontSizes } from '@mui/material/styles';

export enum ThemeMode {
	Light = 'light',
	Dark = 'dark',
}

const { palette } = createTheme();

const TOOLBAR_MIN_HEIGHT = '56px';

export const buildTheme = (mode = ThemeMode.Light, themeColor?: string) =>
	responsiveFontSizes(
		createTheme({
			palette: {
				mode,
				primary: {
					light: themeColor ? lighten(themeColor, 0.25) : palette.primary.light,
					main: themeColor ? themeColor : palette.primary.main,
					dark: themeColor ? darken(themeColor, 0.5) : palette.primary.dark,
				},
			},
			shadows: [
				'none',
				'0px 1px 3px 0px rgba(0, 0, 0, 0.2),0px 1px 1px 0px rgba(0, 0, 0, 0.14),0px 2px 1px -1px rgba(0, 0, 0, 0.12)',
				'0px 1px 5px 0px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 3px 1px -2px rgba(0, 0, 0, 0.12)',
				'0px 1px 8px 0px rgba(0, 0, 0, 0.2),0px 3px 4px 0px rgba(0, 0, 0, 0.14),0px 3px 3px -2px rgba(0, 0, 0, 0.12)',
				'0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0, 0, 0, 0.12)',
				'0px 3px 5px -1px rgba(0, 0, 0, 0.2),0px 5px 8px 0px rgba(0, 0, 0, 0.14),0px 1px 14px 0px rgba(0, 0, 0, 0.12)',
				'0px 3px 5px -1px rgba(0, 0, 0, 0.2),0px 6px 10px 0px rgba(0, 0, 0, 0.14),0px 1px 18px 0px rgba(0, 0, 0, 0.12)',
				'0px 4px 5px -2px rgba(0, 0, 0, 0.2),0px 7px 10px 1px rgba(0, 0, 0, 0.14),0px 2px 16px 1px rgba(0, 0, 0, 0.12)',
				'0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0, 0, 0, 0.12)',
				'0px 5px 6px -3px rgba(0, 0, 0, 0.2),0px 9px 12px 1px rgba(0, 0, 0, 0.14),0px 3px 16px 2px rgba(0, 0, 0, 0.12)',
				'0px 6px 6px -3px rgba(0, 0, 0, 0.2),0px 10px 14px 1px rgba(0, 0, 0, 0.14),0px 4px 18px 3px rgba(0, 0, 0, 0.12)',
				'0px 6px 7px -4px rgba(0, 0, 0, 0.2),0px 11px 15px 1px rgba(0, 0, 0, 0.14),0px 4px 20px 3px rgba(0, 0, 0, 0.12)',
				'0px 7px 8px -4px rgba(0, 0, 0, 0.2),0px 12px 17px 2px rgba(0, 0, 0, 0.14),0px 5px 22px 4px rgba(0, 0, 0, 0.12)',
				'0px 7px 8px -4px rgba(0, 0, 0, 0.2),0px 13px 19px 2px rgba(0, 0, 0, 0.14),0px 5px 24px 4px rgba(0, 0, 0, 0.12)',
				'0px 7px 9px -4px rgba(0, 0, 0, 0.2),0px 14px 21px 2px rgba(0, 0, 0, 0.14),0px 5px 26px 4px rgba(0, 0, 0, 0.12)',
				'0px 8px 9px -5px rgba(0, 0, 0, 0.2),0px 15px 22px 2px rgba(0, 0, 0, 0.14),0px 6px 28px 5px rgba(0, 0, 0, 0.12)',
				'0px 8px 10px -5px rgba(0, 0, 0, 0.2),0px 16px 24px 2px rgba(0, 0, 0, 0.14),0px 6px 30px 5px rgba(0, 0, 0, 0.12)',
				'0px 8px 11px -5px rgba(0, 0, 0, 0.2),0px 17px 26px 2px rgba(0, 0, 0, 0.14),0px 6px 32px 5px rgba(0, 0, 0, 0.12)',
				'0px 9px 11px -5px rgba(0, 0, 0, 0.2),0px 18px 28px 2px rgba(0, 0, 0, 0.14),0px 7px 34px 6px rgba(0, 0, 0, 0.12)',
				'0px 9px 12px -6px rgba(0, 0, 0, 0.2),0px 19px 29px 2px rgba(0, 0, 0, 0.14),0px 7px 36px 6px rgba(0, 0, 0, 0.12)',
				'0px 10px 13px -6px rgba(0, 0, 0, 0.2),0px 20px 31px 3px rgba(0, 0, 0, 0.14),0px 8px 38px 7px rgba(0, 0, 0, 0.12)',
				'0px 10px 13px -6px rgba(0, 0, 0, 0.2),0px 21px 33px 3px rgba(0, 0, 0, 0.14),0px 8px 40px 7px rgba(0, 0, 0, 0.12)',
				'0px 10px 14px -6px rgba(0, 0, 0, 0.2),0px 22px 35px 3px rgba(0, 0, 0, 0.14),0px 8px 42px 7px rgba(0, 0, 0, 0.12)',
				'0px 11px 14px -7px rgba(0, 0, 0, 0.2),0px 23px 36px 3px rgba(0, 0, 0, 0.14),0px 9px 44px 8px rgba(0, 0, 0, 0.12)',
				'0px 11px 15px -7px rgba(0, 0, 0, 0.2),0px 24px 38px 3px rgba(0, 0, 0, 0.14),0px 9px 46px 8px rgba(0, 0, 0, 0.12)',
			],
			typography: {
				fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
				fontSize: 14,
				fontWeightLight: 300,
				fontWeightRegular: 400,
				fontWeightMedium: 500,
				body2: {
					fontWeight: 500,
					lineHeight: '1.71429em',
					color: 'rgba(0, 0, 0, 0.87)',
				},
				body1: {
					fontWeight: 400,
					lineHeight: '1.5em',
					color: 'rgba(0, 0, 0, 0.87)',
				},
				caption: {
					fontSize: '0.75rem',
					fontWeight: 400,
					lineHeight: '1.375em',
					color: 'rgba(0, 0, 0, 0.54)',
				},
				button: {
					fontSize: '0.875rem',
					textTransform: 'uppercase',
					fontWeight: 500,
					color: 'rgba(0, 0, 0, 0.87)',
				},
			},
			transitions: {
				easing: {
					easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
					easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
					easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
					sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
				},
				duration: {
					shortest: 150,
					shorter: 200,
					short: 250,
					standard: 300,
					complex: 375,
					enteringScreen: 225,
					leavingScreen: 195,
				},
			},
			zIndex: {
				mobileStepper: 1000,
				appBar: 1100,
				drawer: 1200,
				modal: 1300,
				snackbar: 1400,
				tooltip: 1500,
			},
			mixins: {
				toolbar: {
					minHeight: TOOLBAR_MIN_HEIGHT,
					'@media (min-width:0) and (orientation: landscape)': {
						minHeight: TOOLBAR_MIN_HEIGHT,
					},
					'@media (min-width:600px)': {
						minHeight: TOOLBAR_MIN_HEIGHT,
					},
				},
				frameset: {
					header: {
						padding: '1rem',
						backgroundColor: 'rgb(241, 245, 249)',
					},
				},
				navbar: {
					width: '200px',
					padding: '0.2rem',
				},
			},
		}),
	);
