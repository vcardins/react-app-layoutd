import { CSSProperties } from 'react';

import { Positioning } from './';

interface INavigationSettings {
	display: boolean;
	iconPositioning: Positioning;
	fontSize: CSSProperties['fontSize'];
}

export interface ISettings {
	containerWidth: CSSProperties['width'];
	sidebar: INavigationSettings & {
		position: Positioning.Left | Positioning.Right;
		width: {
			collapsed: CSSProperties['width'];
			expanded: CSSProperties['width'];
		}
	};
	header: INavigationSettings & {
		shadowElevation?: number;
	};
	displayTitle?: boolean;
}
