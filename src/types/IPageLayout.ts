import { CSSProperties } from 'react';

import { LayoutStyle, ScrollOptions, ToolbarPositions, LayoutMode } from './';

interface IComponentConfig {
	display: boolean;
	style: boolean;
	position: ToolbarPositions;
}

export interface IToolbarConfig extends IComponentConfig {}

export interface IFooterConfig extends IComponentConfig {}

export interface INavbarConfig extends Omit<IComponentConfig, 'style'> {
	folded: boolean;
}

export interface ILayoutConfig {
	scroll?: ScrollOptions;
	navbar?: INavbarConfig;
	toolbar?: IToolbarConfig;
	footer?: IFooterConfig;
	mode?: LayoutMode;
	backgroundImage?: string;
	backgroundColor?: CSSProperties['backgroundColor'];
}

export interface IPageLayout {
	config?: ILayoutConfig;
	style?: LayoutStyle;
}
