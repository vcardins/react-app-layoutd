import { ReactNode } from 'react';

import { IRoute, IAppConfig } from './';

export interface IRoutingContextProps extends Pick<IAppConfig, 'pages'> {
	name: string;
	children?: ReactNode;
}

export interface IRoutingContext<TRoute = string> {
	activeRoute: IRoute<TRoute>;
	renderedRoutes: ReactNode;
}
