import { ReactElement } from 'react';

import { Theme } from '@mui/material';
import { SerializedStyles } from '@emotion/react';

import { IManifest, INavigation, IPageConfig, ISettings, Subset, TransitionEffect } from './';

export interface IProvidersProps {
	navigation?: INavigation;
	children: (navigation?: INavigation) => ReactElement;
}

export interface IAppConfig {
	container?: string;
	basename?: string;
	strictMode?: boolean;
	theme: Theme;
	styles?: SerializedStyles;
	Icon?: JSX.Element;
	transitionEffect?: TransitionEffect;
	metadata: IManifest;
	navigation?: INavigation;
	settings?: Subset<ISettings>;
	pages: IPageConfig[];
	App?: () => ReactElement;
	Providers?: (props: IProvidersProps) => ReactElement;
	version?: string | ReactElement;
}
