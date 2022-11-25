import { CSSProperties } from 'react';
import { Theme, useMediaQuery, useTheme, Drawer as MuiDrawer, styled } from '@mui/material';

import { MenuItemsList } from './MenuItemsList';
import { MenuBarToggle } from './MenuBarToggle';

import { useLayoutContext } from '../../../../context';
import { shouldForwardProp } from '../../../utils';

const getTransition = (theme: Theme, tag: 'enteringScreen' | 'leavingScreen') =>
	theme.transitions.create('width', {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration[tag] as number,
	});

export const StyledNavigation = styled(MuiDrawer, shouldForwardProp(['isOpened']) )<{
	isOpened: boolean;
	widths: { collapsed: CSSProperties['width']; expanded: CSSProperties['width']; }
}>(({ isOpened, widths, theme }) => ({
	width: isOpened ? widths.expanded : widths.collapsed,
	height: '100%',
	overflow: 'auto',
	transition: getTransition(theme, isOpened ? 'enteringScreen' : 'leavingScreen'),
	'& .MuiDrawer-paper': {
		border: 0,
		backgroundColor: theme.mixins.navbar?.backgroundColor ?? theme.palette.primary.main,
		color: theme.mixins.navbar?.color ?? theme.palette.common.white,
		position: 'static',
		overflow: 'hidden',
	},
}));

export const MenuBar = () => {
	const { isNavPaneOpen, toggleNavPane, NavPaneHeader = null, settings } = useLayoutContext();
	const theme = useTheme();
	const isLargeScreen = useMediaQuery(theme.breakpoints.up('sm'));

	if (!settings.sidebar.display) {
		return null;
	}

	return (
		<StyledNavigation
			variant={isLargeScreen ? 'permanent' : 'temporary'}
			open={!isLargeScreen && isNavPaneOpen ? true : false}
			onClose={() => toggleNavPane?.(!isNavPaneOpen)}
			isOpened={!!isNavPaneOpen}
			widths={settings.sidebar.width}
		>
			{ NavPaneHeader }
			<MenuItemsList />
			<MenuBarToggle source="sidebar" />
		</StyledNavigation>
	);
};
