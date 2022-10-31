import { ReactElement, useMemo, createContext, useContext, useEffect } from 'react';
import { matchRoutes, RouteObject, useLocation, useNavigate, useRoutes, Link, NavLink } from 'react-router-dom';

import { IRoute, IRoutingContext, IRoutingContextProps } from '../types';

const RoutingContext = createContext<IRoutingContext>({
	renderedRoutes: null,
	activeRoute: {} as IRoute,
});

export { Link, NavLink, useNavigate, useLocation };

export const RoutingContextProvider = (props: IRoutingContextProps) => {
	const { name, children, pages } = props;
	const location = useLocation();

	const routes = useMemo(() =>
		pages.flatMap((page) => page.routes.map((route) => ({
			...route,
			layout: {
				style: route.layout?.style ?? page.layout?.style,
				// TODO: Implement deep merge for route config
				config: route.layout?.config ?? page.layout?.config,
			},
			permissions: route.permissions ?? page.permissions,
			element: route.element as ReactElement,
		} as IRoute)))
	, [pages]);

	const activeRoute = matchRoutes(routes as RouteObject[], location)?.[0]?.route as IRoute;

	const routesValues = routes as RouteObject[];

	useEffect(() => {
		if (activeRoute) {
			document.title = `[${name}] - ${activeRoute.metadata?.title}`;
		}

		return () => {
			document.title = '';
		};
	}, [name, activeRoute]);

	const renderedRoutes = useRoutes(
		routesValues.map(({ caseSensitive, path, element, children }) => ({ caseSensitive, path, element, children })),
		location,
	);

	const value = useMemo<IRoutingContext>(() => ({
		renderedRoutes,
		activeRoute,
	}),
	[renderedRoutes, activeRoute]);

	return (
		<RoutingContext.Provider value={value}>
			{children}
		</RoutingContext.Provider>
	);
};

export const useRoutingContext = <TRoute = string>() => {
	const context = useContext(RoutingContext) as IRoutingContext<TRoute>;
	if (context === undefined) {
		throw new Error('RoutingContext not provided to calling context');
	}
	return context;
};
