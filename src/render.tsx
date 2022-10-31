import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import { IAppConfig } from './types';
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
				<Providers>
					{App
						? <App />
						: <LayoutContextProvider {...rest} />
					}
				</Providers>
			</RoutingContextProvider>
		</Router>
	);

	root.render(strictMode
		? <StrictMode>{node}</StrictMode>
		: node
	);
};
