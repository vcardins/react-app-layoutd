import { RouteObject } from 'react-router-dom';

import { IPageLayout, IPageMetaData, IPageConfig } from './';

export interface IRoute extends Omit<RouteObject, 'path'>, Pick<IPageConfig, 'permissions'> {
	path: string;
	metadata?: IPageMetaData;
	layout?: IPageLayout;
	replace?: boolean;
}

export type KeyedRoute = Record<string, IRoute>;
