import { memo, PropsWithChildren } from 'react';
import { Global } from '@emotion/react';

import { styles } from './styles';

function ProvidersFunc({ children }: PropsWithChildren<unknown>) {
	return (
		<>
			<Global styles={styles} />
			{children}
		</>
	);
}

export const Providers = memo(ProvidersFunc) as typeof ProvidersFunc;
