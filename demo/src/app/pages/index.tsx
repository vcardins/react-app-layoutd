import screenfull from 'screenfull';

import {
	Dashboard as DashboardIcon,
	Pages as PagesIcon,
	VerifiedUser as VerifiedUserIcon,
	Fullscreen as FullscreenIcon,
	FullscreenExit as FullscreenExitIcon,
	Settings as SettingsIcon,
} from '@mui/icons-material';
import { INavigation } from 'react-app-layouts';

import { PageKey } from '../types';
import { HomePageConfig } from './home';
import { Page2PageConfig } from './page2';
import { ForbiddenPageConfig, NotFoundPageConfig } from './error';

import { getNavId } from './utils';

export const pages = [
	HomePageConfig,
	Page2PageConfig,
	ForbiddenPageConfig,
	NotFoundPageConfig,
];

export const navigation: INavigation = {
	sidebar: {
		top: [
			{
				id: getNavId(PageKey.Home),
				label: 'Dashboard',
				Icon: DashboardIcon,
				route: HomePageConfig.routes.find(({ id }) => id === PageKey.Home),
			},
			{
				id: getNavId(PageKey.Page2),
				label: 'Page 2',
				Icon: PagesIcon,
				route: Page2PageConfig.routes.find(({ id }) => id === PageKey.Page2),
			},
		],
	},
	header: {
		right: [
			{
				id: 'fullscreen',
				tooltip: 'Fullscreen toggle',
				Icon: !screenfull.isFullscreen ? FullscreenIcon : FullscreenExitIcon,
				onClick: () => {
					if (screenfull.isEnabled) {
						screenfull.toggle();
					}
				},
			},
			{
				id: 'my-account',
				label: 'My Account',
				Icon: VerifiedUserIcon,
				children: [
					{
						id: 'user-profile',
						label: 'Profile',
						Icon: DashboardIcon,
					},
					{
						id: 'my-settings',
						label: 'Settings',
						Icon: SettingsIcon,
					},
				],
			},
		],
	},
};
