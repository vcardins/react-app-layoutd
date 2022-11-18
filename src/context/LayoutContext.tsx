import { useMemo, createContext, useContext, useState, useCallback } from 'react';
import { deepmerge } from 'deepmerge-ts';

import {
	IRoute,
	IAppLayoutContext,
	IAppLayoutProps,
	LayoutStyle,
	ISettings,
	Positioning,
	TransitionEffect,
} from '../types';
import { useRoutingContext } from './RoutingContext';

import { CenteredBoxLayout, EmptyLayout, DashboardLayout, TwoColumnLayout } from '../components';
import { useLocalStorage } from '../utils';

export const LayoutMap = {
	[LayoutStyle.CenteredBox]: CenteredBoxLayout,
	[LayoutStyle.Empty]: EmptyLayout,
	[LayoutStyle.Dashboard]: DashboardLayout,
	[LayoutStyle.TwoColumn]: TwoColumnLayout,
};

const defaultSettings: ISettings = {
	containerWidth: '1570px',
	displayTitle: true,
	sidebar: {
		display: true,
		iconPositioning: Positioning.Left,
		position: Positioning.Left,
		fontSize: '14px',
		width: { collapsed: '56px', expanded: '200px' },
		spacedItems: false,
	},
	header: {
		display: true,
		iconPositioning: Positioning.Left,
		fontSize: '14px',
		elevation: 2,
		spacedItems: false,
	},
};

const LayoutContext = createContext<IAppLayoutContext>({
	id: '',
	renderedRoutes: null,
	transitionEffect: TransitionEffect.Fade,
	metadata: {} as IAppLayoutProps['metadata'],
	activeRoute: {} as IRoute,
	isNavPaneOpen: false,
	settings: defaultSettings,
	toggleNavPane: () => undefined,
	updateNavigation: () => {},
	updateSettings: () => {},
});

interface ILayoutState extends Pick<IAppLayoutProps, 'isNavPaneOpen'>{}

export const LayoutContextProvider = (props: IAppLayoutProps) => {
	const { metadata, children, transitionEffect, ...rest } = props;
	const { storedValue, setStoredValue } = useLocalStorage<ILayoutState>('layoutState', { isNavPaneOpen: !!rest.isNavPaneOpen });
	const [isNavPaneOpen, toggleNavPane] = useState(storedValue.isNavPaneOpen);
	const [settings, setSettings] = useState(deepmerge(defaultSettings, rest.settings) as ISettings);
	const [navigation, setNavigation] = useState(rest.navigation);
	const { renderedRoutes, activeRoute } = useRoutingContext();

	const layoutStyle = activeRoute?.layout?.style ?? LayoutStyle.Empty;
	const PageLayout = LayoutMap[layoutStyle];
	const layoutId = `layout-${layoutStyle}`;

	const handleToggleNavPane = useCallback((isNavPaneOpen: boolean) => {
		toggleNavPane(isNavPaneOpen);
		setStoredValue({ ... storedValue, isNavPaneOpen });
	}, [setStoredValue, storedValue]);

	const hasSideBarNav = useMemo(() => !!navigation?.sidebar?.top?.length || !!navigation?.sidebar?.bottom?.length, [navigation]);

	const value = useMemo<IAppLayoutContext>(
		() => ({
			...rest,
			metadata,
			id: layoutId,
			renderedRoutes,
			activeRoute,
			settings: {
				...settings,
				sidebar: {
					...settings?.sidebar,
					display: !!settings?.sidebar?.display && hasSideBarNav,
				},
			},
			navigation,
			isNavPaneOpen,
			toggleNavPane: handleToggleNavPane,
			updateSettings: setSettings,
			updateNavigation: setNavigation,
		}),
		[
			rest,
			layoutId,
			metadata,
			renderedRoutes,
			activeRoute,
			isNavPaneOpen,
			navigation,
			settings,
			hasSideBarNav,
			handleToggleNavPane,
		],
	);

	return (
		<LayoutContext.Provider value={value}>
			<PageLayout
				id={layoutId}
				activeRoute={activeRoute}
				renderedRoutes={renderedRoutes}
				transitionEffect={transitionEffect}
			/>
			{children}
		</LayoutContext.Provider>
	);
};

export const useLayoutContext = () => {
	const context = useContext(LayoutContext);
	if (context === undefined) {
		throw new Error('LayoutContext not provided to calling context');
	}
	return context;
};
