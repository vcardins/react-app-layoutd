import { LayoutStyle, IPageConfig } from 'react-app-layouts';

import { PageKey } from '../../../types';
import { appRoutes } from '../../../config';

import NotFound from './NotFound';

export const NotFoundPageConfig: IPageConfig = {
	layout: { style: LayoutStyle.Empty },
	routes: [
		{
			id: PageKey.NotFound,
			caseSensitive: true,
			path: appRoutes.NotFound,
			metadata: {
				title: 'NotFound',
			},
			element: <NotFound />,
		},
	],
};
