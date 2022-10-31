import { memo } from 'react';

import { Error } from '../../../components';

const Forbidden = memo(() => (
	<Error
		code="403"
		title="Forbidden"
		Icon="🚫"
		message="You don't have the rights to access this page"
	/>
));

Forbidden.displayName = 'Forbidden';

export default Forbidden;
