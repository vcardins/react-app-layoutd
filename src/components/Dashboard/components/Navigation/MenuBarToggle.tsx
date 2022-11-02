import { Box, IconButton, styled } from '@mui/material';
import {
	Menu as MenuIcon,
	ChevronRight as ChevronRightIcon,
	ChevronLeft as ChevronLeftIcon,
} from '@mui/icons-material';

import { useLayoutContext } from '../../../../context';


interface IMenuBarToggleProps {
	isNavPaneOpen?: boolean;
}

const MenuBarToggleContainer = styled(Box)<IMenuBarToggleProps>(({ theme }) => `
	display: flex;
	justify-content: flex-start;
	align-items: center;
	padding: ${theme.spacing(1)};
`);

export const MenuBarToggle = ({ source }: { source: 'header' | 'sidebar'}) => {
	const { isNavPaneOpen, toggleNavPane, navigation } = useLayoutContext();

	if (!Object.keys(navigation?.sidebar ?? {})?.length) {
		return null;
	}

	const ExpandIcon = source === 'header' ? MenuIcon : ChevronRightIcon;

	return (
		<MenuBarToggleContainer>
			<IconButton
				color="inherit"
				onClick={() => toggleNavPane?.(!isNavPaneOpen)}
			>
				{isNavPaneOpen ? <ChevronLeftIcon /> : <ExpandIcon />}
			</IconButton>
		</MenuBarToggleContainer>
	);
};
