import { LayoutStyle, IPageConfig } from 'react-app-layouts';

import { PageKey } from '../../../types';
import { appRoutes } from '../../../config';

import Forbidden from './Forbidden';

export const ForbiddenPageConfig: IPageConfig = {
	layout: { style: LayoutStyle.Empty },
	routes: [
		{
			id: PageKey.Forbidden,
			caseSensitive: true,
			path: appRoutes.Forbidden,
			metadata: {
				title: 'Forbidden',
			},
			element: <Forbidden />,
		},
	],
};
