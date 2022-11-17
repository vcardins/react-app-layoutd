import { StrictMode, isValidElement } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import { IAppConfig, INavigation } from './types';
import { LayoutContextProvider, RoutingContextProvider } from './context';

export const render = (props: IAppConfig) => {
	const {
		container = 'root',
		basename,
		App,
		Providers = ({ children }) => <>{children}</>,
		strictMode,
		...rest
	} = props;
	const root = createRoot(document.getElementById(container) as HTMLElement);

	const node = (
		<Router basename={basename}>
			<RoutingContextProvider
				pages={rest.pages}
				name={rest.metadata.short_name}
			>
				<Providers navigation={rest.navigation}>
					{(navigation?: INavigation) => {
						if (isValidElement(App)) {
							return <App />;
						}

						return (
							<LayoutContextProvider
								{...rest}
								navigation={navigation}
							/>
						);
					}}
				</Providers>
			</RoutingContextProvider>
		</Router>
	);

	root.render(strictMode
		? <StrictMode>{node}</StrictMode>
		: node
	);
};
