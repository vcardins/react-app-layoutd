import { NavLink } from 'react-router-dom';
import { ListItem, ListItemIcon, ListItemText, Tooltip, styled } from '@mui/material';

import { useLayoutContext } from '../../../../context';
import { INavItem, Positioning } from '../../../../types';

const StyledNavLink = styled(NavLink)`
	text-decoration: none;
	color: inherit;
`;

export const StyledListItem = styled(ListItem, { shouldForwardProp: (prop) => prop !== 'iconPositioning' })<{iconPositioning?: Positioning;}>(({ iconPositioning, theme }) => `
	padding-top: ${theme.mixins.navbar?.padding ?? theme.spacing(0.5)};
	padding-bottom: ${theme.mixins.navbar?.padding ?? theme.spacing(0.5)};

	.MuiTypography-root {
		color: ${theme.palette.common.white};
	}

	&.Mui-selected {
		background-color: ${theme.palette.primary.light};
	}

	flex-direction: ${iconPositioning === Positioning.Right
		? 'row-reverse'
		: iconPositioning === Positioning.Left
			? 'row'
			: iconPositioning === Positioning.Bottom
				? 'column'
				: iconPositioning === Positioning.Top
					? 'column-reverse'
					: undefined
};

	gap: ${iconPositioning && [Positioning.Right, Positioning.Left].includes(iconPositioning) ? theme.spacing(2.5) : 0};

	&:not(&.Mui-selected):hover {
		background-color: ${theme.palette.primary.dark};
		* {
			color: ${theme.palette.common.white};
		}
	}
`);

const StyledListItemIcon = styled(ListItemIcon, { shouldForwardProp: (prop) => prop !== 'selected' })<{
	selected?: boolean;
}>(
	({ theme }) => `
	min-width: auto;
	color: ${theme.palette.common.white};
`,
);

const StyledListItemText = styled(ListItemText, { shouldForwardProp: (prop) => prop !== 'hidden' })<{
	hidden?: boolean;
}>(
	({ hidden }) => `
	white-space: nowrap;
	visibility: ${hidden ? 'collapse' : 'visible'};
	transition: visibility ease 0.25s;
`,
);

export const MenuItem = (props: INavItem & { tooltip?: string }) => {
	const { isNavPaneOpen, settings } = useLayoutContext();
	const { id, url, label, selected, tooltip, onClick } = props;
	const Icon = (props.Icon ? (props.Icon as INavItem['Icon']) : null) as any;

	let link = (
		<StyledListItem
			id={id}
			selected={selected}
			iconPositioning={settings.sidebar.iconPositioning}
			onClick={(e) => onClick?.(e, props)}
		>
			{Icon ? (
				<StyledListItemIcon selected={selected}>
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
