import { ReactNode } from 'react';

import { IRoute, IAppConfig, INavigation, ISettings, TransitionEffect } from './';

export interface IAppLayoutProps extends Pick<IAppConfig, 'theme' | 'navigation' | 'metadata' | 'Icon' | 'settings' | 'transitionEffect'> {
	children?: ReactNode;
	components?: {
		header?: ReactNode;
		footer?: ReactNode;
	};
	ids?: {
		title?: string;
		subTitle?: string;
		icon?: string;
	};
	NavPaneHeader?: ReactNode | null;
	isNavPaneOpen?: boolean;
}

export interface ILayoutProps {
	id: string;
	activeRoute: IRoute;
	renderedRoutes: ReactNode;
	transitionEffect?: TransitionEffect;
}

export interface IAppLayoutContext extends Omit<IAppLayoutProps, 'name' | 'theme' | 'settings'>, ILayoutProps {
	settings: ISettings;
	toggleNavPane: (value: boolean) => void;
	updateNavigation: (value: INavigation) => void;
	updateSettings: (value: ISettings) => void;
}
