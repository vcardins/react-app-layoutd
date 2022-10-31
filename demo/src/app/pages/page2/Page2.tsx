import { memo } from 'react';

import { AccountBox as AccountBoxIcon } from '@mui/icons-material';

import { Frameset } from 'react-app-layouts';

const Page2 = memo(() => {
	return (
		<Frameset
			id="page-page2"
			header={{ title: 'Page 2', icon: AccountBoxIcon }}
			contentProps={{ overflow: 'auto', padding: 2 }}
		>
			<div>Page 2</div>
		</Frameset>
	);
});

Page2.displayName = 'Page2';

export default Page2;

// import { ImportContacts as ImportContactsIcon } from '@mui/icons-material';
// import { useLayoutContext, INavigation } from 'react-app-layouts';
// , useEffect
// const { updateNavigation } = useLayoutContext();

// useEffect(() => {
// 	updateNavigation({
// 		toolbar: [{
// 			id: 'contacts',
// 			tooltip: 'Contacts',
// 			Icon: ImportContactsIcon,
// 			onClick: () => {
// 				alert('Dynamically add menu options')
// 			},
// 		}],
// 	} as INavigation);
// }, []);
