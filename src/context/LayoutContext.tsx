import { useMemo, createContext, useContext, useState, useCallback } from 'react';
import { ThemeProvider as MuiThemeProvider, CssBaseline } from '@mui/material';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { deepmerge } from 'deepmerge-ts';

import {
	IRoute,
	IAppLayoutContext,
	IAppLayoutProps,
	LayoutStyle,
	INavigation,
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
		shadowElevation: 2,
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
	updateNavigation: (_value: INavigation) => undefined,
	updateSettings: (_value: ISettings) => undefined,
});

interface ILayoutState extends Pick<IAppLayoutProps, 'isNavPaneOpen'>{}

export const LayoutContextProvider = (props: IAppLayoutProps) => {
	const { metadata, children, theme, transitionEffect, ...rest } = props;
	const { storedValue, setStoredValue } = useLocalStorage<ILayoutState>('layoutState', { isNavPaneOpen: !!rest.isNavPaneOpen });
	const [isNavPaneOpen, toggleNavPane] = useState(storedValue.isNavPaneOpen);
	const [settings, setSettings] = useState(deepmerge(defaultSettings, rest.settings) as ISettings);
	const [navigation, setNavigation] = useState(rest.navigation);
	const { renderedRoutes, activeRoute } = useRoutingContext();

	const layoutStyle = activeRoute?.layout?.style ?? LayoutStyle.Empty;
	const PageLayout = LayoutMap[layoutStyle];
	const layoutId = `layout-${layoutStyle}`;

	const updateSettings = useCallback((value: Partial<ISettings>) => {
		setSettings((prevValue) => deepmerge(prevValue, value) as ISettings);
	}, []);

	const updateNavigation = useCallback((value: Partial<INavigation>) => {
		setNavigation((prevValue) => deepmerge(prevValue, value));
	}, []);

	const handleToggleNavPane = useCallback((isNavPaneOpen: boolean) => {
		toggleNavPane(isNavPaneOpen);
		setStoredValue({ ... storedValue, isNavPaneOpen });
	}, [setStoredValue, storedValue]);

	const value = useMemo<IAppLayoutContext>(
		() => ({
			...rest,
			metadata,
			id: layoutId,
			renderedRoutes,
			activeRoute,
			settings,
			navigation,
			isNavPaneOpen,
			toggleNavPane: handleToggleNavPane,
			updateSettings,
			updateNavigation,
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
			handleToggleNavPane,
			updateSettings,
			updateNavigation,
		],
	);

	return (
		<LayoutContext.Provider value={value}>
			<MuiThemeProvider theme={theme}>
				<EmotionThemeProvider theme={theme}>
					<>
						<CssBaseline />
						<PageLayout
							id={layoutId}
							activeRoute={activeRoute}
							renderedRoutes={renderedRoutes}
							transitionEffect={transitionEffect}
						/>
						{children}
					</>
				</EmotionThemeProvider>
			</MuiThemeProvider>
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
