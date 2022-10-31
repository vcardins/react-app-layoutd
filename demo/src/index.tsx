import { render } from 'react-app-layouts';

import { pages, navigation, buildTheme, Providers } from './app';
import metadata from './manifest.json';

render({
	theme: buildTheme(undefined, metadata.theme_color),
	metadata,
	navigation,
	pages,
	version: process?.env?.['VERSION'],
	Providers,
	settings: {
		header: { shadowElevation: 1 },
	},
});
