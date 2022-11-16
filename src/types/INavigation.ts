import { ReactNode } from 'react';

import { INavItem } from './INavItem';


export interface ISideBarNavigation { top?: (INavItem | ReactNode)[]; bottom?: (INavItem | ReactNode)[] };

export interface ITopBarNavigation { left?: (INavItem | ReactNode)[]; right?: (INavItem | ReactNode)[]; }

export interface INavigation {
	sidebar?: ISideBarNavigation;
	header?: ITopBarNavigation;
}
