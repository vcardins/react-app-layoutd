import { memo, PropsWithChildren } from 'react';

function ProvidersFunc({ children }: PropsWithChildren<unknown>) {
	return (
		<>
			{children}
		</>
	);
}

export const Providers = memo(ProvidersFunc) as typeof ProvidersFunc;
