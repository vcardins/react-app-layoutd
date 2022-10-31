import { RouteObject } from 'react-router-dom';

import { IPageLayout, IPageMetaData, IPageConfig } from './';

export interface IRoute<T = string> extends Omit<RouteObject, 'path'>, Pick<IPageConfig<T>, 'permissions'> {
	path: string;
	metadata?: IPageMetaData;
	layout?: IPageLayout;
}

export type KeyedRoute = Record<string, IRoute>;
