import { Box, IconButton, styled } from '@mui/material';
import {
	Menu as MenuIcon,
	ChevronRight as ChevronRightIcon,
	ChevronLeft as ChevronLeftIcon,
} from '@mui/icons-material';

import { useLayoutContext } from '../../../../context';
import { CSSProperties } from 'react';


interface IMenuBarToggleProps {
	width: CSSProperties['width'];
}

const MenuBarToggleContainer = styled(Box)<IMenuBarToggleProps>(({ width }) => `
	width: ${width};
	display: flex;
	justify-content: center;
	align-items: center;
`);

export const MenuBarToggle = ({ source }: { source: 'header' | 'sidebar'}) => {
	const { isNavPaneOpen, toggleNavPane, navigation, settings } = useLayoutContext();

	if (!Object.keys(navigation?.sidebar ?? {})?.length) {
		return null;
	}

	const ExpandIcon = source === 'header' ? MenuIcon : ChevronRightIcon;

	return (
		<MenuBarToggleContainer width={settings.sidebar.width?.collapsed}>
			<IconButton
				color="inherit"
				onClick={() => toggleNavPane?.(!isNavPaneOpen)}
			>
				{isNavPaneOpen ? <ChevronLeftIcon /> : <ExpandIcon />}
			</IconButton>
		</MenuBarToggleContainer>
	);
};
