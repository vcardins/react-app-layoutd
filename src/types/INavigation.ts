import { INavItem } from './INavItem';


export interface ISideBarNavigation { top?: INavItem[]; bottom?: INavItem[] };

export interface ITopBarNavigation { left?: INavItem[]; right?: INavItem[]; }

export interface INavigation {
	sidebar?: ISideBarNavigation;
	header?: ITopBarNavigation;
}
