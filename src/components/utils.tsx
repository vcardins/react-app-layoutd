import { isValidElement, ReactNode, MouseEvent } from 'react';
import { ButtonProps, Icon } from '@mui/material';
import type { IconTypeMap } from '@mui/material';
import type { OverridableComponent } from '@mui/material/OverridableComponent';
import { INavItem, Positioning } from '../types';

export const getIcon = (rawIcon?: OverridableComponent<IconTypeMap> | ReactNode, size?: IconTypeMap['props']['fontSize'] | number) => {
	if (!rawIcon) return null;

	if (isValidElement(rawIcon)) {
		return rawIcon as ReactNode;
	}

	const iconProps = Object.assign(
		{ component: rawIcon as OverridableComponent<IconTypeMap> },
		Number.isFinite(size)
			? { sx: { fontSize: size } }
			: { fontSize: size }
	) as any;

	return <Icon {...iconProps} /> as ReactNode;
};

export const getDefaultButtonProps = <T extends object>(
	item: INavItem,
	iconPositioning: Positioning,
	onClick?: (event: MouseEvent<T>) => void,
) => {
	const { id, label, disabled } = item;

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

	if (item.Icon) {
		if (label) {
			const tag = iconPositioning === Positioning.Right ? 'endIcon' : 'startIcon';
			buttonProps[tag] = getIcon(item.Icon);
			buttonProps.children = item?.label;
		} else {
			buttonProps.children = getIcon(item.Icon, 'small');
		}
	}

	return buttonProps;
};
