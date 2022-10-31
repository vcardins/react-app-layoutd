import { useState, MouseEvent, useMemo, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router';

import { Popper, Fade, Paper, IconButton, Menu, MenuItem, Tooltip, ClickAwayListener, Button } from '@mui/material';

import { useLayoutContext } from '../../../../context';
import { INavItem } from '../../../../types';
import { getDefaultButtonProps } from './utils';

export const MenuDropdown = ({ item }: { item: INavItem }) => {
	const navigate = useNavigate();
	const { settings } = useLayoutContext();
	const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
	const arrowRef = useRef<HTMLElement | null>(null);

	const handleMenuClick = (event: MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleMenuOptionClick = useCallback(
		(event: MouseEvent<HTMLLIElement>, option: INavItem) => {
			if (option.route) {
				navigate(option.route.path);
				handleClose();
			}

			option.onClick?.(event, item);
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[item],
	);

	const open = Boolean(anchorEl);
	const id = open ? 'simple-popover' : undefined;

	const menu = useMemo(() => {
		const options = (item.children || []).map((child) => (
			<MenuItem
				key={child.id || child.label}
				onClick={(e) => handleMenuOptionClick?.(e, child)}
				sx={(theme) => ({ fontSize: theme.typography.fontSize })}
			>
				{child.Icon && (
					<IconButton
						id={id}
						disabled={child.disabled}
						size="small"
						aria-label={child.label}
						aria-controls="menu-appbar"
						aria-haspopup="true"
						color="inherit"
					>
						<child.Icon fontSize="small" />
					</IconButton>
				)}
				{child.label}
			</MenuItem>
		));

		return (
			<Menu
				id={id}
				anchorEl={anchorEl}
				keepMounted={false}
				open={open}
				onClose={handleClose}
				PaperProps={{
					elevation: 0,
					sx: {
						overflow: 'visible',
						filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
						mt: 1.5,
						'& .MuiAvatar-root': {
							width: 32,
							height: 32,
							ml: -0.5,
							mr: 1,
						},
						'&:before': {
							content: '""',
							display: 'block',
							position: 'absolute',
							top: 0,
							right: 14,
							width: 10,
							height: 10,
							bgcolor: 'background.paper',
							transform: 'translateY(-50%) rotate(45deg)',
							zIndex: 0,
						},
					},
				}}
				transformOrigin={{ horizontal: 'right', vertical: 'top' }}
				anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
			>
				{options}
			</Menu>
		);
	}, [anchorEl, item, id, open, handleMenuOptionClick]);

	const buttonProps = getDefaultButtonProps<HTMLButtonElement>(
		item,
		settings.header.iconPositioning,
		handleMenuClick,
	);

	return (
		<div>
			<Tooltip title={item?.label ?? ''} arrow={true}>
				{item?.label ? <Button {...buttonProps} /> : <IconButton {...buttonProps} />}
			</Tooltip>
			{menu ? (
				<Popper
					open={open}
					anchorEl={anchorEl}
					transition
					disablePortal={true}
					modifiers={[
						{
							name: 'flip',
							enabled: false,
							options: {
								altBoundary: true,
								rootBoundary: 'document',
								padding: 8,
							},
						},
						{
							name: 'preventOverflow',
							enabled: true,
							options: {
								altAxis: true,
								altBoundary: true,
								tether: true,
								rootBoundary: 'document',
								padding: 8,
							},
						},
						{
							name: 'arrow',
							enabled: true,
							options: {
								element: arrowRef.current,
							},
						},
					]}
				>
					{({ TransitionProps }) => (
						<Fade {...TransitionProps} timeout={350}>
							<Paper sx={{ boxShadow: 'none' }}>
								<ClickAwayListener onClickAway={handleClose}>
									<Paper>{menu}</Paper>
								</ClickAwayListener>
							</Paper>
						</Fade>
					)}
				</Popper>
			) : null}
		</div>
	);
};
