import { LayoutStyle, IPageConfig } from 'react-app-layouts';

import { PageKey } from '../../types';
import { appRoutes } from '../../config';

import Home from './Home';

export const HomePageConfig: IPageConfig = {
	layout: { style: LayoutStyle.Dashboard },
	routes: [
		{
			id: PageKey.Home,
			caseSensitive: true,
			path: appRoutes.Home,
			metadata: {
				title: 'Dashboard',
			},
			element: <Home />,
		},
	],
};
