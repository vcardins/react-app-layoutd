import { NavLink } from 'react-router-dom';
import { ListItem, ListItemIcon, ListItemText, Tooltip, styled } from '@mui/material';

import { useLayoutContext } from '../../../../context';
import { INavItem, Positioning } from '../../../../types';
import { shouldForwardProp } from '../../../utils';

const StyledNavLink = styled(NavLink)`
	text-decoration: none;
	color: inherit;
`;

export const StyledListItem = styled(ListItem, shouldForwardProp(['backgroundImage', 'spaced', 'isNavPaneOpen', 'iconPositioning']) )<{iconPositioning?: Positioning; spaced?: boolean; isNavPaneOpen?: boolean }>(({ iconPositioning, spaced, theme, isNavPaneOpen }) => `
	padding: ${theme.spacing(0.5)} 0 ${theme.spacing(0.5)} ${isNavPaneOpen ? theme.spacing(2) : 0};
	margin-bottom: ${spaced ? theme.spacing(0.75) : 0};
	border-radius: ${spaced ? '4px' : 0};
	transition: background-color 0.3s ease, width 0.3 linear;

	.MuiTypography-root {
		color: ${theme.palette.common.white};
	}

	&.Mui-selected {
		background-color: ${theme.palette.primary.light};
	}

	&:not(&.Mui-selected):hover {
		background-color: ${theme.palette.primary.dark};
		* {
			color: ${theme.palette.common.white};
		}
	}

	flex-direction: ${iconPositioning === Positioning.Right
		? 'row-reverse'
		: iconPositioning === Positioning.Left
			? 'row'
			: iconPositioning === Positioning.Bottom
				? 'column'
				: iconPositioning === Positioning.Top
					? 'column-reverse'
					: undefined};

	gap: ${(iconPositioning && [Positioning.Right, Positioning.Left].includes(iconPositioning)) || !isNavPaneOpen
		? theme.spacing(2.5)
		: 0};
`);

const StyledListItemIcon = styled(ListItemIcon, shouldForwardProp(['selected', 'isNavPaneOpen']) )<{ selected?: boolean; isNavPaneOpen?: boolean }>(({ theme, isNavPaneOpen }) => `
	min-width: ${!isNavPaneOpen ? '100%' : 'auto'};
	${!isNavPaneOpen ? 'justify-content: center' : undefined};
	color: ${theme.palette.common.white};
`);

const StyledListItemText = styled(ListItemText, shouldForwardProp(['hidden']) )<{ hidden?: boolean; }>( ({ hidden }) => `
	white-space: nowrap;
	visibility: ${hidden ? 'collapse' : 'visible'};
	transition: visibility ease 0.25s;
`);

export const MenuItem = (props: INavItem) => {
	const { isNavPaneOpen, settings } = useLayoutContext();
	const { id, url, label, selected, tooltip, onClick } = props;
	const Icon = (props.Icon ? (props.Icon as INavItem['Icon']) : null) as any;

	let link = (
		<StyledListItem
			id={id}
			selected={selected}
			disablePadding
			iconPositioning={settings.sidebar.iconPositioning}
			spaced={settings.sidebar.spacedItems}
			isNavPaneOpen={isNavPaneOpen}
			onClick={(e) => onClick?.(e, props)}
		>
			{Icon ? (
				<StyledListItemIcon selected={selected} isNavPaneOpen={isNavPaneOpen}>
					<Icon />
				</StyledListItemIcon>
			) : null}
			<StyledListItemText primary={label} hidden={!isNavPaneOpen} />
		</StyledListItem>
	);

	if (tooltip) {
		link = (
			<Tooltip title={tooltip} placement="right" arrow={true}>
				{link}
			</Tooltip>
		);
	}

	return url
		? (
			<StyledNavLink id={id} to={url}>
				{link}
			</StyledNavLink>
		) : (
			<span id={id}>{link}</span>
		);
};
