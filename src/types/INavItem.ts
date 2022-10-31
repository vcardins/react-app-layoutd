import { MouseEvent } from 'react';
import type { SvgIconTypeMap } from '@mui/material';
import type { OverridableComponent } from '@mui/material/OverridableComponent';

import { IBadge, NavItemType } from './';

export interface INavItem {
	id: string;
	label?: string;
	tooltip?: string;
	Icon?: OverridableComponent<SvgIconTypeMap>;
	badge?: IBadge;
	url?: string;
	disabled?: boolean;
	type?: NavItemType;
	selected?: boolean;
	onClick?: (e: MouseEvent<HTMLElement>, item: INavItem) => void;
	target?: string;
	href?: string;
	children?: INavItem[];
	order?: number;
}

export interface ISubNavItem extends Omit<INavItem, 'children'> {
	children?: INavItem;
}
