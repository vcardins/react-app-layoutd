import { render } from 'react-app-layouts';

import { pages, navigation, buildTheme, Providers } from './app';
import metadata from './manifest.json';
import { Logo } from './logo';

render({
	theme: buildTheme(undefined, metadata.theme_color),
	metadata,
	navigation,
	pages,
	version: process?.env?.['VERSION'],
	Providers,
	Icon: <Logo size={40} />,
	settings: {
		header: { shadowElevation: 1 },
	},
});
