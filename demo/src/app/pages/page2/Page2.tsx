import { memo } from 'react';

import { AccountBox as AccountBoxIcon } from '@mui/icons-material';

import { Frameset } from 'react-app-layouts';

const Page2 = memo(() => {
	return (
		<Frameset
			id="page-page2"
			header={{ title: 'Page 2', icon: AccountBoxIcon, titleVariant: 'h5', iconSize: 'large' }}
			contentProps={{ overflow: 'auto', padding: 2 }}
		>
			<div>Page 2</div>
		</Frameset>
	);
});

Page2.displayName = 'Page2';

export default Page2;
