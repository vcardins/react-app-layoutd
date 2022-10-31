import { MouseEvent } from 'react';
import { ButtonProps } from '@mui/material';
import { INavItem, Positioning } from '../../../../types';

export const getDefaultButtonProps = <T extends object>(
	item: INavItem,
	iconPositioning: Positioning,
	onClick?: (event: MouseEvent<T>) => void,
) => {
	const { id, label, disabled, Icon } = item;

	const buttonProps = {
		id,
		disabled,
		size: 'small',
		'aria-label': label,
		'aria-controls': 'menu-button',
		color: 'inherit',
		children: label,
		sx: { textTransform: 'capitalize' },
		onClick,
	} as ButtonProps;

	if (Icon) {
		if (label) {
			const tag = iconPositioning === Positioning.Right ? 'endIcon' : 'startIcon';
			buttonProps[tag] = <Icon />;
			buttonProps.children = item?.label;
		} else {
			buttonProps.children = <Icon fontSize="small" />;
		}
	}

	return buttonProps;
};
