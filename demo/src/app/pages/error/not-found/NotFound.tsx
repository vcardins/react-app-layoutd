import { memo } from 'react';

import { Error } from '../../../components';

const NotFound = memo(() => (
	<Error
		code="404"
		title="Not Found"
		Icon="❓"
		message="Sorry, we couldn't find the page"
	/>
));

NotFound.displayName = 'NotFound';

export default NotFound;
