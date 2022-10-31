import { LayoutStyle, IPageConfig } from 'react-app-layouts';

import { PageKey } from '../../types';
import { appRoutes } from '../../config';
import Page2 from './Page2';

export const Page2PageConfig: IPageConfig = {
	layout: { style: LayoutStyle.Dashboard },
	routes: [
		{
			id: PageKey.Page2,
			caseSensitive: true,
			path: appRoutes.Page2,
			metadata: {
				title: 'Page 2',
			},
			element: <Page2 />,
		},
	],
};
