import { memo } from 'react';

import { Frameset } from 'react-app-layouts';

const Home = memo(() => (
	<Frameset
		id="page-home"
		contentProps={{ overflow: 'auto', padding: 2 }}
	>
		<div>Dashboard</div>
	</Frameset>
));

Home.displayName = 'Home';

export default Home;
