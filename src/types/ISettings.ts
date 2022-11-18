import { AppBarTypeMap } from '@mui/material';
import { CSSProperties } from 'react';

import { Positioning } from './';

interface INavigationSettings {
	display: boolean;
	iconPositioning: Positioning;
	fontSize: CSSProperties['fontSize'];
	spacedItems: boolean;
}

export interface IHeaderSettings {
	backgroundColor?: CSSProperties['backgroundColor'];
	color?: AppBarTypeMap['props']['color'];
	elevation?: number;
}

export interface ISidebarSettings {
	position: Positioning.Left | Positioning.Right;
	width: {
		collapsed: CSSProperties['width'];
		expanded: CSSProperties['width'];
	}
}

export interface ISettings {
	containerWidth: CSSProperties['width'];
	sidebar: INavigationSettings & ISidebarSettings;
	header: INavigationSettings & IHeaderSettings;
	displayTitle?: boolean;
}
